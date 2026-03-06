import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import { storyData } from '../data/storyData';
import EntityModal from './EntityModal';

export default function IntroSection() {
    const { ref, isRevealed } = useScrollReveal();

    return (
        <>
            <section id="chapter-1" className="chapter-section dot-grid" style={{ padding: '6rem 0' }}>
                <div className="chapter-number">01</div>
                <div className="container" style={{ width: '100%' }}>
                    {/* Architecture of Connection */}
                    <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700 }}>
                                    The Architecture of Connection
                                </h2>
                                <p style={{ color: 'var(--text-400)', lineHeight: 1.8, fontSize: '1.125rem' }}>
                                    {storyData.chapters[0].content}
                                </p>

                                {/* ER Note card */}
                                <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', marginTop: '0.125rem' }}>schema</span>
                                    <div>
                                        <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-200)', marginBottom: '0.25rem' }}>
                                            Database Perspective
                                        </h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-500)' }}>{storyData.chapters[0].erNote}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--slate-800)' }}>
                                    <img src="images/tokyo.png" alt="Tokyo at night" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark), transparent)' }} />
                                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                                        <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Node A</p>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Tokyo Urban</h3>
                                    </div>
                                </div>

                                <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--slate-800)', marginTop: '3rem' }}>
                                    <img src="images/itomori-anime.jpg" alt="Itomori countryside" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark), transparent)' }} />
                                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                                        <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Node B</p>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Itomori Rural</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Entities preview */}
            <CoreEntitiesPreview />
        </>
    );
}

function CoreEntitiesPreview() {
    const { ref, isRevealed } = useScrollReveal();
    const [selectedEntity, setSelectedEntity] = useState(null);

    const coreEntities = [
        { icon: 'person', title: 'Subject Entities', desc: "Defining the attributes of Taki and Mitsuha: name, location_id, timestamp_offset, and soul_integrity." },
        { icon: 'link', title: 'Musubi Relationship', desc: "The many-to-many join table connecting souls across timelines through the 'Red String' foreign key. (The Red String of Fate is an East Asian belief that an invisible red thread connects those who are destined to meet, regardless of time, place, or circumstances.)" },
        { icon: 'history', title: 'Temporal Logs', desc: "Audit trails of swapped experiences, stored as ephemeral cache data that degrades over time." },
    ];

    return (
        <section className="chapter-section" id="core-entities">
            <div className="container" style={{ width: '100%' }}>
                <div ref={ref} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Core Entities</h2>
                    <p style={{ color: 'var(--text-500)' }}>The primary components of our existential database.</p>
                </div>

                <div className={`stagger-children ${isRevealed ? 'revealed' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {coreEntities.map((entity, i) => (
                        <div key={i} className="entity-card interactive-card" onClick={() => setSelectedEntity(entity)}>
                            <div className="animate-breathe entity-icon-container">
                                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>{entity.icon}</span>
                            </div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', transition: 'color 0.3s ease' }} className="entity-title">
                                {entity.title}
                            </h3>
                            <p style={{ color: 'var(--text-400)', fontSize: '0.875rem', lineHeight: 1.6 }}>{entity.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Modal Overlay Render */}
                <EntityModal
                    isOpen={!!selectedEntity}
                    onClose={() => setSelectedEntity(null)}
                    entity={selectedEntity}
                />
            </div>
        </section>
    );
}
