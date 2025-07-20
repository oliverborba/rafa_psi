import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 50);

      // Detectar seção ativa baseada no scroll
      const sections = ['inicio', 'sobre', 'especialidades', 'contato'];
      const scrollPos = scrollPosition + 200;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120;
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>Rafael Marrero Brignol</h1>
          <p>Psicólogo Clínico e Musicoterapeuta</p>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <button
                className={activeSection === 'inicio' ? 'active' : ''}
                onClick={() => scrollToSection('inicio')}
              >
                Início
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'sobre' ? 'active' : ''}
                onClick={() => scrollToSection('sobre')}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'especialidades' ? 'active' : ''}
                onClick={() => scrollToSection('especialidades')}
              >
                Especialidades
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'contato' ? 'active' : ''}
                onClick={() => scrollToSection('contato')}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
