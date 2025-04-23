import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

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

const App = () => {
  const [showLanding, setShowLanding] = useState(() => {
    const savedState = sessionStorage.getItem("showLanding");
    return savedState === null ? true : savedState === "true";
  });

  useEffect(() => {
    sessionStorage.setItem("showLanding", showLanding);
  }, [showLanding]);

  const handleEnter = () => {
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
