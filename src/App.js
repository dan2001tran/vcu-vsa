import Navbar from './scenes/Navbar';
import Landing from './scenes/Landing';
import DotGroup from './scenes/DotGroup';
import About from './scenes/About';
import Projects from './scenes/Projects';
import Footer from './scenes/Footer';
import useMediaQuery from './hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import Preview from './scenes/Preview';
import { motion } from 'framer-motion';
import Hoodie from './scenes/Hoodie';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-6/6 mx-auto">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-6/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('about us')}
        >
          <About />
        </motion.div>
      </div>

      <div className="w-6/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('merch')}
        >
          <Projects />
        </motion.div>
      </div>
      <div className="w-6/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('merch')}
        >
          <Hoodie />
        </motion.div>
      </div>
      <div className="w-6/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('preview')}
        >
          <Preview />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
