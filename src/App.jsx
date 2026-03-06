import { useEffect } from 'react';
import './index.css';
import AmbientParticles from './components/AmbientParticles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import ChapterBodySwap from './components/ChapterBodySwap';
import ChapterStory from './components/ChapterStory';
import ERDashboard from './components/ERDashboard';
import ERDiagram from './components/ERDiagram';
import SinglePageGallery from './components/SinglePageGallery';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';

export default function App() {
  // Arrow key navigation to strictly snap between sections
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only hijack standard ArrowDown/ArrowUp, not when users are typing in inputs (though we have none)
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = Array.from(document.querySelectorAll('.hero, .chapter-section'));
        if (!sections.length) return;

        // Give a slight buffer to avoid rounding errors
        const threshold = 10;

        if (e.key === 'ArrowDown') {
          // Find the first section whose top is strictly below the current viewport top
          const next = sections.find(el => el.getBoundingClientRect().top > threshold);
          if (next) {
            e.preventDefault();
            next.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (e.key === 'ArrowUp') {
          // Find the last section whose top is strictly above the current viewport top
          const prev = [...sections].reverse().find(el => el.getBoundingClientRect().top < -threshold);
          if (prev) {
            e.preventDefault();
            prev.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Always-on ambient animations */}
      <AmbientParticles />

      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero — Landing Page */}
        <HeroSection />

        {/* Chapter 1 — Introduction & Architecture */}
        <IntroSection />

        {/* Chapter 2 — Body Swap & Messages */}
        <ChapterBodySwap />

        {/* Chapter 3 — The Comet & Disaster */}
        <ChapterStory chapterIndex={2} />

        {/* Chapter 4 — The Truth About Time */}
        <ChapterStory chapterIndex={3} />

        {/* Chapter 5 — Taki's Attempt & Twilight Meeting */}
        <ChapterStory chapterIndex={4} />

        {/* Chapter 6 — The Years After */}
        <ChapterStory chapterIndex={5} />

        {/* ER Diagram Dashboard */}
        <ERDashboard />

        {/* Full ER Diagram */}
        <ERDiagram />

        {/* Photo Gallery */}
        <SinglePageGallery />

        {/* Conclusion */}
        <ConclusionSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
