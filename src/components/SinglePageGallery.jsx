import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollAnimation';

const photos = [
    { src: 'images/gallery/gallery-1.jpg', alt: 'Mitsuha and Taki face writing', top: '15%', left: '15%', width: '25%', rotate: '-8deg', zIndex: 1 },
    { src: 'images/gallery/gallery-2.jpg', alt: 'Mitsuha and Taki back to back', top: '20%', left: '45%', width: '30%', rotate: '4deg', zIndex: 2 },
    { src: 'images/gallery/gallery-3.jpg', alt: 'Falling through twilight', top: '15%', left: '80%', width: '22%', rotate: '-12deg', zIndex: 3 },
    { src: 'images/gallery/gallery-4.jpg', alt: 'Tokyo stairs', top: '48%', left: '12%', width: '20%', rotate: '6deg', zIndex: 4 },
    { src: 'images/gallery/gallery-5.png', alt: 'Train in Itomori', top: '42%', left: '38%', width: '28%', rotate: '-5deg', zIndex: 5 },
    { src: 'images/gallery/gallery-6.jpg', alt: 'Comet splitting sky', top: '48%', left: '68%', width: '35%', rotate: '8deg', zIndex: 6 },
    { src: 'images/gallery/gallery-7.jpg', alt: 'Tokyo cityscape', top: '78%', left: '18%', width: '26%', rotate: '-10deg', zIndex: 7 },
    { src: 'images/gallery/gallery-8.jpg', alt: 'Your Name promo art', top: '75%', left: '50%', width: '22%', rotate: '12deg', zIndex: 8 },
    { src: 'images/gallery/gallery-9.jpg', alt: 'Taki looking at stairs', top: '68%', left: '85%', width: '22%', rotate: '-6deg', zIndex: 9 },
    { src: 'images/gallery/gallery-10.jpg', alt: 'Falling comet sky', top: '85%', left: '78%', width: '30%', rotate: '3deg', zIndex: 10 }
];

export default function SinglePageGallery() {
    const { ref, isRevealed } = useScrollReveal();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="photo-gallery" className="chapter-section" style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-dark)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Ambient Background Glows */}
            <div style={{
                position: 'absolute', top: '20%', left: '20%', width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(17,50,212,0.15) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '10%', width: '40vw', height: '40vw',
                background: 'radial-gradient(circle, rgba(13,226,236,0.1) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
            }} />
            <div className="dot-grid" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4 }} />

            <div ref={ref} className={`container scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{
                zIndex: 2,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '2rem',
                paddingBottom: '2rem'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative', zIndex: 100 }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                        PROJECT TIAMAT: MEMORY FRAGMENTS
                    </p>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        Cinematic Collage
                    </h2>
                </div>

                {/* Collage Container */}
                <div style={{
                    position: 'relative',
                    flex: 1,
                    width: '100%',
                    marginTop: '2rem',
                    minHeight: '600px' // Ensure base height on smaller screens
                }}>
                    {photos.map((photo, i) => {
                        const isHovered = hoveredIndex === i;
                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    position: 'absolute',
                                    top: photo.top,
                                    left: photo.left,
                                    width: photo.width,
                                    minWidth: '150px', // Prevent getting too small on mobile
                                    zIndex: isHovered ? 50 : photo.zIndex,
                                    transform: isHovered
                                        ? `translate(-50%, -50%) scale(1.3) rotate(0deg)`
                                        : `translate(-50%, -50%) rotate(${photo.rotate})`,
                                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                                    cursor: 'pointer',
                                    transformOrigin: 'center center'
                                }}
                            >
                                {/* Photo Frame (Polaroid/Glassmorphic Style) */}
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '0.5rem',
                                    paddingBottom: '2rem',
                                    borderRadius: '0.5rem',
                                    border: isHovered ? '2px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: isHovered
                                        ? '0 30px 60px rgba(0,0,0,0.8), 0 0 30px rgba(13,226,236,0.3)'
                                        : '0 10px 30px rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(10px)',
                                    width: '100%',
                                    position: 'relative',
                                    transition: 'all 0.5s ease'
                                }}>
                                    <div style={{
                                        width: '100%',
                                        aspectRatio: '16/9',
                                        overflow: 'hidden',
                                        borderRadius: '0.25rem',
                                        backgroundColor: '#000'
                                    }}>
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.7s ease',
                                                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                                            }}
                                        />
                                    </div>
                                    {/* Caption / Tape effect could go here */}
                                    {isHovered && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '0.5rem',
                                            left: '0.5rem',
                                            right: '0.5rem',
                                            textAlign: 'center',
                                            animation: 'fade-in 0.3s ease forwards'
                                        }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--text-200)',
                                                fontFamily: 'monospace',
                                                letterSpacing: '0.05em'
                                            }}>
                                                {photo.alt}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
