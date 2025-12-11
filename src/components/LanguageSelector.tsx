import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas } from 'react-icons/fa';

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 1000
        }}>
            <div className="glass-panel" style={{
                display: 'flex',
                padding: '0.5rem',
                borderRadius: '50px',
                gap: '0.5rem',
                alignItems: 'center'
            }}>
                <FaGlobeAmericas style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)' }} />
                <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    value={i18n.language}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        padding: '0.5rem',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        outline: 'none',
                        fontWeight: 600
                    }}
                >
                    <option value="es" style={{ background: '#1e293b' }}>Español</option>
                    <option value="en" style={{ background: '#1e293b' }}>English</option>
                </select>
            </div>
        </div>
    );
};
