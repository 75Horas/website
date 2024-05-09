import { Container } from 'react-bootstrap';
import './App.css'
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Updates } from './pages/Updates';
import { Community } from './pages/Community';
import { Screenshots } from './pages/Screenshot';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';
import { useEffect, useState } from 'react';
import { Enemies } from './pages/Enemies';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Store } from './pages/Shop';
import { changeLanguage } from 'i18next';

import "./i18n/i18n"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './pages/Contact';
import song from "/audio/song.mp3"
import { Collaborators } from './pages/Collaborators';

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
      : scrollPercentage < 8 ? "screenshots" : scrollPercentage < 11.0 ? "enemies"
        : scrollPercentage < 13 ? "store" : scrollPercentage < 15.8 ? "community" : "collaborators";
    setPageId(id);
  };

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage);
  }

  const [playing, setPlaying] = useState(true);
  const [audio] = useState(new Audio(song));

  const handleToggleSong = () => {
    setPlaying(!playing)
    audio.volume = 0.075
    audio.loop = true
    playing === true ? audio.play() : audio.pause()
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container fluid>
      {isloading ? (
        <Loading setIsLoading={setIsLoading} handleToggleSong={handleToggleSong} isloading={isloading} />
      ) :
        (
          <Container fluid className='pages-container'>

            <NavBar
              handleLanguage={handleChangeLanguage}
              language={currentLanguage}
              handleToggleSong={handleToggleSong}
              playing={playing}
            />
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
              <Collaborators />
            </section>
            <section>
              <Contact />
            </section>
            <section>
              <Footer />
            </section>

          </Container>
        )}
    </Container>
  )
}

export default App;
