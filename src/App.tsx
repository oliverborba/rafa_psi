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
          <title>Rafael Marrero Brignol - Psicólogo Clínico e Musicoterapeuta | Adultos RJ</title>
          <meta
            name="description"
            content="Rafael Marrero Brignol - Psicólogo Clínico (CRP 05/67479) e Musicoterapeuta (AMT-RJ 649/1) especializado em terapia para adultos, TCC e musicoterapia em Copacabana/RJ."
          />
          <meta
            name="keywords"
            content="psicólogo, musicoterapeuta, psicoterapia adultos, TCC, terapia cognitivo comportamental, Copacabana, CRP, musicoterapia neurológica, ansiedade, depressão"
          />
          <meta name="author" content="Rafael Marrero Brignol" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://psicologiarafael.com.br" />

          {/* Open Graph */}
          <meta property="og:title" content="Rafael Marrero Brignol - Psicólogo e Musicoterapeuta" />
          <meta
            property="og:description"
            content="Psicólogo Clínico e Musicoterapeuta especializado em terapia para adultos e desenvolvimento pessoal. Atendimento particular em Copacabana/RJ."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rafa-psi-psychology.surge.sh" />
          <meta property="og:image" content="https://rafa-psi-psychology.surge.sh/assets/rafa.png" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Rafael Marrero Brignol - Psicólogo e Musicoterapeuta" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Rafael Marrero Brignol - Psicólogo e Musicoterapeuta" />
          <meta
            name="twitter:description"
            content="Psicólogo Clínico e Musicoterapeuta especializado em terapia para adultos e desenvolvimento pessoal em Copacabana/RJ."
          />
          <meta name="twitter:image" content="https://rafa-psi-psychology.surge.sh/assets/rafa.png" />

          {/* Structured Data - JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              "name": "Rafael Marrero Brignol",
              "image": "https://rafa-psi-psychology.surge.sh/assets/rafa.png",
              "telephone": "+55-21-98765-4321",
              "email": "rafael@psicologiarafael.com.br",
              "url": "https://rafa-psi-psychology.surge.sh",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Barata Ribeiro, 456",
                "addressLocality": "Copacabana",
                "addressRegion": "RJ",
                "postalCode": "22040-000",
                "addressCountry": "BR"
              },
              "areaServed": ["Copacabana", "Rio de Janeiro"],
              "serviceType": ["Psicoterapia Individual", "Musicoterapia", "Terapia Cognitivo-Comportamental"],
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
                "Musicoterapia",
                "Terapia Cognitivo-Comportamental",
                "Psicoterapia Individual",
                "Ansiedade",
                "Depressão",
                "Transtornos de Humor",
                "Desenvolvimento Pessoal"
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
