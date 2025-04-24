import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  LandingPage,
  Footer,
} from "./components";

const getInitialShowLanding = () => {
  const saved = sessionStorage.getItem("showLanding");
  return saved === null ? true : saved === "true";
};

const App = () => {
  const [showLanding, setShowLanding] = useState(getInitialShowLanding);

  const handleEnter = () => {
    sessionStorage.setItem("showLanding", "false");
    setShowLanding(false);
  };

  return (
    <BrowserRouter>
      {showLanding ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Tech />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="works">
            <Works />
          </section>

          <div className="relative z-0">
            <section id="contact">
              <Contact />
            </section>
            <StarsCanvas />
          </div>

          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
