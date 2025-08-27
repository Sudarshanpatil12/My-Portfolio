import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  CTA,
  Footer,
  Projects,
  Skills,
  Zigzag,
  Education,
  Timeline,
} from "./components";
import classNames from "classnames";

const App = () => {
  return (
    <div className="bg-primary dark:bg-primary w-full overflow-hidden font-space">
      <Navbar />
      <Hero />

      <div
        className={classNames(
          "bg-primary dark:bg-primary",
          styles.paddingX,
          styles.flexStart
        )}
      >
        <div className={classNames(styles.boxWidth)}>
                    <Timeline />

          <Projects />
          <Skills />
          <Education />
          <div className="relative">
            <Zigzag />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
