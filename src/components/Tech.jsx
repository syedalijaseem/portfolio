import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="mb-12">
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies that I use
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
