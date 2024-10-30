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
  const [showLanding, setShowLanding] = useState(false); // State to control visibility

  // Function to hide the landing page and show main content
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
