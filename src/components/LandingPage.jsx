import React, { useEffect, useState } from "react";
import { StarsCanvas } from "./canvas";
import TypeIt from "typeit-react";

const sentences = [
  "Hi there, I’m Ali.",
  "Welcome to My Portfolio.",
  "I’m a Software Engineer.",
  "Explore my work, experience, and more.",
];

const LandingPage = ({ onEnter }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="m-6">
            <TypeIt
              options={{
                strings: [sentences[currentSentenceIndex]],
                speed: 50,
                deleteSpeed: 40,
                breakDelay: 1000,
                cursor: true,
                cursorSpeed: 500,
                loop: false,
                deleteDelay: 700,
                waitUntilVisible: true,
              }}
              element={"h1"}
              className="text-4xl font-bold text-white mb-4"
              key={currentSentenceIndex}
              getBeforeInit={(instance) => {
                instance
                  .pause(1000)
                  .delete(sentences[currentSentenceIndex].length)
                  .pause(1000);
                return instance;
              }}
            />
          </div>
          <button
            onClick={onEnter}
            className="px-6 py-3 bg-secondary text-white font-bold rounded-md hover:bg-white hover:text-secondary transition"
          >
            Explore
          </button>
        </div>
      </div>
      <StarsCanvas />
    </>
  );
};

export default LandingPage;
