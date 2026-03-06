import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function ConclusionSection() {
    const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
    const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();
    const { ref: flowRef, isRevealed: flowRevealed } = useScrollReveal();

    return (
        <section id="conclusion" className="chapter-section" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            position: 'relative',
            backgroundColor: 'var(--bg-dark)',
            overflow: 'hidden'
        }}>
            {/* Cinematic Ambient Lighting */}
            <div style={{
                position: 'absolute', top: '-10%', left: '-10%', width: '60vw', height: '60vw',
                background: 'radial-gradient(circle, rgba(13,226,236,0.08) 0%, transparent 60%)',
                filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute', bottom: '-20%', right: '-10%', width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(255,45,85,0.08) 0%, transparent 60%)',
                filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
            }} />

            <div className="dot-grid" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.3 }} />

            <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Header */}
                <div ref={headerRef} className={`scroll-reveal ${headerRevealed ? 'revealed' : ''}`} style={{ textAlign: 'center' }}>
                    <div className="tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', background: 'rgba(10, 10, 15, 0.8)', border: '1px solid rgba(13, 226, 236, 0.3)' }}>
                        <span className="material-symbols-outlined" style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>auto_awesome</span>
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-200)', letterSpacing: '0.2em' }}>SYSTEM FINAL ANALYSIS</span>
                    </div>
                </div>

                {/* TOP HALF: Twin Glass Panels */}
                <div ref={contentRef} className={`scroll-reveal-scale ${contentRevealed ? 'revealed' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                    {/* Story Conclusion Panel */}
                    <div className="glass-card-stitch" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: '1.5rem', width: '40px', height: '3px', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', background: 'rgba(13,226,236,0.1)', padding: '0.4rem', borderRadius: '0.4rem' }}>movie</span>
                            The Story – Your Name
                        </h3>

                        <div style={{ color: 'var(--text-300)', lineHeight: 1.6, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ margin: 0 }}>
                                <strong>Your Name</strong> concludes with a powerful message about fate and connection. Mitsuha and Taki experience mysterious body-swapping across three years.
                            </p>
                            <p style={{ margin: 0 }}>
                                Discovering her town's destruction by a comet, Taki races to change the past. He successfully warns her, saving Itomori's people from the disaster.
                            </p>
                            <p style={{ margin: 0 }}>
                                As timelines shift, their memories fade. Years later in Tokyo, they find each other anew, proving that emotional bonds transcend forgotten details.
                            </p>
                            <p style={{ fontStyle: 'italic', borderLeft: '2px solid var(--slate-700)', paddingLeft: '0.75rem', marginTop: '0.5rem', color: 'var(--text-400)', fontSize: '0.85rem' }}>
                                Destiny brings people together, even when memories fade.
                            </p>
                        </div>
                    </div>

                    {/* ER Diagram Conclusion Panel */}
                    <div className="glass-card-stitch" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: '1.5rem', width: '40px', height: '3px', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} />

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.5rem', background: 'rgba(17,50,212,0.1)', padding: '0.4rem', borderRadius: '0.4rem' }}>account_tree</span>
                            The ER Diagram
                        </h3>

                        <div style={{ color: 'var(--text-300)', lineHeight: 1.6, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ margin: 0 }}>
                                The ER diagram systematically models the narrative using database design. It identifies core <strong>Entities</strong>: Characters, Locations, Events, and Messages.
                            </p>
                            <p style={{ margin: 0 }}>
                                It defines <strong>Relationships</strong> showcasing how characters live in locations, swap bodies, and experience catastrophic events like the comet strike.
                            </p>
                            <p style={{ margin: 0 }}>
                                This structure transforms abstract fiction into structured data, proving that qualitative narratives can be powerfully organized through technical architecture.
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM HALF: Animated Flowchart */}
                <div ref={flowRef} className={`scroll-reveal-scale ${flowRevealed ? 'revealed' : ''}`}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        width: '100%',
                        position: 'relative',
                        flexWrap: 'wrap'
                    }}>

                        {/* Node 1: Narrative (Pink Glow) */}
                        <div className="glass-card-stitch" style={{
                            flex: 1, padding: '1.5rem', textAlign: 'center', zIndex: 2, minWidth: '200px',
                            border: '1px solid rgba(255, 45, 85, 0.4)',
                            boxShadow: '0 0 20px rgba(255, 45, 85, 0.15), inset 0 0 15px rgba(255, 45, 85, 0.05)'
                        }}>
                            <span className="material-symbols-outlined" style={{ color: '#ff2d55', fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>theater_comedy</span>
                            <h4 style={{ margin: '0 0 0.25rem 0', color: 'white', fontSize: '1rem', letterSpacing: '0.05em' }}>NARRATIVE</h4>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', margin: 0 }}>Human Empathy</p>
                        </div>

                        {/* Animated Connection Dash 1 */}
                        <div className="animated-flow-line-h" style={{ flex: '0 1 60px', height: '2px', background: 'var(--slate-700)', position: 'relative', overflow: 'hidden' }}>
                            <div className="line-particle" style={{ background: '#ff2d55' }} />
                        </div>

                        {/* Node 2: Data Model (Cyan Glow) */}
                        <div className="glass-card-stitch" style={{
                            flex: 1, padding: '1.5rem', textAlign: 'center', zIndex: 2, minWidth: '200px',
                            border: '1px solid rgba(13, 226, 236, 0.4)',
                            boxShadow: '0 0 20px rgba(13, 226, 236, 0.15), inset 0 0 15px rgba(13, 226, 236, 0.05)'
                        }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--accent-cyan)', fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>schema</span>
                            <h4 style={{ margin: '0 0 0.25rem 0', color: 'white', fontSize: '1rem', letterSpacing: '0.05em' }}>DATA MODEL</h4>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', margin: 0 }}>Entities & Relations</p>
                        </div>

                        {/* Animated Connection Dash 2 */}
                        <div className="animated-flow-line-h" style={{ flex: '0 1 60px', height: '2px', background: 'var(--slate-700)', position: 'relative', overflow: 'hidden' }}>
                            <div className="line-particle" style={{ background: 'var(--accent-cyan)' }} />
                        </div>

                        {/* Node 3: System Analysis (Deep Blue Glow) */}
                        <div className="glass-card-stitch" style={{
                            flex: 1, padding: '1.5rem', textAlign: 'center', zIndex: 2, minWidth: '200px',
                            border: '1px solid rgba(17, 50, 212, 0.6)',
                            boxShadow: '0 0 20px rgba(17, 50, 212, 0.25), inset 0 0 15px rgba(17, 50, 212, 0.1)'
                        }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>database</span>
                            <h4 style={{ margin: '0 0 0.25rem 0', color: 'white', fontSize: '1rem', letterSpacing: '0.05em' }}>ANALYSIS</h4>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', margin: 0 }}>Architecture Setup</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
