import { Container } from 'react-bootstrap';
import './App.css'
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Updates } from './pages/Updates';
import { Community } from './pages/Community';
import { Screenshots } from './pages/Screenshot';
import { Footer } from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Loading } from './components/Loading';
import { useEffect, useState } from 'react';
import { Enemies } from './pages/Enemies';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Store } from './pages/Shop';
import { changeLanguage } from 'i18next';

import "./i18n/i18n"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isloading, setIsLoading] = useState(true);

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [pageId, setPageId] = useState("home");

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const currentPosition = window.scrollY;
    const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100 / 6;
    setScrollPercentage(scrollPercentage);

    const id = scrollPercentage < 1 ? "home" : scrollPercentage < 5.5 ? "news"
      : scrollPercentage < 8 ? "screenshots" : scrollPercentage < 11.5 ? "enemies"
        : scrollPercentage < 14.5 ? "community" : "store";
    setPageId(id);
  };

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage);
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timeout) + window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <Container fluid>
        {isloading ? (
          <Loading />
        ) :
          (
            <Container fluid className='pages-container'>

              <NavBar handleLanguage={handleChangeLanguage} language={currentLanguage} />
              <ScrollIndicator id={pageId} />
              <section>
                <Home />
              </section>
              <section>
                <Updates />
              </section>
              <section>
                <Screenshots />
              </section>
              <section>
                <Enemies />
              </section>
              <section>
                <Store />
              </section>
              <section>
                <Community />
              </section>
              <section>
                <Footer />
              </section>

            </Container>
          )}
      </Container>
    </ParallaxProvider>
  )
}

export default App;