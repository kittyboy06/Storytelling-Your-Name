import { useEffect } from 'react';

export default function EntityModal({ isOpen, onClose, entity }) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Also need to pause scroll snapping on html if active
            document.documentElement.style.scrollSnapType = 'none';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.scrollSnapType = 'y mandatory';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.scrollSnapType = 'y mandatory';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen || !entity) return null;

    return (
        <div className="modal-backdrop" onClick={onClose} style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(10, 13, 26, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
        }}>
            {/* Modal Content container */}
            <div className="modal-content glass-panel glow-border"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
                style={{
                    position: 'relative', width: '100%', maxWidth: '36rem',
                    padding: '3rem', borderRadius: '1.5rem',
                    background: 'rgba(16, 19, 34, 0.95)',
                    border: '1px solid var(--primary)',
                }}>

                {/* Close Button */}
                <button onClick={onClose} style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    background: 'transparent', border: 'none', color: 'var(--text-400)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '0.5rem', borderRadius: '50%', transition: 'background 0.2s, color 0.2s',
                }}
                    onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = 'white'; }}
                    onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-400)'; }}
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Header Icon */}
                <div style={{
                    width: '4rem', height: '4rem',
                    background: 'rgba(17, 50, 212, 0.15)',
                    borderRadius: '1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '0 0 20px rgba(17, 50, 212, 0.3)',
                }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '2rem' }}>{entity.icon}</span>
                </div>

                {/* Detailed Content */}
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>{entity.title}</h2>
                <div style={{ width: '3rem', height: '2px', background: 'var(--primary)', marginBottom: '1.5rem' }} />

                <p style={{ color: 'var(--text-200)', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {entity.desc}
                </p>

                {/* Additional contextual database details (mocked) */}
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--slate-800)' }}>
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-500)', marginBottom: '0.75rem' }}>
                        Schema Details
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-400)', fontSize: '0.875rem' }}>
                        <li style={{ display: 'flex', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1.125rem', color: 'var(--primary-light)' }}>data_object</span>
                            Model Type: {entity.title.includes('Relationship') ? 'Associative Join Table' : 'Primary Entity'}
                        </li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '1.125rem', color: 'var(--primary-light)' }}>visibility</span>
                            Visibility Scope: System-wide
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
