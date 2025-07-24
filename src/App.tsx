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
          <title>Rafael Marrero Brignol - Psicólogo Clínico CRP 05/67479 | Terapia para Adultos Copacabana RJ</title>
          <meta
            name="description"
            content="Dr. Rafael Marrero Brignol - Psicólogo Clínico CRP 05/67479 e Musicoterapeuta AMT-RJ 649/1. Especialista em TCC, ansiedade, depressão e desenvolvimento pessoal para adultos. Consultas particulares em Copacabana, Rio de Janeiro."
          />
          <meta
            name="keywords"
            content="psicólogo Copacabana, psicólogo Rio de Janeiro, CRP 05/67479, Rafael Marrero Brignol, TCC, terapia cognitivo comportamental, musicoterapia, ansiedade, depressão, psicoterapia adultos, psicólogo particular RJ, consulta psicológica Copacabana, saúde mental, desenvolvimento pessoal"
          />
          <meta name="author" content="Rafael Marrero Brignol" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <link rel="canonical" href="https://rafa-psi-psychology.surge.sh" />

          {/* Geo Location Tags */}
          <meta name="geo.region" content="BR-RJ" />
          <meta name="geo.placename" content="Copacabana, Rio de Janeiro" />
          <meta name="geo.position" content="-22.9711;-43.1825" />
          <meta name="ICBM" content="-22.9711, -43.1825" />

          {/* Language and Content Tags */}
          <meta httpEquiv="content-language" content="pt-BR" />
          <meta name="language" content="Portuguese" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />

          {/* Professional Tags */}
          <meta name="profession" content="Psicólogo Clínico" />
          <meta name="specialty" content="Terapia Cognitivo-Comportamental, Musicoterapia" />
          <meta name="license" content="CRP 05/67479, AMT-RJ 649/1" />

          {/* Open Graph Enhanced */}
          <meta property="og:title" content="Rafael Marrero Brignol - Psicólogo Clínico CRP 05/67479 | Copacabana RJ" />
          <meta
            property="og:description"
            content="Psicólogo Clínico e Musicoterapeuta especialista em TCC para adultos. Atendimento particular em Copacabana/RJ. CRP 05/67479."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rafa-psi-psychology.surge.sh" />
          <meta property="og:image" content="https://rafa-psi-psychology.surge.sh/assets/rafa.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Rafael Marrero Brignol - Psicólogo Clínico e Musicoterapeuta" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Rafael Marrero Brignol - Psicólogo" />
          <meta property="article:author" content="Rafael Marrero Brignol" />

          {/* Twitter Card Enhanced */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Rafael Marrero Brignol - Psicólogo Clínico CRP 05/67479" />
          <meta
            name="twitter:description"
            content="Especialista em TCC e Musicoterapia para adultos em Copacabana/RJ. Consultas particulares."
          />
          <meta name="twitter:image" content="https://rafa-psi-psychology.surge.sh/assets/rafa.png" />
          <meta name="twitter:image:alt" content="Rafael Marrero Brignol - Psicólogo Clínico" />

          {/* Preload Critical Resources */}
          <link rel="preload" href="/assets/rafa.png" as="image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Enhanced Structured Data - JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Rafael Marrero Brignol",
                "jobTitle": "Psicólogo Clínico",
                "image": "https://rafa-psi-psychology.surge.sh/assets/rafa.png",
                "telephone": "+55-21-99402-1137",
                "email": "contato@primoatto.com.br",
                "url": "https://rafa-psi-psychology.surge.sh",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Barata Ribeiro, 774 - Sala 409 e 410",
                  "addressLocality": "Copacabana",
                  "addressRegion": "Rio de Janeiro",
                  "postalCode": "22040-000",
                  "addressCountry": "Brasil"
                },
                "worksFor": {
                  "@type": "Organization",
                  "name": "Consultório Particular"
                },
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "CRP 05/67479",
                    "educationalLevel": "Registro Profissional"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "credentialCategory": "AMT-RJ 649/1",
                    "educationalLevel": "Registro Profissional"
                  }
                ],
                "knowsAbout": [
                  "Terapia Cognitivo-Comportamental",
                  "Musicoterapia",
                  "Psicoterapia Individual",
                  "Transtornos de Ansiedade",
                  "Depressão",
                  "Desenvolvimento Pessoal",
                  "Saúde Mental"
                ],
                "alumni": [
                  {
                    "@type": "EducationalOrganization",
                    "name": "URCAMP-RS"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "Rafael Marrero Brignol - Consultório de Psicologia",
                "image": "https://rafa-psi-psychology.surge.sh/assets/rafa.png",
                "telephone": "+55-21-99402-1137",
                "email": "contato@primoatto.com.br",
                "url": "https://rafa-psi-psychology.surge.sh",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Barata Ribeiro, 774 - Sala 409 e 410",
                  "addressLocality": "Copacabana",
                  "addressRegion": "Rio de Janeiro",
                  "postalCode": "22040-000",
                  "addressCountry": "Brasil"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "-22.9711",
                  "longitude": "-43.1825"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                ],
                "priceRange": "$$",
                "currenciesAccepted": "BRL",
                "paymentAccepted": "Dinheiro, Cartão, PIX",
                "areaServed": {
                  "@type": "City",
                  "name": "Rio de Janeiro"
                },
                "medicalSpecialty": "Psychology",
                "serviceType": "Psicoterapia Individual"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Rafael Marrero Brignol - Psicólogo",
                "url": "https://rafa-psi-psychology.surge.sh",
                "description": "Site oficial do psicólogo clínico Rafael Marrero Brignol, especialista em TCC e Musicoterapia para adultos.",
                "inLanguage": "pt-BR",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://rafa-psi-psychology.surge.sh/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])}
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
