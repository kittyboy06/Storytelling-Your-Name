export default function Footer() {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>all_inclusive</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)' }}>Project Musubi</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#er-dashboard" style={{ color: 'var(--text-500)', fontSize: '0.875rem', transition: 'color 0.2s' }} className="nav-link">Entity List</a>
                    <a href="#er-diagram" style={{ color: 'var(--text-500)', fontSize: '0.875rem', transition: 'color 0.2s' }} className="nav-link">ER Diagram</a>
                </div>
                <p style={{ color: 'var(--text-600)', fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    © 2024 Storyboard ER Systems — DBMS Project
                </p>
            </div>
        </footer>
    );
}
