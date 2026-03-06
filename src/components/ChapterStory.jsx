import { useScrollReveal } from '../hooks/useScrollAnimation';
import { storyData } from '../data/storyData';

export default function ChapterStory({ chapterIndex }) {
    const chapter = storyData.chapters[chapterIndex];
    const { ref, isRevealed } = useScrollReveal();
    const { ref: erRef, isRevealed: erRevealed } = useScrollReveal();

    const isReversed = chapterIndex % 2 !== 0;

    return (
        <section id={chapter.id} className="chapter-section dot-grid">
            <div className="chapter-number">{chapter.number}</div>
            <div className="container">
                <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: chapter.image ? (isReversed ? '1fr 1.2fr' : '1.2fr 1fr') : '1fr',
                        gap: '3rem',
                        alignItems: 'center',
                    }}>
                        {/* Text content - conditionally first or second */}
                        {isReversed && chapter.image && <ChapterImage src={chapter.image} alt={chapter.title} />}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: '2.5rem', height: '2.5rem',
                                    background: 'rgba(17, 50, 212, 0.15)',
                                    borderRadius: '0.5rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>{chapter.icon}</span>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)' }}>
                                        Chapter {chapter.number}
                                    </p>
                                    <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700 }}>{chapter.title}</h2>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-400)', lineHeight: 1.8, fontSize: '1rem' }}>
                                {chapter.content}
                            </p>

                            {/* ER Note */}
                            <div ref={erRef} className={`glass-panel scroll-reveal ${erRevealed ? 'revealed' : ''}`} style={{ padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', marginTop: '0.125rem', flexShrink: 0 }}>database</span>
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-200)', marginBottom: '0.375rem' }}>
                                        ER Perspective — {chapter.subtitle}
                                    </h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-500)', lineHeight: 1.6 }}>{chapter.erNote}</p>
                                </div>
                            </div>
                        </div>

                        {!isReversed && chapter.image && <ChapterImage src={chapter.image} alt={chapter.title} />}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChapterImage({ src, alt }) {
    return (
        <div style={{
            position: 'relative', borderRadius: '1rem', overflow: 'hidden',
            border: '1px solid var(--slate-800)',
            aspectRatio: '16/10',
        }}>
            <img
                src={src}
                alt={alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, var(--bg-dark) 0%, transparent 40%)',
            }} />
            {/* Floating particles on image */}
            <div style={{
                position: 'absolute', top: '10%', left: '15%',
                width: '4px', height: '4px', borderRadius: '50%',
                background: 'var(--accent-cyan)',
                boxShadow: '0 0 8px var(--accent-cyan)',
                animation: 'float-particle 5s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', top: '30%', right: '20%',
                width: '3px', height: '3px', borderRadius: '50%',
                background: 'var(--primary-light)',
                boxShadow: '0 0 8px var(--primary-light)',
                animation: 'float-particle 7s ease-in-out infinite 2s',
            }} />
        </div>
    );
}
