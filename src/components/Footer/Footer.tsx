import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rafael Marrero Brignol</h3>
            <p className="footer-description">
              Psicólogo clínico especializado no atendimento de adultos e musicoterapia.
              Formação em TCC e abordagens terapêuticas para desenvolvimento pessoal.
            </p>
            <div className="footer-crp">
              <p><strong>CRP 05/67479 | AMT-RJ 649/1</strong></p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                </svg>
                <span>(21) 99402-1137</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
                <span>contato@primoatto.com.br</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
                <span>Rua Barata Ribeiro, 774 - Sl. 409 e 410, Copacabana, Rio de Janeiro/RJ</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Horários</h4>
            <div className="footer-schedule">
              <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
              <p><strong>Atendimento:</strong> Consultas particulares</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <nav className="footer-nav">
              <button
                onClick={() => {
                  const inicio = document.getElementById('inicio');
                  inicio?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Início
              </button>
              <button
                onClick={() => {
                  const sobre = document.getElementById('sobre');
                  sobre?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Sobre
              </button>
              <button
                onClick={() => {
                  const especialidades = document.getElementById('especialidades');
                  especialidades?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Especialidades
              </button>
              <button
                onClick={() => {
                  const contato = document.getElementById('contato');
                  contato?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contato
              </button>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Rafael Marrero Brignol - Psicólogo Clínico.
              Todos os direitos reservados.
            </p>
            <div className="footer-legal">
              <span>
                Site desenvolvido por{' '}
                <a
                  href="https://www.linkedin.com/in/lucas-oliveira-de-borba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#FFD700',
                    textDecoration: 'none',
                    fontWeight: '600',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#FFF8DC';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#FFD700';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                >
                  Lucas Borba
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
