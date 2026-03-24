import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="relative bg-slate-950 text-white overflow-x-hidden">
      
      <div className="relative z-10">
        <ParticlesBackground />
        <Navbar />
        <Home />
        <About />
        <Experience/>
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;