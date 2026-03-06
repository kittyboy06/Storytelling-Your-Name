const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const dir = './presentation_screenshots';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // 1. Launch puppeteer
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // 2. Set to a standard full HD desktop resolution
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

    // 3. Go to local Vite server assuming it's running on port 5173
    console.log('Navigating to http://localhost:5173...');
    try {
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 });
    } catch (err) {
        console.error('Failed to load page. Is the dev server running (`npm run dev`)?', err);
        process.exit(1);
    }

    // Wait a bit extra for fonts and ambient particles to render
    await new Promise(r => setTimeout(r, 2000));

    // 4. Dynamically count sections
    const sectionCount = await page.evaluate(() => {
        return document.querySelectorAll('.hero, .chapter-section').length;
    });
    console.log(`Detected ${sectionCount} sections.`);

    // Click on the body to ensure keyboard focus is on the document
    await page.click('body');

    for (let i = 1; i <= sectionCount; i++) {
        const filename = `${dir}/section_${String(i).padStart(2, '0')}.png`;

        console.log(`Capturing screenshot ${i} of ${sectionCount}...`);
        // Capture the current viewport
        await page.screenshot({ path: filename, fullPage: false });

        if (i < sectionCount) {
            // Press ArrowRight to trigger the custom smooth scroll implemented in App.jsx
            await page.keyboard.press('ArrowRight');
            // Wait for the smooth scroll animation to fully complete before taking next screenshot
            await new Promise(r => setTimeout(r, 2000));
        }
    }

    console.log('Screenshots saved to /presentation_screenshots/');
    await browser.close();
})();
