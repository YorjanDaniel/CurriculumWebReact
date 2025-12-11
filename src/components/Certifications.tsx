import { FaTrophy } from 'react-icons/fa';

export const Certifications: React.FC = () => {
    const certs = [
        { name: "SCRUM aplicado a proyectos de desarrollo de software", date: "2025" },
        { name: "Inteligencia Artificial para integración y análisis de datos", date: "2025" },
        { name: "Despliegue de aplicaciones con Docker", date: "2025" },
        { name: "Ciberseguridad y desarrollo seguro", date: "2025" },
        { name: "Analítica de datos aplicada a procesos", date: "2025" },
        { name: "Desarrollo de páginas web en PHP", date: "2025" }
    ];

    return (
        <section className="container animate-slide-up delay-400">
            <h3 className="section-title">Cursos y Logros</h3>
            <div className="card">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '1rem', color: 'var(--accent-yellow, #eab308)' }}>
                            <FaTrophy />
                        </span>
                        <div>
                            <strong>Segundo lugar en Hackatón</strong>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Destacando habilidades de solución de problemas y trabajo en equipo.</p>
                        </div>
                    </li>
                </ul>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                    {certs.map((cert, idx) => (
                        <div key={idx} style={{
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '8px',
                            borderLeft: '2px solid var(--accent-red)'
                        }}>
                            <div style={{ fontWeight: 600 }}>{cert.name}</div>
                            {/* <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.date}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
