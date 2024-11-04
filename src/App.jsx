import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import Loading from './components/Common/Loading';
import { ThemeProvider } from './context/ThemeContext';
import { Helmet } from 'react-helmet';

// Lazy load sections for performance optimization
const Hero = lazy(() => import('./components/Sections/Hero'));
const Experience = lazy(() => import('./components/Sections/Experience'));
const Skills = lazy(() => import('./components/Sections/Skills'));
const Projects = lazy(() => import('./components/Sections/Projects'));
const Contact = lazy(() => import('./components/Sections/Contact'));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Dylan Zhuang | Portfolio</title>
          <meta name="description" content="Portfolio website of Dylan Zhuang, Software Engineer." />
          {/* Add more SEO tags as needed */}
        </Helmet>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <main className="pt-16">
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
};

export default App;
