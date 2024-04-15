import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Interests from './components/interests/Interests';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className = 'main'>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Interests />
      <Blog />
      <Contact />

    </main>
    </>
  )
}
  

export default App;
