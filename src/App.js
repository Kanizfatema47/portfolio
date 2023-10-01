
import { useState } from 'react';
import Banner from './Homepage/Banner';
import ContactForm from './Homepage/ContactForm';
import Education from './Homepage/Education';
import Navbar from './Homepage/Navbar';
import Skills from './Homepage/Skills';
import Footer from './Homepage/Footer';
import Project from './Homepage/Project';
import About from './Homepage/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${!!isDarkMode ? 'bg-black' : 'bg-white'} `}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Banner></Banner>
      <Skills />
      <About/>
      <Project></Project>
      <Education></Education>

      <ContactForm></ContactForm>
      <Footer/>
    </div>
  );
}

export default App;
