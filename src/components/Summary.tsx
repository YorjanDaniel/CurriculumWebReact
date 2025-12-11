import React from 'react';
import { useTranslation } from 'react-i18next';

export const Summary: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="container animate-slide-up delay-100">
            <div className="card">
                <h3 className="section-title">{t('summary.title')}</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    {t('summary.content')}
                </p>
            </div>
        </section>
    );
};
