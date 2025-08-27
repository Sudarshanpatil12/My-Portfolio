import React from "react";
import styles, { layout } from "../style";
import Circular from "./Gradients/Circular";
import { projects } from "../constants/projects";
import classNames from "classnames";
import { github, live } from "../assets";
import PillsContainer from "./Common/PillsContainer";
import Button from "./Common/Button";

const Projects = () => {
  return (
    <section
      id="projects"
      className={classNames(layout.sectionCol, styles.marginY, "relative")}
    >
      <Circular />

      {/* Section Heading */}
      <div className="grid sm:grid-cols-12 items-start mb-8">
        <div className="col-span-12 sm:col-span-4">
          <div className="sm:text-left">
            <div className="h-2 w-[3rem] bg-secondary dark:bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Projects</h3>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <p className={styles.paragraph}>
            Explore my portfolio of diverse web projects, showcasing my
            full-stack development expertise. From stunning front-end designs to
            powerful back-end functionality, these examples demonstrate my
            commitment to crafting seamless digital experiences.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#23232e] bg-[#141720] overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image */}
            <div className="w-full flex justify-center items-center bg-[#0f1117] p-4">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-48 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 text-center gap-3">
              <h4 className={styles.heading5}>{project.title}</h4>
              <p className="text-[#b0b0b0] text-[0.95rem] font-space">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <PillsContainer
                items={project.techStack.split(", ")}
                variant="glass"
                size="sm"
                className="justify-center"
              />

              {/* Buttons */}
              <div className="flex gap-4 justify-center mt-4">
                {project.links.github && (
                  <Button
                    className="flex items-center gap-2"
                    href={project.links.github}
                    target="_blank"
                    variant="outlined"
                    style="secondary"
                  >
                    <img src={github} alt="github" className="w-4" />
                    Source
                  </Button>
                )}
                {project.links.live && (
                  <Button
                    className="flex items-center gap-2"
                    href={project.links.live}
                    target="_blank"
                    variant="outlined"
                    style="primary"
                  >
                    <img src={live} alt="demo" className="w-4" />
                    Live
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
