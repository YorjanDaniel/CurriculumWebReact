import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export const Contact: React.FC = () => {
    const [state, setState] = useState<{ submitting: boolean; succeeded: boolean }>({
        submitting: false,
        succeeded: false,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState(prev => ({ ...prev, submitting: true }));

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xeoykyvz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true });
                form.reset();
            } else {
                setState(prev => ({ ...prev, submitting: false }));
                alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error:", error);
            setState(prev => ({ ...prev, submitting: false }));
            alert("Hubo un error de conexión.");
        }
    };

    return (
        <section className="container animate-slide-up delay-400" id="contact" style={{ marginBottom: '4rem' }}>
            <h3 className="section-title">Contáctame</h3>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h4 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.5rem' }}>
                    Trabajemos juntos
                </h4>

                {state.succeeded ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            ¡Muchas gracias!
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Te escribiré muy pronto.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mensaje</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    resize: 'vertical',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-red)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="btn-primary"
                            style={{
                                marginTop: '1rem',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem',
                                opacity: state.submitting ? 0.7 : 1,
                                cursor: state.submitting ? 'not-allowed' : 'pointer'
                            }}
                        >
                            <FaPaperPlane /> {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};
