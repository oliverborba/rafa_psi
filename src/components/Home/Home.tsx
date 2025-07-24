import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <main className="home">
      {/* Seção Hero */}
      <section id="inicio" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Rafael Marrero Brignol</h1>
            <p className="hero-subtitle">Psicólogo Clínico | CRP 05/67479 | Musicoterapeuta | AMT-RJ 649/1</p>
            <p className="hero-description">
              Psicólogo clínico especializado no atendimento de adultos com foco em saúde mental e bem-estar emocional.
              Musicoterapeuta com formação em técnicas terapêuticas avançadas para desenvolvimento pessoal.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  const contato = document.getElementById('contato');
                  contato?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Agendar Consulta
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  const sobre = document.getElementById('sobre');
                  sobre?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Conhecer Mais
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/rafa.png"
              alt="Dr. Rafael Marrero Brignol - Psicólogo Clínico CRP 05/67479 e Musicoterapeuta AMT-RJ 649/1 especializado em TCC e terapia para adultos em Copacabana, Rio de Janeiro"
              loading="eager"
              width="350"
              height="300"
              style={{
                width: '350px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                filter: 'brightness(1.1) contrast(1.05)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="section-header">
            <h2>Sobre Mim</h2>
            <p className="section-subtitle">
              Conheça minha jornada profissional e abordagem terapêutica
            </p>
          </div>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                Olá! Sou Rafael Marrero Brignol, psicólogo clínico (CRP 05/67479) e
                musicoterapeuta (AMT-RJ 649/1) especializado no atendimento de adultos
                com foco em saúde mental e desenvolvimento pessoal.
              </p>
              <p>
                Minha atuação é voltada para adultos que buscam autoconhecimento, superação de desafios
                e melhoria da qualidade de vida, utilizando abordagens terapêuticas baseadas em evidências
                como Terapia Cognitivo-Comportamental (TCC) e Musicoterapia Neurológica.
              </p>
              <div className="qualificacoes">
                <h3>Formação Acadêmica e Especialização</h3>
                <ul>
                  <li>Graduação em Psicologia - URCAMP-RS (2011)</li>
                  <li>Especialização em Musicoterapia - CBM-RJ (2013)</li>
                  <li>Mestrado em Educação - UFPEL-RS (2016)</li>
                  <li>Especialização em Saúde Pública com Ênfase na Saúde da Família - UNINTER (2019)</li>
                  <li>Especialização em Terapia Cognitivo-Comportamental (TCC) - IESLA (2024)</li>
                </ul>
              </div>
              <div className="qualificacoes">
                <h3>Formações Complementares</h3>
                <ul>
                  <li>Musicoterapia Neurológica: Técnicas para desenvolvimento pessoal</li>
                  <li>Psicoterapia para Adultos: Abordagens humanísticas e cognitivas</li>
                  <li>Técnicas de Relaxamento e Mindfulness</li>
                  <li>Terapia Focada em Soluções</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especialidades */}
      <section id="especialidades" className="especialidades">
        <div className="container">
          <div className="section-header">
            <h2>Minhas Especialidades</h2>
            <p className="section-subtitle">
              Psicologia clínica para adultos - Intervenções baseadas em evidências científicas
            </p>
          </div>
          <div className="especialidades-grid">
            <div className="especialidade-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                borderRadius: '15px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                color: 'white',
                boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.57.46-3.03 1.24-4.26L6.7 6.29c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.45 1.45C10.97 5.46 12.43 5 14 5c1.38 0 2.68.33 3.83.92.39.2.54.67.34 1.06-.2.39-.67.54-1.06.34C16.2 6.88 15.14 6.5 14 6.5c-1.38 0-2.64.56-3.54 1.46l1.45 1.45c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L8.05 8.37C7.56 9.27 7.5 10.38 7.5 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-.83-.17-1.62-.46-2.34-.17-.42.03-.9.45-1.07.42-.17.9.03 1.07.45.37.91.57 1.9.57 2.96 0 4.41-3.59 8-8 8z" fill="currentColor" />
                </svg>
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Transtornos de Ansiedade e Depressão
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Tratamento especializado para transtornos de ansiedade, depressão e outros
                quadros emocionais em adultos, utilizando técnicas comprovadas e abordagem
                personalizada para cada caso.
              </p>
            </div>

            <div className="especialidade-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fff8f0 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(251, 146, 60, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 146, 60, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
                borderRadius: '15px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                color: 'white',
                boxShadow: '0 8px 20px rgba(251, 146, 60, 0.3)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C15.31 7 18 9.69 18 13V16C18 17.1 17.1 18 16 18H8C6.9 18 6 17.1 6 16V13C6 9.69 8.69 7 12 7ZM12 9C9.79 9 8 10.79 8 13V15H16V13C16 10.79 14.21 9 12 9ZM4 19H20V21H4V19Z" fill="currentColor" />
                </svg>
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Psicoterapia para Adultos
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Atendimento psicológico especializado para adultos que buscam autoconhecimento,
                superação de desafios pessoais e melhoria da qualidade de vida através de
                abordagens terapêuticas eficazes.
              </p>
            </div>

            <div className="especialidade-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(34, 197, 94, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                borderRadius: '15px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                color: 'white',
                boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.09 8.26L20 9L14 14.74L15.18 21.02L12 17.27L8.82 21.02L10 14.74L4 9L9.91 8.26L12 2Z" fill="currentColor" />
                  <path d="M5 3V19L7.5 17L10 19V11H5V3Z" fill="currentColor" opacity="0.7" />
                </svg>
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Terapia Cognitivo-Comportamental (TCC)
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Intervenções estruturadas para regulação emocional e comportamental,
                promovendo mudanças duradouras através de técnicas baseadas em
                evidências científicas.
              </p>
            </div>

            <div className="especialidade-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fef3ff 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(168, 85, 247, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                borderRadius: '15px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                color: 'white',
                boxShadow: '0 8px 20px rgba(168, 85, 247, 0.3)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V10.55C11.41 10.21 10.73 10 10 10C7.79 10 6 11.79 6 14S7.79 18 10 18 14 16.21 14 14V7H18V3H12ZM12 14C12 15.1 11.1 16 10 16S8 15.1 8 14 8.9 12 10 12C10.73 12 11.41 12.21 12 12.55V14Z" fill="currentColor" />
                  <path d="M20 12V14H22V12H20ZM20 8V10H22V8H20ZM20 4V6H22V4H20Z" fill="currentColor" opacity="0.7" />
                </svg>
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Musicoterapia para Desenvolvimento Pessoal
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Uso terapêutico da música para desenvolvimento pessoal, relaxamento e
                bem-estar emocional, especialmente eficaz para adultos que buscam
                novas formas de expressão e autoconhecimento.
              </p>
            </div>

            <div className="especialidade-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(14, 165, 233, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(14, 165, 233, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                borderRadius: '15px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                color: 'white',
                boxShadow: '0 8px 20px rgba(14, 165, 233, 0.3)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM9 7H15C16.1 7 17 7.9 17 9V15C17 16.1 16.1 17 15 17H9C7.9 17 7 16.1 7 15V9C7 7.9 7.9 7 9 7ZM9 9V15H15V9H9ZM5.5 18.5C6.33 18.5 7 19.17 7 20S6.33 21.5 5.5 21.5 4 20.83 4 20 4.67 18.5 5.5 18.5ZM18.5 18.5C19.33 18.5 20 19.17 20 20S19.33 21.5 18.5 21.5 17 20.83 17 20 17.67 18.5 18.5 18.5Z" fill="currentColor" />
                </svg>
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Desenvolvimento Pessoal e Autoestima
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Trabalho focado no fortalecimento da autoestima, autoconfiança e
                desenvolvimento de habilidades pessoais para uma vida mais plena
                e satisfatória.
              </p>
            </div>

            <div className="especialidade-card" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(245, 158, 11, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(245, 158, 11, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="card-icon" style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                borderRadius: '15px',
                padding: '1rem',
                marginBottom: '1.5rem',
                display: 'inline-block',
                color: 'white',
                boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
                  <path d="M9 11H8C7.45 11 7 11.45 7 12S7.45 13 8 13H9V11ZM16 11H15V13H16C16.55 13 17 12.55 17 12S16.55 11 16 11Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
              <h3 style={{ color: '#1e293b', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
                Gestão do Estresse e Bem-estar
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Técnicas especializadas para manejo do estresse, ansiedade e
                promoção do bem-estar emocional, ajudando adultos a encontrarem
                equilíbrio em suas vidas pessoais e profissionais.
              </p>
            </div>
          </div>

          <div className="especialidades-image">
            <img
              src="/assets/atendimento_psicologo.jpg"
              alt="Consultório de Psicologia em Copacabana - Ambiente acolhedor e profissional para atendimento psicológico especializado em TCC, musicoterapia e desenvolvimento pessoal para adultos no Rio de Janeiro"
              loading="lazy"
              width="500"
              height="300"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.4s ease',
                filter: 'brightness(1.05) saturate(1.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02) rotateY(5deg)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="contato">
        <div className="container">
          <div className="section-header">
            <h2>Vamos Conversar?</h2>
            <p className="section-subtitle">
              Entre em contato para agendar sua consulta
            </p>
          </div>
          <div className="contato-content">
            <div className="contato-info">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3>Telefone/WhatsApp</h3>
                  <p>(21) 99402-1137</p>
                  <button
                    onClick={() => window.open('https://wa.me/5521994021137?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
                    style={{
                      background: 'linear-gradient(135deg, #4a9b9b 0%, #6bbbb3 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '0.8rem 1.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '0.8rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(74, 155, 155, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 155, 155, 0.4)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #6bbbb3 0%, #8fbc8f 100%)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 155, 155, 0.3)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #4a9b9b 0%, #6bbbb3 100%)';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                    Falar no WhatsApp
                  </button>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3>E-mail</h3>
                  <p>contato@primoatto.com.br</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3>Endereço</h3>
                  <p>Rua Barata Ribeiro, 774 - Sl. 409 e 410<br />Copacabana, Rio de Janeiro - RJ</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3>Modalidade de Atendimento</h3>
                  <p><strong>Exclusivamente Particular</strong><br />
                    Não atendo por planos de saúde ou convênios<br />
                    Valores e formas de pagamento consulte via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
