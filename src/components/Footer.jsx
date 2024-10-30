import { github, linkedin } from "../assets";

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full items-center py-5 bg-primary`}
    >
      <div className="flex justify-center space-x-5 mb-5">
        <a
          href="https://github.com/syedalijaseem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="https://linkedin.com/in/syedalijaseem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-10 h-10 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>

      <p className="text-center text-gray-600">
        Copyright © 2024 | Syed Ali Jaseem
      </p>
    </footer>
  );
};

export default Footer;
