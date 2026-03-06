import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import { storyData } from '../data/storyData';
import EntityModal from './EntityModal';

export default function ERDashboard() {
    const { ref, isRevealed } = useScrollReveal();
    const { ref: tableRef, isRevealed: tableRevealed } = useScrollReveal();
    const [selectedItem, setSelectedItem] = useState(null);

    const stats = [
        { icon: 'database', label: 'Entities', value: storyData.entities.length, color: 'var(--accent-cyan)' },
        { icon: 'hub', label: 'Relationships', value: storyData.relationships.length, color: 'var(--accent-red)' },
        { icon: 'person', label: 'Characters', value: storyData.characters.length, color: 'var(--primary)' },
        { icon: 'event', label: 'Events', value: storyData.events.length, color: 'var(--accent-orange)' },
        { icon: 'location_on', label: 'Locations', value: storyData.locations.length, color: 'var(--accent-purple)' },
    ];

    return (
        <>
            <section id="er-dashboard" className="chapter-section dot-grid">
                <div className="container">
                    <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-label" style={{ marginBottom: '1rem' }}>Database Overview</span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, marginTop: '1rem', marginBottom: '0.75rem' }}>
                            ER Diagram <span className="gradient-text">Dashboard</span>
                        </h2>
                        <p style={{ color: 'var(--text-400)', maxWidth: '36rem', margin: '0 auto' }}>
                            A complete overview of the entity-relationship model capturing every interaction and event from Your Name.
                        </p>
                    </div>

                    {/* Stats row */}
                    <div className={`stagger-children ${isRevealed ? 'revealed' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                        {stats.map((stat, i) => (
                            <div key={i}
                                className="glass-panel animate-breathe interactive-card"
                                style={{ padding: '1.5rem', textAlign: 'center' }}
                                onClick={() => {
                                    let itemsList = '';
                                    if (stat.label === 'Entities') itemsList = storyData.entities.map(e => e.name).join(', ');
                                    else if (stat.label === 'Relationships') itemsList = storyData.relationships.map(r => r.name).join(', ');
                                    else if (stat.label === 'Characters') itemsList = storyData.characters.map(c => c.name).join(', ');
                                    else if (stat.label === 'Events') itemsList = storyData.events.map(e => e.name).join(', ');
                                    else if (stat.label === 'Locations') itemsList = storyData.locations.map(l => l.name).join(', ');

                                    setSelectedItem({
                                        title: stat.label,
                                        icon: stat.icon,
                                        desc: (
                                            <>
                                                There are <strong>{stat.value}</strong> {stat.label.toLowerCase()} tracked in the database.<br /><br />
                                                <span style={{ color: 'var(--primary-light)' }}>Includes:</span> <span style={{ color: 'var(--text-300)' }}>{itemsList}</span>.
                                            </>
                                        )
                                    });
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ color: stat.color, fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>{stat.icon}</span>
                                <p style={{ fontSize: '2rem', fontWeight: 800, color: stat.color }}>{stat.value}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Entities gallery */}
                    <div ref={tableRef} className={`scroll-reveal ${tableRevealed ? 'revealed' : ''}`}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>table_chart</span>
                            Entity Schema Gallery
                        </h3>
                        <div className={`stagger-children ${tableRevealed ? 'revealed' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                            {storyData.entities.map((entity, i) => (
                                <div key={i}
                                    className="entity-card interactive-card"
                                    onClick={() => setSelectedItem({
                                        title: entity.name,
                                        icon: entity.icon,
                                        desc: `${entity.description} Attributes schema: ${entity.attributes.map(a => a.name).join(', ')}.`
                                    })}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                        <div style={{
                                            width: '2.5rem', height: '2.5rem',
                                            background: 'rgba(0, 242, 255, 0.1)', border: '1px solid rgba(0, 242, 255, 0.3)',
                                            borderRadius: '0.5rem',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <span className="material-symbols-outlined" style={{ color: 'var(--accent-cyan)', fontSize: '1.125rem' }}>{entity.icon}</span>
                                        </div>
                                        <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--accent-cyan)' }}>{entity.name}</h4>
                                    </div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-400)', marginBottom: '1rem', lineHeight: 1.5 }}>{entity.description}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                                        {entity.attributes.map((attr, j) => (
                                            <span key={j} className={`er-attribute ${attr.isPK ? 'pk' : ''}`}>{attr.name}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Relationships table */}
            <section className="chapter-section" id="relationship-summary">
                <div className="container" style={{ width: '100%' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--accent-red)' }}>conversion_path</span>
                            Relationship Summary
                        </h3>
                        <div className="glass-panel" style={{ overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(17, 50, 212, 0.2)' }}>
                                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-400)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Relationship</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-400)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>From → To</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-400)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cardinality</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-400)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {storyData.relationships.map((rel, i) => (
                                        <tr key={i}
                                            style={{ borderBottom: '1px solid rgba(30, 41, 59, 0.4)', cursor: 'pointer', transition: 'background 0.2s' }}
                                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 45, 85, 0.05)'}
                                            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                            onClick={() => setSelectedItem({
                                                title: `${rel.name} Relationship`,
                                                icon: 'conversion_path',
                                                desc: `Maps ${rel.from} → ${rel.to} with a ${rel.cardinality} cardinality. ${rel.description}`
                                            })}
                                        >
                                            <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--accent-red)' }}>{rel.name}</td>
                                            <td style={{ padding: '1rem', color: 'var(--text-300)' }}>{rel.from} → {rel.to}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    background: 'rgba(255, 45, 85, 0.1)', color: 'var(--accent-red)',
                                                    padding: '0.25rem 0.75rem', borderRadius: '9999px',
                                                    fontSize: '0.75rem', fontWeight: 700, fontFamily: 'monospace',
                                                }}>{rel.cardinality}</span>
                                            </td>
                                            <td style={{ padding: '1rem', color: 'var(--text-400)', fontSize: '0.8rem' }}>{rel.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <EntityModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                entity={selectedItem}
            />
        </>
    );
}
