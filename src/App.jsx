import React, { useState, useEffect } from "react";
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
import TechCursor from "./components/TechCursor";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-primary dark:bg-primary w-full overflow-hidden font-space">
      <TechCursor />
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
