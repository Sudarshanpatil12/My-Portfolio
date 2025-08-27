import React from "react";
import styles, { layout } from "../style";
import classNames from "classnames";
import { education } from "../constants";

const Education = () => {
  return (
    <section
      id="education"
      className={classNames(
        layout.sectionCol,
        styles.marginY,
        "gap-y-8 relative"
      )}
    >
      {/* Section Heading */}
      <div className="sm:text-left">
        <div className="h-2 w-[3rem] bg-secondary dark:bg-secondary rounded-full mb-2" />
        <h3 className={styles.heading4}>Education</h3>
      </div>

      {/* Single Wider Card Containing All Education */}
      <div className="max-w-6xl mx-auto w-full rounded-2xl overflow-hidden border border-[#23232e] flex flex-col divide-y divide-[#23232e]">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-stretch"
          >
            {/* Left Meta */}
            <div className="flex flex-col gap-2.5 justify-between w-full md:w-1/4 items-start p-5 md:p-8 bg-transparent border-b md:border-r border-[#23232e] md:border-b-0">
              <span
                className={classNames(
                  styles.paragraph2,
                  "!text-[#6ac1ff] font-space tracking-wide"
                )}
              >
                {edu.year}
              </span>
              <span
                className={classNames(
                  styles.paragraph2,
                  "!text-[#b0b0b0] font-space"
                )}
              >
                {edu.score}
              </span>
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-1 p-5 md:p-8 gap-2">
              <h3 className={styles.heading5}>{edu.degree}</h3>
              <p className="text-[#b0b0b0] font-space text-[1rem]">
                {edu.school}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
