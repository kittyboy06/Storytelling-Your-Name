import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function PhotoGallery() {
    const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
    const { ref: galleryRef, isRevealed: galleryRevealed } = useScrollReveal();

    const photos = [
        { src: '/images/gallery/gallery-1.jpg', alt: 'Mitsuha and Taki face writing' },
        { src: '/images/gallery/gallery-2.jpg', alt: 'Mitsuha and Taki back to back with red cord' },
        { src: '/images/gallery/gallery-3.jpg', alt: 'Falling through twilight with red cord' },
        { src: '/images/gallery/gallery-4.jpg', alt: 'Tokyo stairs' },
        { src: '/images/gallery/gallery-5.png', alt: 'Train in Itomori' },
        { src: '/images/gallery/gallery-6.jpg', alt: 'Comet splitting sky' },
        { src: '/images/gallery/gallery-7.jpg', alt: 'Tokyo cityscape' },
        { src: '/images/gallery/gallery-8.jpg', alt: 'Your Name promo art' },
        { src: '/images/gallery/gallery-9.jpg', alt: 'Taki looking at stairs' },
        { src: '/images/gallery/gallery-10.jpg', alt: 'Falling comet sky' }
    ];

    return (
        <section id="photo-gallery" className="chapter-section dot-grid" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div ref={headerRef} className={`scroll-reveal ${headerRevealed ? 'revealed' : ''}`}>
                    <div className="section-header" style={{ justifyContent: 'center', marginBottom: '4rem' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>photo_library</span>
                        <h2 className="section-title" style={{ textAlign: 'center' }}>
                            Cinematic Gallery <span className="section-tag">Visual Artifacts</span>
                        </h2>
                    </div>
                </div>

                <div ref={galleryRef} className={`scroll-reveal-scale ${galleryRevealed ? 'revealed' : ''}`}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        alignItems: 'start' // Critical for masonry-like organic heights without stretching 
                    }}>
                        {photos.map((photo, i) => (
                            <div
                                key={i}
                                className="glass-card-stitch"
                                style={{
                                    padding: '0.75rem',
                                    borderRadius: '1rem',
                                    transition: 'all 0.4s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(17, 50, 212, 0.2)';
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'var(--slate-800)';
                                }}
                            >
                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.5rem', width: '100%' }}>
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        style={{
                                            width: '100%',
                                            height: 'auto',  // Let natural height dictate ratio 
                                            display: 'block',
                                            transition: 'transform 0.5s ease',
                                        }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    {/* Subtle overlay glow */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(to top, rgba(10, 10, 15, 0.5) 0%, transparent 30%)',
                                        pointerEvents: 'none'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
