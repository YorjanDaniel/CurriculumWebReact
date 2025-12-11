import React from 'react';

const ExperienceItem = ({ role, company, period, description, details }: { role: string, company: string, period: string, description: string, details?: string[] }) => (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-purple)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>{role}</h4>
            <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.9rem' }}>{period}</span>
        </div>
        <h5 style={{ margin: '0 0 1rem', color: 'var(--accent-blue)', fontWeight: 600 }}>{company}</h5>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>{description}</p>
        {details && (
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
                {details.map((detail, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                ))}
            </ul>
        )}
    </div>
);

export const Experience: React.FC = () => {
    return (
        <section className="container animate-slide-up delay-200">
            <h3 className="section-title">Experiencia Profesional</h3>

            <ExperienceItem
                role="Auxiliar TIC"
                company="Cueros Velez S.A.S"
                period="01/11/2025 - 12/01/2025"
                description="Apoyé la mejora continua del software de la empresa aplicando buenas prácticas de desarrollo, optimización de código y corrección de errores."
                details={[
                    "Implementé un chatbot inteligente integrado con n8n para automatizar procesos y mejorar la atención al cliente.",
                    "Brindé soporte de hardware, mantenimiento preventivo/correctivo y documentación técnica.",
                    "Apoyé la gestión de inventarios, realizando ajustes en el sistema, control de equipos y mejoras en la logística interna."
                ]}
            />

            <ExperienceItem
                role="Desarrollador Frontend – Proyecto AImed"
                company="ST&T – Software Solutions and Telecommunications (Remote)"
                period="10/04/2025 - 09/11/2025"
                description="Desarrollé soluciones de software enfocadas en plataformas seguras, estables y escalables, implementando interfaces modernas con Vue.js y React Native con funciones backend en Node.js."
                details={[
                    "Gestioné APIs REST, bases de datos NoSQL y colaboré en el análisis de requisitos.",
                    "Realicé mantenimiento y soporte de la plataforma web, garantizando disponibilidad.",
                    "Despliegues en entornos Linux, configuración de servicios SSH/SFTP y administración básica de servidor."
                ]}
            />

            <ExperienceItem
                role="Desarrollador Full Stack – coNECTO"
                company="ST&T – Software Solutions and Telecommunications (Remote)"
                period="10/04/2025 - 09/11/2025"
                description="Desarrollé la implementación y consumo de datos a partir de una API REST, construyendo interfaces dinámicas y responsivas utilizando React."
                details={[
                    "Participé en el diseño de la arquitectura del sistema y la integración de microservicios.",
                    "Optimización del flujo de datos entre los servicios del ecosistema digital.",
                    "Implementé control de versiones con Git/Bitbucket y despliegues controlados.",
                    "Optimización de infraestructura, monitoreo de servicios y soporte a aplicaciones en producción."
                ]}
            />

            <ExperienceItem
                role="Desarrollador Full Stack – CEDRUMQR"
                company="Servicio Nacional de Aprendizaje SENA"
                period="02/07/2025 - 09/04/2025"
                description="Implementación y consumo de datos desde APIs REST utilizando Angular y TypeScript, construyendo interfaces responsivas y modulares."
                details={[
                    "Trabajé con Laravel/PHP y MySQL para crear endpoints, modelos y consultas optimizadas.",
                    "Integración de microservicios y mejora del flujo de datos del sistema.",
                    "Utilicé servicios de AWS (Amplify, S3, Lambda) para despliegues, monitoreo y soporte técnico."
                ]}
            />
        </section>
    );
};
