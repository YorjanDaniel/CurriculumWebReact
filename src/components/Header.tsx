import React from 'react';
import profilePic from '../assets/Foto de Perfil.jpg';
import cvPdfEs from '../assets/Desarrollador de Software Yorjan Daniel Ibarra.pdf';
import cvPdfEn from '../assets/Full Stack Developer Daniel.pdf';

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFileDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


export const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    const cvFile = i18n.language === 'en' ? cvPdfEn : cvPdfEs;
    const downloadName = i18n.language === 'en' ? "CV_Yorjan_Ibarra_FullStack.pdf" : "CV_Yorjan_Ibarra_SoftwareDev.pdf";

    return (
        <header className="container animate-fade-in" style={{
            paddingTop: '6rem',
            paddingBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>

            {/* Glowing Profile Picture */}
            <div className="neon-border" style={{ marginBottom: '2rem' }}>
                <div style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden'
                }}>
                    <img
                        src={profilePic}
                        alt="Yorjan Daniel Ibarra"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%'
                        }}
                    />
                </div>
            </div>

            {/* Name and Title */}
            <h1 className="hero-title animate-slide-up delay-100">
                YORJAN DANIEL IBARRA
            </h1>
            <h2 className="hero-subtitle animate-slide-up delay-200">
                {t('header.title')}
            </h2>

            {/* Action Buttons */}
            <div className="animate-slide-up delay-300" style={{ marginBottom: '2.5rem' }}>
                <a
                    href={cvFile}
                    download={downloadName}
                    className="hero-btn"
                >
                    <FaFileDownload /> {t('header.download_cv')}
                </a>
            </div>

            {/* Glass Social Bar */}
            <div
                className="glass-panel animate-slide-up delay-400"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    borderRadius: '2rem',
                    maxWidth: '100%'
                }}
            >
                <a href="tel:+573025555789" className="social-pill" title={t('header.call')}>
                    <FaPhoneAlt /> (+57) 302 5555789
                </a>
                <span className="social-pill" title="Ubicación">
                    <FaMapMarkerAlt /> {t('header.location')}
                </span>
                <a href="mailto:yorjanibarra82@gmail.com" className="social-pill" title={t('header.email')}>
                    <FaEnvelope /> yorjanibarra82@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/yorjan-daniel-ibarra-villamizar-37326833b" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/YorjanDaniel" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                    <FaGithub />
                </a>
            </div>

        </header>
    );
};
