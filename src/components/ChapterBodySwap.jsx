import { useScrollReveal } from '../hooks/useScrollAnimation';
import { storyData } from '../data/storyData';

export default function ChapterBodySwap() {
    const { ref: heroRef, isRevealed: heroRevealed } = useScrollReveal();
    const { ref: swapRef, isRevealed: swapRevealed } = useScrollReveal();
    const { ref: msgRef, isRevealed: msgRevealed } = useScrollReveal();
    const { ref: erRef, isRevealed: erRevealed } = useScrollReveal();

    return (
        <>
            {/* --- Screen 1: The Body Swap Hero + Section 1 --- */}
            <section id="chapter-2" className="chapter-section" style={{ display: 'grid', gridTemplateRows: '1fr auto', paddingBottom: 0 }}>
                <div className="chapter-number">02</div>

                {/* Split hero: Taki | Mitsuha */}
                <div ref={heroRef} className={`scroll-reveal-scale ${heroRevealed ? 'revealed' : ''}`}>
                    <div className="split-hero">
                        <div className="split-hero-side">
                            <div className="split-hero-overlay-left" />
                            <img src="images/mitsuha-anime.png" alt="Mitsuha Miyamizu - Itomori" style={{ objectPosition: 'center 20%' }} />
                            <div className="split-hero-label" style={{ left: '2rem' }}>
                                <span style={{ background: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', display: 'inline-block', marginBottom: '0.5rem' }}>
                                    Location: Itomori
                                </span>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Mitsuha Miyamizu</h2>
                            </div>
                        </div>
                        <div className="split-hero-side">
                            <div className="split-hero-overlay-right" />
                            <img src="images/taki-anime.jpg" alt="Taki Tachibana - Tokyo" style={{ objectPosition: 'center 30%' }} />
                            <div className="split-hero-label" style={{ right: '2rem', textAlign: 'right' }}>
                                <span style={{ background: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', display: 'inline-block', marginBottom: '0.5rem' }}>
                                    Location: Tokyo
                                </span>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Taki Tachibana</h2>
                            </div>
                        </div>
                        <div className="split-hero-divider">
                            <div className="swap-icon">
                                <span className="material-symbols-outlined">sync_alt</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ paddingTop: '1.5rem' }}>
                    {/* Section 1: Body Swap */}
                    <div ref={swapRef} className={`scroll-reveal ${swapRevealed ? 'revealed' : ''}`} style={{ marginBottom: '2rem' }}>
                        <div className="section-header">
                            <span className="material-symbols-outlined">conversion_path</span>
                            <h2 className="section-title">
                                Section 1: The Body Swap <span className="section-tag">(M:N Relationship)</span>
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                            {/* Relationship attributes */}
                            <div className="glass-panel" style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--text-300)', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>analytics</span>
                                    Relationship Attributes
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <AttrCard label="Swap_Date" icon="calendar_today" value="Intermittent" detail="Frequency: 2-3 times per week" />
                                    <AttrCard label="Duration" icon="timer" value="Until Sleep" detail="Trigger: REM Cycle Synch" />
                                </div>

                                {/* Visual: Character link */}
                                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                                    <CharAvatar label="CHARACTER_ID: 02" image="images/mitsuha-anime.png" />
                                    <div style={{ position: 'relative', width: '8rem', height: '1px', background: 'var(--primary)' }}>
                                        <div style={{
                                            position: 'absolute', top: '-0.875rem', left: '50%', transform: 'translateX(-50%)',
                                            background: 'var(--bg-dark)', padding: '0.25rem 0.75rem',
                                            border: '1px solid var(--primary)', borderRadius: '0.25rem',
                                            fontSize: '0.625rem', color: 'var(--primary)', fontWeight: 700, whiteSpace: 'nowrap',
                                        }}>SWAP_LOG</div>
                                    </div>
                                    <CharAvatar label="CHARACTER_ID: 01" image="images/taki-anime.jpg" />
                                </div>
                            </div>

                            {/* Logic constraints */}
                            <div className="entity-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>Logic Constraints</h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[
                                        'Must be simultaneous across character entities.',
                                        'Memory loss occurs upon disconnection.',
                                        'Attributes "Swap_Date" and "Duration" stored in associative entity.',
                                    ].map((text, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-400)' }}>
                                            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1rem' }}>check_circle</span>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Screen 2: Communication Logs --- */}
            <section id="chapter-2-part-2" className="chapter-section">
                <div className="container" style={{ width: '100%' }}>
                    <div ref={msgRef} className={`scroll-reveal ${msgRevealed ? 'revealed' : ''}`} style={{ marginBottom: '4rem' }}>
                        <div className="section-header">
                            <span className="material-symbols-outlined">chat</span>
                            <h2 className="section-title">
                                Section 2: Communication Logs <span className="section-tag">(Message Entity)</span>
                            </h2>
                        </div>

                        <div className={`stagger-children ${msgRevealed ? 'revealed' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {storyData.messages.map((msg) => (
                                <div key={msg.id} className="message-card">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <span style={{ background: 'rgba(17, 50, 212, 0.2)', color: 'var(--primary)', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.625rem', fontWeight: 700 }}>
                                            ID: {msg.id}
                                        </span>
                                        <span style={{ color: 'var(--text-500)', fontSize: '0.625rem', fontWeight: 700 }}>{msg.date}</span>
                                    </div>
                                    <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.7 }}>"{msg.content}"</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-400)', borderTop: '1px solid rgba(17, 50, 212, 0.1)', paddingTop: '1rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>{msg.mediumIcon}</span>
                                            {msg.medium}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>schedule</span>
                                            {msg.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mini ER snippet */}
                    <div ref={erRef} className={`scroll-reveal-scale ${erRevealed ? 'revealed' : ''}`}>
                        <div style={{
                            background: 'rgba(17, 50, 212, 0.03)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(17, 50, 212, 0.2)',
                            padding: '3rem', position: 'relative', overflow: 'hidden',
                        }}>
                            {/* Glow effects */}
                            <div style={{ position: 'absolute', right: '-5rem', top: '-5rem', width: '20rem', height: '20rem', background: 'rgba(17, 50, 212, 0.08)', filter: 'blur(100px)', borderRadius: '50%' }} />

                            <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Schema Snippet: Relational Logic</h3>
                                <p style={{ color: 'var(--text-400)', fontSize: '0.875rem' }}>Visualizing the flow of data between characters and events</p>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '3rem', position: 'relative', zIndex: 1 }}>
                                <MiniEntity name="CHARACTER" attrs={['Char_ID (PK)', 'Name', 'Location']} />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <MiniRelationship name="BODY_SWAP" />
                                    <MiniRelationship name="SENDS" />
                                </div>
                                <MiniEntity name="MESSAGE" attrs={['Msg_ID (PK)', 'Content', 'Time', 'Medium']} />
                            </div>

                            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-500)', fontFamily: 'monospace', position: 'relative', zIndex: 1 }}>
                                -- Note: Relationship "CHARACTER &lt;-&gt; BODY_SWAP &lt;-&gt; CHARACTER" denotes a recursive M:N link --
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function AttrCard({ label, icon, value, detail }) {
    return (
        <div style={{ background: 'rgba(17, 50, 212, 0.08)', border: '1px solid rgba(17, 50, 212, 0.15)', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                <span className="material-symbols-outlined" style={{ color: 'rgba(17, 50, 212, 0.5)' }}>{icon}</span>
            </div>
            <p style={{ fontSize: '1.5rem', fontWeight: 300 }}>{value}</p>
            <p style={{ color: 'var(--text-400)', fontSize: '0.75rem', marginTop: '0.5rem' }}>{detail}</p>
        </div>
    );
}

function CharAvatar({ label, image }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                width: '3.5rem', height: '3.5rem', borderRadius: '50%',
                border: '2px solid var(--primary)',
                overflow: 'hidden',
                marginBottom: '0.375rem',
                animation: 'pulse-glow 3s ease-in-out infinite',
            }}>
                <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--text-400)' }}>{label}</span>
        </div>
    );
}

function MiniEntity({ name, attrs }) {
    return (
        <div className="animate-breathe" style={{
            background: 'rgba(0, 242, 255, 0.08)',
            border: '2px solid var(--accent-cyan)',
            padding: '1.25rem 1.5rem', borderRadius: '0.5rem',
            boxShadow: 'var(--glow-cyan)', minWidth: '140px', textAlign: 'center',
        }}>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 900, fontSize: '1rem', marginBottom: '0.5rem' }}>{name}</p>
            <div style={{ width: '100%', height: '1px', background: 'rgba(0, 242, 255, 0.3)', marginBottom: '0.5rem' }} />
            <p style={{ fontSize: '0.625rem', color: 'var(--text-300)', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.8 }}>
                {attrs.join(' • ')}
            </p>
        </div>
    );
}

function MiniRelationship({ name }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--primary)' }} />
            <div style={{
                width: '5rem', height: '5rem',
                border: '2px solid var(--accent-red)',
                background: 'rgba(255, 45, 85, 0.08)',
                transform: 'rotate(45deg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--glow-red)',
            }}>
                <span style={{ transform: 'rotate(-45deg)', fontSize: '0.6rem', fontWeight: 700, color: 'var(--accent-red)', textTransform: 'uppercase' }}>
                    {name}
                </span>
            </div>
            <div style={{ width: '2rem', height: '1px', background: 'var(--primary)' }} />
        </div>
    );
}
