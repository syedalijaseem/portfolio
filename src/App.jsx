import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  LandingPage,
  Footer,
} from "./components";

const App = () => {
  // toggle Landing page visibility
  const [showLanding, setShowLanding] = useState(true);

  const handleEnter = () => {
    setShowLanding(false);
  };

  return (
    <BrowserRouter>
      {showLanding ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        // Main content layout
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
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
