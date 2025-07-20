import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Rafael Marrero Brignol - Psicólogo e Musicoterapeuta | TEA e Desenvolvimento Infantil</title>
          <meta
            name="description"
            content="Rafael Marrero Brignol - Psicólogo Clínico (CRP 05/67479) e Musicoterapeuta (AMT-RJ 649/1) especializado em TEA, desenvolvimento infantil e terapia cognitivo-comportamental em Taboão da Serra/SP."
          />
          <meta
            name="keywords"
            content="psicólogo, musicoterapeuta, TEA, autismo, psicoterapia infantil, TCC, ABA, ESDM, Taboão da Serra, CRP, musicoterapia neurológica"
          />
          <meta name="author" content="Rafael Marrero Brignol" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://psicologiarafael.com.br" />

          {/* Open Graph */}
          <meta property="og:title" content="Rafael Marrero Brignol - Psicólogo e Musicoterapeuta" />
          <meta
            property="og:description"
            content="Psicólogo Clínico e Musicoterapeuta especializado em TEA e desenvolvimento infantil. Atendimento profissional em Taboão da Serra/SP."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://psicologiarafael.com.br" />
          <meta property="og:image" content="https://psicologiarafael.com.br/assets/og-image.jpg" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Rafael Marrero Brignol - Psicólogo e Musicoterapeuta" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Rafael Marrero Brignol - Psicólogo e Musicoterapeuta" />
          <meta
            name="twitter:description"
            content="Psicólogo Clínico e Musicoterapeuta especializado em TEA e desenvolvimento infantil em Taboão da Serra/SP."
          />
          <meta name="twitter:image" content="https://psicologiarafael.com.br/assets/twitter-image.jpg" />

          {/* Structured Data - JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              "name": "Rafael Marrero Brignol",
              "image": "https://psicologiarafael.com.br/assets/rafa.png",
              "telephone": "+55-11-98765-4321",
              "email": "rafael@psicologiarafael.com.br",
              "url": "https://psicologiarafael.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua XV de Novembro, 456",
                "addressLocality": "Taboão da Serra",
                "addressRegion": "SP",
                "postalCode": "06760-000",
                "addressCountry": "BR"
              },
              "areaServed": "Taboão da Serra",
              "serviceType": ["Psicoterapia", "Musicoterapia"],
              "priceRange": "$$",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-12:00"
              ],
              "sameAs": [
                "https://www.instagram.com/rafael.psicologo",
                "https://www.linkedin.com/in/rafael-marrero-brignol"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "CRP 05/67479"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "AMT-RJ 649/1"
                }
              ],
              "knowsAbout": [
                "Transtorno do Espectro do Autismo (TEA)",
                "Musicoterapia",
                "Terapia Cognitivo-Comportamental",
                "Psicoterapia Infantil",
                "ABA - Análise do Comportamento Aplicada",
                "Modelo Denver (ESDM)",
                "Orientação Familiar"
              ]
            })}
          </script>
        </Helmet>

        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
