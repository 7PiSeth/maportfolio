import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({duration:1000,offset: 200,anchorPlacement: 'top-bottom'});
    AOS.refresh();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-lg mx-auto px-5">
        <Home />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
        <Footer />
    </div>
  );
};
export default App;
