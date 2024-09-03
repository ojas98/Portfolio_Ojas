import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './sections/navbar';
import SocialIcons from './components/SocialIcons';
import Email from './components/Email';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experiences';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Loader from './components/Loader';

function Index() {
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    ReactGA.initialize('G-V4772H1PHH');
    ReactGA.send('pageview');
  }, []);

  const handleLoaderEnd = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <div className={`app ${responsiveNavVisible ? 'blur-active' : ''}`}>
      {isLoading ? (
        <Loader onLoaderEnd={handleLoaderEnd} />
      ) : (
        <>
          <Navbar />
          <Email />
          <SocialIcons responsiveNavVisible={responsiveNavVisible} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Index;
