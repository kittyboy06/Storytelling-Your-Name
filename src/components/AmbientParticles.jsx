/* eslint-disable */
import { useMemo } from 'react';

export default function AmbientParticles() {
    const stars = useMemo(() => {
        return Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: `${Math.random() * 4 + 2}s`,
            delay: `${Math.random() * 5}s`,
        }));
    }, []);

    const floatingOrbs = useMemo(() => [
        { id: 1, size: 300, color: 'rgba(17, 50, 212, 0.08)', left: '10%', top: '20%', delay: '0s', duration: '12s' },
        { id: 2, size: 200, color: 'rgba(0, 242, 255, 0.05)', left: '70%', top: '60%', delay: '3s', duration: '15s' },
        { id: 3, size: 250, color: 'rgba(124, 58, 237, 0.06)', left: '50%', top: '30%', delay: '6s', duration: '10s' },
    ], []);

    const driftingParticles = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: `particle-${i}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            delay: `${Math.random() * 10}s`,
            duration: `${6 + Math.random() * 8}s`,
            colorType: i % 3
        }));
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {/* Twinkling stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        '--duration': star.duration,
                        '--delay': star.delay,
                    }}
                />
            ))}

            {/* Floating orbs */}
            {floatingOrbs.map((orb) => (
                <div
                    key={orb.id}
                    className="floating-orb"
                    style={{
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        background: orb.color,
                        left: orb.left,
                        top: orb.top,
                        animationDelay: orb.delay,
                        animationDuration: orb.duration,
                    }}
                />
            ))}

            {/* Shooting comet trails — always crossing the screen */}
            <div
                className="comet-trail"
                style={{
                    top: '15%',
                    animationDuration: '8s',
                    animationDelay: '0s',
                }}
            />
            <div
                className="comet-trail"
                style={{
                    top: '45%',
                    animationDuration: '12s',
                    animationDelay: '4s',
                    background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.6), transparent)',
                }}
            />
            <div
                className="comet-trail"
                style={{
                    top: '75%',
                    animationDuration: '10s',
                    animationDelay: '7s',
                    background: 'linear-gradient(90deg, transparent, rgba(0, 242, 255, 0.4), transparent)',
                }}
            />

            {/* Floating particles that drift */}
            {driftingParticles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.width,
                        height: particle.height,
                        background: particle.colorType === 0 ? 'var(--accent-cyan)' : particle.colorType === 1 ? 'var(--primary-light)' : 'var(--accent-purple)',
                        boxShadow: particle.colorType === 0 ? '0 0 6px var(--accent-cyan)' : particle.colorType === 1 ? '0 0 6px var(--primary-light)' : '0 0 6px var(--accent-purple)',
                        animation: `float-particle ${particle.duration} ease-in-out infinite`,
                        animationDelay: particle.delay,
                        opacity: 0.4,
                    }}
                />
            ))}

            {/* Rotating orbit ring */}
            <div
                style={{
                    position: 'absolute',
                    right: '5%',
                    top: '25%',
                    width: '120px',
                    height: '120px',
                    border: '1px solid rgba(17, 50, 212, 0.1)',
                    borderRadius: '50%',
                    animation: 'rotate-slow 30s linear infinite',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '-3px',
                        left: '50%',
                        width: '6px',
                        height: '6px',
                        background: 'var(--primary)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px var(--primary)',
                    }}
                />
            </div>
        </div>
    );
}
