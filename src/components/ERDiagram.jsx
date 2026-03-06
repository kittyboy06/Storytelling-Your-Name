import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function ERDiagram() {
    const { ref, isRevealed } = useScrollReveal({ threshold: 0.05 });

    return (
        <section id="er-diagram" className="chapter-section">
            <div className="container">
                <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.5rem', background: 'rgba(17, 50, 212, 0.15)', borderRadius: '0.5rem' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>hub</span>
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>System Architecture: Your Name</h2>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-400)' }}>Chen's Notation ERD • Mitsuha & Taki Connection</p>
                            </div>
                        </div>
                    </div>

                    {/* Diagram + Legend */}
                    <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-dark-alt)', borderRadius: '1rem', border: '1px solid var(--slate-800)', overflow: 'hidden', height: 'calc(100vh - 16rem)', minHeight: '500px' }}>

                        {/* ========== MAIN DIAGRAM CANVAS ========== */}
                        <div className="dot-grid" style={{ flex: 1, position: 'relative', padding: '2rem', overflow: 'auto' }}>
                            {/* Floating Zoom Controls */}
                            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 10 }}>
                                <button className="float-control-btn" title="Zoom In">
                                    <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>add</span>
                                </button>
                                <button className="float-control-btn" title="Zoom Out">
                                    <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>remove</span>
                                </button>
                                <button className="float-control-btn" title="Reset View">
                                    <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>near_me</span>
                                </button>
                            </div>
                            {/* Background glows */}
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'rgba(17, 50, 212, 0.06)', borderRadius: '50%', filter: 'blur(120px)', zIndex: 0 }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px', background: 'rgba(255, 45, 85, 0.04)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />

                            {/* SVG canvas for all connections + nodes */}
                            <svg viewBox="0 0 900 650" style={{ width: '100%', height: '100%', minWidth: '700px', minHeight: '550px', position: 'relative', zIndex: 1 }}>
                                <defs>
                                    {/* Glow filters */}
                                    <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="4" result="blur" />
                                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                    <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                    {/* Animated dash for lines */}
                                    <style>{`
                    .conn-line {
                      stroke: rgba(255,255,255,0.25);
                      stroke-width: 2;
                      fill: none;
                      stroke-dasharray: 6 4;
                      animation: dash-flow 2s linear infinite;
                    }
                    .conn-line-highlight {
                      stroke: rgba(0, 242, 255, 0.4);
                      stroke-width: 2;
                      fill: none;
                      stroke-dasharray: 8 4;
                      animation: dash-flow 1.5s linear infinite;
                    }
                    @keyframes dash-flow {
                      to { stroke-dashoffset: -20; }
                    }
                  `}</style>
                                </defs>

                                {/* ===== CONNECTION LINES ===== */}

                                {/* CHARACTER (150,120) → LIVES_IN (330,120) → LOCATION (510,120) */}
                                <line x1="220" y1="120" x2="295" y2="120" className="conn-line" />
                                <line x1="365" y1="120" x2="440" y2="120" className="conn-line" />
                                {/* Cardinality labels */}
                                <text x="260" y="110" fill="var(--text-500)" fontSize="11" fontFamily="monospace" textAnchor="middle">N</text>
                                <text x="400" y="110" fill="var(--text-500)" fontSize="11" fontFamily="monospace" textAnchor="middle">1</text>

                                {/* LOCATION (510,120) → OCCURS_AT (510,310) → EVENT (510,480) */}
                                <line x1="510" y1="155" x2="510" y2="275" className="conn-line" />
                                <line x1="510" y1="345" x2="510" y2="440" className="conn-line" />
                                <text x="525" y="235" fill="var(--text-500)" fontSize="11" fontFamily="monospace">1</text>
                                <text x="525" y="410" fill="var(--text-500)" fontSize="11" fontFamily="monospace">N</text>

                                {/* COMET (760,120) → CAUSES (760,310) → EVENT (510,480) via L-shape */}
                                <line x1="760" y1="155" x2="760" y2="275" className="conn-line-highlight" />
                                <line x1="760" y1="345" x2="760" y2="480" className="conn-line-highlight" />
                                <line x1="760" y1="480" x2="580" y2="480" className="conn-line-highlight" />
                                <text x="775" y="235" fill="var(--text-500)" fontSize="11" fontFamily="monospace">1</text>
                                <text x="665" y="470" fill="var(--text-500)" fontSize="11" fontFamily="monospace">N</text>

                                {/* CHARACTER (150,120) → BODY_SWAP (150,310) - recursive back to CHARACTER */}
                                <line x1="150" y1="155" x2="150" y2="275" className="conn-line-highlight" />
                                {/* Recursive loop back: line goes left and curves back up */}
                                <path d="M 115,310 L 50,310 L 50,120 L 80,120" className="conn-line-highlight" />
                                <text x="60" y="210" fill="var(--text-500)" fontSize="11" fontFamily="monospace">M</text>
                                <text x="165" y="235" fill="var(--text-500)" fontSize="11" fontFamily="monospace">N</text>

                                {/* CHARACTER (150,120) → SENDS (330,425) → MESSAGE (150,480) */}
                                <line x1="150" y1="155" x2="150" y2="380" className="conn-line" style={{ strokeDasharray: '2 6', stroke: 'rgba(255,255,255,0.12)' }} />
                                <line x1="150" y1="155" x2="295" y2="390" className="conn-line" />
                                <line x1="365" y1="460" x2="365" y2="530" className="conn-line" />
                                <line x1="365" y1="530" x2="220" y2="530" className="conn-line" />
                                <text x="240" y="380" fill="var(--text-500)" fontSize="11" fontFamily="monospace">1</text>
                                <text x="375" y="505" fill="var(--text-500)" fontSize="11" fontFamily="monospace">N</text>

                                {/* ===== ENTITY BOXES (Rectangles) ===== */}

                                {/* CHARACTER — position (80, 85) */}
                                <g filter="url(#glow-cyan)">
                                    <rect x="80" y="85" width="140" height="55" rx="6" fill="rgba(0, 242, 255, 0.08)" stroke="#00f2ff" strokeWidth="2" />
                                    <text x="150" y="118" textAnchor="middle" fill="#00f2ff" fontSize="14" fontWeight="800" letterSpacing="2">CHARACTER</text>
                                </g>
                                {/* CHARACTER attributes */}
                                <g>
                                    <ellipse cx="80" cy="50" rx="42" ry="14" fill="rgba(0,242,255,0.05)" stroke="#00f2ff" strokeWidth="1" />
                                    <text x="80" y="54" textAnchor="middle" fill="#00f2ff" fontSize="9" textDecoration="underline">Character_ID</text>
                                    <line x1="80" y1="64" x2="105" y2="85" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(0,242,255,0.3)' }} />
                                </g>
                                <g>
                                    <ellipse cx="165" cy="50" rx="28" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="165" y="54" textAnchor="middle" fill="var(--text-300)" fontSize="9">Name</text>
                                    <line x1="165" y1="64" x2="160" y2="85" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="240" cy="65" rx="22" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="240" y="69" textAnchor="middle" fill="var(--text-300)" fontSize="9">Age</text>
                                    <line x1="240" y1="79" x2="220" y2="100" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="80" cy="170" rx="30" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="80" y="174" textAnchor="middle" fill="var(--text-300)" fontSize="9">Gender</text>
                                    <line x1="100" y1="162" x2="120" y2="140" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="220" cy="170" rx="38" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="220" y="174" textAnchor="middle" fill="var(--text-300)" fontSize="9">Occupation</text>
                                    <line x1="195" y1="162" x2="180" y2="140" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>

                                {/* LOCATION — position (440, 85) */}
                                <g filter="url(#glow-cyan)">
                                    <rect x="440" y="85" width="140" height="55" rx="6" fill="rgba(0, 242, 255, 0.08)" stroke="#00f2ff" strokeWidth="2" />
                                    <text x="510" y="118" textAnchor="middle" fill="#00f2ff" fontSize="14" fontWeight="800" letterSpacing="2">LOCATION</text>
                                </g>
                                {/* LOCATION attributes */}
                                <g>
                                    <ellipse cx="440" cy="50" rx="38" ry="14" fill="rgba(0,242,255,0.05)" stroke="#00f2ff" strokeWidth="1" />
                                    <text x="440" y="54" textAnchor="middle" fill="#00f2ff" fontSize="9" textDecoration="underline">Location_ID</text>
                                    <line x1="440" y1="64" x2="465" y2="85" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(0,242,255,0.3)' }} />
                                </g>
                                <g>
                                    <ellipse cx="535" cy="50" rx="22" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="535" y="54" textAnchor="middle" fill="var(--text-300)" fontSize="9">Type</text>
                                    <line x1="535" y1="64" x2="530" y2="85" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="600" cy="80" rx="22" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="600" y="84" textAnchor="middle" fill="var(--text-300)" fontSize="9">Name</text>
                                    <line x1="585" y1="90" x2="575" y2="100" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="510" cy="170" rx="35" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="510" y="174" textAnchor="middle" fill="var(--text-300)" fontSize="9">Description</text>
                                    <line x1="510" y1="156" x2="510" y2="140" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>

                                {/* COMET — position (690, 85) */}
                                <g filter="url(#glow-cyan)">
                                    <rect x="690" y="85" width="140" height="55" rx="6" fill="rgba(0, 242, 255, 0.08)" stroke="#00f2ff" strokeWidth="2">
                                        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                                    </rect>
                                    <text x="760" y="118" textAnchor="middle" fill="#00f2ff" fontSize="14" fontWeight="800" letterSpacing="2">COMET</text>
                                </g>
                                {/* COMET attributes */}
                                <g>
                                    <ellipse cx="720" cy="50" rx="34" ry="14" fill="rgba(0,242,255,0.05)" stroke="#00f2ff" strokeWidth="1" />
                                    <text x="720" y="54" textAnchor="middle" fill="#00f2ff" fontSize="9" textDecoration="underline">Comet_ID</text>
                                    <line x1="720" y1="64" x2="735" y2="85" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(0,242,255,0.3)' }} />
                                </g>
                                <g>
                                    <ellipse cx="810" cy="50" rx="26" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="810" y="54" textAnchor="middle" fill="var(--text-300)" fontSize="9">Name</text>
                                    <line x1="810" y1="64" x2="800" y2="85" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="760" cy="170" rx="46" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="760" y="174" textAnchor="middle" fill="var(--text-300)" fontSize="9">Appearance_Date</text>
                                    <line x1="760" y1="156" x2="760" y2="140" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>

                                {/* MESSAGE — position (80, 505) */}
                                <g filter="url(#glow-cyan)">
                                    <rect x="80" y="505" width="140" height="55" rx="6" fill="rgba(0, 242, 255, 0.08)" stroke="#00f2ff" strokeWidth="2" />
                                    <text x="150" y="538" textAnchor="middle" fill="#00f2ff" fontSize="14" fontWeight="800" letterSpacing="2">MESSAGE</text>
                                </g>
                                {/* MESSAGE attributes */}
                                <g>
                                    <ellipse cx="60" cy="590" rx="36" ry="14" fill="rgba(0,242,255,0.05)" stroke="#00f2ff" strokeWidth="1" />
                                    <text x="60" y="594" textAnchor="middle" fill="#00f2ff" fontSize="9" textDecoration="underline">Message_ID</text>
                                    <line x1="80" y1="578" x2="110" y2="560" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(0,242,255,0.3)' }} />
                                </g>
                                <g>
                                    <ellipse cx="150" cy="595" rx="28" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="150" y="599" textAnchor="middle" fill="var(--text-300)" fontSize="9">Content</text>
                                    <line x1="150" y1="581" x2="150" y2="560" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="230" cy="590" rx="22" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="230" y="594" textAnchor="middle" fill="var(--text-300)" fontSize="9">Time</text>
                                    <line x1="215" y1="578" x2="195" y2="560" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="290" cy="560" rx="28" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="290" y="564" textAnchor="middle" fill="var(--text-300)" fontSize="9">Medium</text>
                                    <line x1="270" y1="555" x2="220" y2="545" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>

                                {/* EVENT — position (440, 455) */}
                                <g filter="url(#glow-cyan)">
                                    <rect x="440" y="455" width="140" height="55" rx="6" fill="rgba(0, 242, 255, 0.08)" stroke="#00f2ff" strokeWidth="2" />
                                    <text x="510" y="488" textAnchor="middle" fill="#00f2ff" fontSize="14" fontWeight="800" letterSpacing="2">EVENT</text>
                                </g>
                                {/* EVENT attributes */}
                                <g>
                                    <ellipse cx="440" cy="540" rx="30" ry="14" fill="rgba(0,242,255,0.05)" stroke="#00f2ff" strokeWidth="1" />
                                    <text x="440" y="544" textAnchor="middle" fill="#00f2ff" fontSize="9" textDecoration="underline">Event_ID</text>
                                    <line x1="455" y1="528" x2="470" y2="510" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(0,242,255,0.3)' }} />
                                </g>
                                <g>
                                    <ellipse cx="530" cy="545" rx="38" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="530" y="549" textAnchor="middle" fill="var(--text-300)" fontSize="9">Event_Name</text>
                                    <line x1="520" y1="532" x2="515" y2="510" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>
                                <g>
                                    <ellipse cx="620" cy="530" rx="22" ry="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <text x="620" y="534" textAnchor="middle" fill="var(--text-300)" fontSize="9">Date</text>
                                    <line x1="605" y1="520" x2="575" y2="500" className="conn-line" style={{ strokeDasharray: 'none', stroke: 'rgba(255,255,255,0.15)' }} />
                                </g>

                                {/* ===== RELATIONSHIP DIAMONDS ===== */}

                                {/* LIVES_IN — between CHARACTER and LOCATION */}
                                <g filter="url(#glow-red)">
                                    <rect x="295" y="85" width="70" height="70" rx="4" fill="rgba(255, 45, 85, 0.08)" stroke="#ff2d55" strokeWidth="2" transform="rotate(45, 330, 120)" />
                                    <text x="330" y="124" textAnchor="middle" fill="#ff2d55" fontSize="10" fontWeight="700">LIVES IN</text>
                                </g>

                                {/* BODY_SWAP — below CHARACTER (recursive) */}
                                <g filter="url(#glow-red)">
                                    <rect x="115" y="275" width="70" height="70" rx="4" fill="rgba(255, 45, 85, 0.08)" stroke="#ff2d55" strokeWidth="2" transform="rotate(45, 150, 310)">
                                        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
                                    </rect>
                                    <text x="150" y="307" textAnchor="middle" fill="#ff2d55" fontSize="9" fontWeight="700">BODY</text>
                                    <text x="150" y="319" textAnchor="middle" fill="#ff2d55" fontSize="9" fontWeight="700">SWAP</text>
                                </g>

                                {/* SENDS — between CHARACTER and MESSAGE */}
                                <g filter="url(#glow-red)">
                                    <rect x="295" y="390" width="70" height="70" rx="4" fill="rgba(255, 45, 85, 0.08)" stroke="#ff2d55" strokeWidth="2" transform="rotate(45, 330, 425)" />
                                    <text x="330" y="429" textAnchor="middle" fill="#ff2d55" fontSize="10" fontWeight="700">SENDS</text>
                                </g>

                                {/* OCCURS_AT — between LOCATION and EVENT */}
                                <g filter="url(#glow-red)">
                                    <rect x="475" y="275" width="70" height="70" rx="4" fill="rgba(255, 45, 85, 0.08)" stroke="#ff2d55" strokeWidth="2" transform="rotate(45, 510, 310)" />
                                    <text x="510" y="307" textAnchor="middle" fill="#ff2d55" fontSize="9" fontWeight="700">OCCURS</text>
                                    <text x="510" y="319" textAnchor="middle" fill="#ff2d55" fontSize="9" fontWeight="700">AT</text>
                                </g>

                                {/* CAUSES — between COMET and EVENT */}
                                <g filter="url(#glow-red)">
                                    <rect x="725" y="275" width="70" height="70" rx="4" fill="rgba(255, 45, 85, 0.08)" stroke="#ff2d55" strokeWidth="2" transform="rotate(45, 760, 310)">
                                        <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                                    </rect>
                                    <text x="760" y="314" textAnchor="middle" fill="#ff2d55" fontSize="10" fontWeight="700">CAUSES</text>
                                </g>
                            </svg>
                        </div>

                        {/* ========== LEGEND SIDEBAR ========== */}
                        <div className="custom-scrollbar" style={{
                            width: '260px', borderLeft: '1px solid rgba(17, 50, 212, 0.15)',
                            background: 'rgba(16, 19, 34, 0.95)', padding: '1rem',
                            display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0,
                            overflowY: 'auto'
                        }}>
                            {/* Legend Card */}
                            <div className="glass-card-stitch" style={{ padding: '1rem' }}>
                                <h3 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-cyan)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>key</span>
                                    Legend
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                    <LegendItem>
                                        <div style={{ width: '1.5rem', height: '1rem', border: '2px solid var(--accent-cyan)', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '3px', boxShadow: '0 0 8px rgba(0,242,255,0.2)' }} />
                                        <span>Entity (Rectangle)</span>
                                    </LegendItem>
                                    <LegendItem>
                                        <div style={{ width: '1rem', height: '1rem', border: '2px solid var(--accent-red)', background: 'rgba(255, 45, 85, 0.1)', transform: 'rotate(45deg)', boxShadow: '0 0 8px rgba(255,45,85,0.2)', margin: '0 0.25rem' }} />
                                        <span>Relationship (Diamond)</span>
                                    </LegendItem>
                                    <LegendItem>
                                        <div style={{ width: '1.5rem', height: '0.875rem', border: '1px solid var(--text-400)', borderRadius: '9999px', background: 'rgba(255,255,255,0.02)' }} />
                                        <span>Attribute (Oval)</span>
                                    </LegendItem>
                                    <LegendItem>
                                        <div style={{ fontSize: '0.5rem', fontWeight: 800, textDecoration: 'underline', color: 'var(--accent-cyan)', width: '1.5rem', textAlign: 'center' }}>PK</div>
                                        <span>Primary Key (Underlined)</span>
                                    </LegendItem>
                                    <LegendItem>
                                        <div style={{ width: '1.5rem', height: 0, borderTop: '2px dashed rgba(255,255,255,0.5)' }} />
                                        <span>Connection Line</span>
                                    </LegendItem>
                                </div>
                            </div>

                            {/* Cardinality Card */}
                            <div className="glass-card-stitch" style={{ padding: '1rem', borderColor: 'rgba(255, 45, 85, 0.2)' }}>
                                <h3 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-red)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>schema</span>
                                    Cardinality Guide
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {[
                                        { code: '1:N', label: 'One-to-Many' },
                                        { code: 'M:N', label: 'Many-to-Many' },
                                        { code: 'N:1', label: 'Many-to-One' },
                                        { code: '1:1', label: 'One-to-One' },
                                    ].map(c => (
                                        <div key={c.code} className="card-grid-cell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{ fontFamily: 'monospace', color: 'var(--accent-red)', fontWeight: 700, fontSize: '0.8rem' }}>{c.code}</span>
                                            <span style={{ fontSize: '0.7rem', color: 'var(--text-300)' }}>{c.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Overview Card */}
                            <div className="glass-card-stitch" style={{ padding: '1rem', borderColor: 'rgba(17, 50, 212, 0.3)' }}>
                                <h3 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary-light)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>info</span>
                                    Project Overview
                                </h3>
                                <p style={{ fontSize: '0.7rem', lineHeight: 1.6, color: 'var(--text-300)', marginBottom: '0.75rem' }}>
                                    Chen&apos;s Notation ERD mapping the temporal body-swap connections in &quot;Your Name.&quot;
                                </p>
                                <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                                    <span className="tag-pill" style={{ background: 'rgba(255, 45, 85, 0.15)', color: 'var(--accent-red)' }}>Temporal Swap</span>
                                    <span className="tag-pill" style={{ background: 'rgba(0, 242, 255, 0.15)', color: 'var(--accent-cyan)' }}>Cosmic Event</span>
                                    <span className="tag-pill" style={{ background: 'rgba(30, 41, 59, 0.8)', color: 'var(--text-300)' }}>Chen&apos;s ERD</span>
                                </div>
                            </div>

                            <div className="glass-card-stitch" style={{ marginTop: 'auto', padding: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderColor: 'rgba(0, 242, 255, 0.1)' }}>
                                <div className="animate-pulse-glow-cyan" style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-cyan), var(--bg-dark-alt), var(--accent-red))', flexShrink: 0 }} />
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Database Design</p>
                                    <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Project Tiamat v1.4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LegendItem({ children }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-200)' }}>
            {children}
        </div>
    );
}
