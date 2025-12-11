import React from 'react';

const EducationItem = ({ title, institution, period, details }: { title: string, institution: string, period: string, details?: string }) => (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{title}</h4>
            {period && <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{period}</span>}
        </div>
        <h5 style={{ margin: '0 0 0.5rem', color: 'var(--accent-purple)' }}>{institution}</h5>
        {details && <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{details}</p>}
    </div>
);

export const Education: React.FC = () => {
    return (
        <section className="container animate-slide-up delay-300">
            <h3 className="section-title">Educación</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                <EducationItem
                    title="Análisis y Desarrollo de Software"
                    institution="SENA – Servicio Nacional de Aprendizaje"
                    period="2023 - 2025"
                />
                <EducationItem
                    title="Bootcamp Talento Tech – Inteligencia Artificial"
                    institution="Ministerio de TIC"
                    period="2025"
                />
                <EducationItem
                    title="Técnico en Sistemas"
                    institution="SENA – Servicio Nacional de Aprendizaje"
                    period="2021 - 2022"
                />
                <EducationItem
                    title="Bachiller Académico"
                    institution="Institución Educativa Nuestra Señora de Belén"
                    period="2022"
                />
            </div>
        </section>
    );
};
