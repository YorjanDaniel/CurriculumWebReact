import React from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
        role: string;
        company: string;
        period: string;
        description: string;
        details: string[];
    }>;

    return (
        <section className="container animate-slide-up delay-200">
            <h3 className="section-title">{t('experience.title')}</h3>

            {jobs.map((job, index) => (
                <ExperienceItem
                    key={index}
                    role={job.role}
                    company={job.company}
                    period={job.period}
                    description={job.description}
                    details={job.details}
                />
            ))}
        </section>
    );
};
