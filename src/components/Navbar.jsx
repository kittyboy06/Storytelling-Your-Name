import { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const navLinks = [
    { label: 'The Story', target: 'chapter-1' },
    { label: 'Body Swap', target: 'chapter-2' },
    { label: 'Comet', target: 'chapter-3' },
    { label: 'ER Model', target: 'er-dashboard' },
    { label: 'Schema', target: 'er-diagram' },
];

export default function Navbar() {
    const progress = useScrollProgress();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.75rem' }}>hub</span>
                    <h2 style={{ color: 'var(--text-100)', fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                        ER-Diagram <span style={{ color: 'rgba(17, 50, 212, 0.7)', fontWeight: 500 }}>Odyssey</span>
                    </h2>
                </div>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {navLinks.map((link) => (
                        <span
                            key={link.target}
                            className="nav-link"
                            onClick={() => scrollTo(link.target)}
                            style={{ display: 'none' }}
                            id={`nav-${link.target}`}
                        >
                            {link.label}
                        </span>
                    ))}
                    {navLinks.map((link) => (
                        <span
                            key={`visible-${link.target}`}
                            className="nav-link"
                            onClick={() => scrollTo(link.target)}
                            style={{ cursor: 'pointer' }}
                        >
                            {link.label}
                        </span>
                    ))}
                </nav>
            </div>

            <div className="scroll-progress" style={{ width: `${progress}%` }} />
        </header>
    );
}
