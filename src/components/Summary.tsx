import React from 'react';

export const Summary: React.FC = () => {
    return (
        <section className="container animate-slide-up delay-100">
            <div className="card">
                <h3 className="section-title">Perfil Profesional</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    Soy analista y desarrollador de software con una visión arquitectónica. Tengo <strong>3 años de experiencia</strong> liderando
                    proyectos tanto web como móviles, aplicando metodologías ágiles, mejorando la seguridad de los sistemas y
                    optimizando la eficiencia de los equipos. Me especializo en convertir las necesidades del negocio en soluciones
                    escalables y robustas.
                </p>
            </div>
        </section>
    );
};
