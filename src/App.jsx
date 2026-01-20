import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css'
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="qualifications"><Qualifications /></div>
      <div id="skills"><Skills /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;



