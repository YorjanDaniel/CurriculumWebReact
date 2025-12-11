import { BackgroundAnimation } from './components/BackgroundAnimation';
import { LanguageSelector } from './components/LanguageSelector';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <LanguageSelector />

      {/* Fallback gradient if p5 loads slow or transparently overlays */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, rgba(15, 23, 42, 0) 50%)',
        pointerEvents: 'none'
      }}></div>

      <Header />
      <Summary />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '4rem 0 2rem', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Yorjan Daniel Ibarra. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
