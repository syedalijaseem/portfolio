import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
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
          <About />
          <Experience />
          <Tech />
          <Education />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
