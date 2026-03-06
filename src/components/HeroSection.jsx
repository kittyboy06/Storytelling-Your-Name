import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function HeroSection() {
    const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="hero" id="hero">
            {/* Background image */}
            <div className="hero-bg">
                <img src="/images/hero-comet-anime.jpg" alt="Comet Tiamat streaking across the night sky over Itomori" />
                <div className="hero-overlay" />
                {/* Animated dot grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.2,
                    backgroundImage: 'radial-gradient(rgba(17, 50, 212, 0.8) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            {/* Floating geometric accents */}
            <div style={{
                position: 'absolute', top: '25%', left: '20%',
                width: '8rem', height: '8rem',
                border: '1px solid rgba(17, 50, 212, 0.25)',
                borderRadius: '0.75rem', transform: 'rotate(-12deg)',
                animation: 'float-slow 6s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', bottom: '30%', right: '20%',
                width: '12rem', height: '12rem',
                border: '1px solid rgba(17, 50, 212, 0.15)',
                borderRadius: '50%',
                animation: 'float-medium 8s ease-in-out infinite',
            }} />

            {/* Content */}
            <div ref={ref} className={`hero-content scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                <span className="section-label" style={{ marginBottom: '1.5rem' }}>
                    A Technical Narrative Experience
                </span>

                <h1 className="hero-title">
                    Narrating Fate through{' '}
                    <br />
                    <span className="gradient-text">Data Structures</span>
                </h1>

                <p className="hero-subtitle">
                    A technical exploration of Makoto Shinkai's masterpiece, mapping the emotional
                    connections of Mitsuha and Taki into a rigorous Entity-Relationship model.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <button className="btn-primary" onClick={() => document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' })}>
                        Start the Story
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="btn-outline" onClick={() => document.getElementById('er-dashboard')?.scrollIntoView({ behavior: 'smooth' })}>
                        View ER-Model
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 700 }}>
                    Scroll to Explore
                </span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
