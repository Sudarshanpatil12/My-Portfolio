import styles, { layout } from "../style";
import { live, github } from "../assets";
import PillsContainer from "./Common/PillsContainer";
import Button from "./Common/Button";
import classNames from "classnames";
import TextWithHighlights from "./Common/TextWithHighlights";

const Project = ({ projectData }) => {
  if (!projectData) return null;

  const title = projectData.title || "";
  const description = projectData.description || "";
  const image = projectData.image;
  const layoutType = projectData.layout;
  const additionalInfo = projectData.additionalInfo || "";
  const highlights = projectData.highlights || [];

  const techItems = projectData.techStack
    ? String(projectData.techStack)
        .split(", ")
        .map((t) => t.trim())
        .filter(Boolean)
    : Array.isArray(projectData.tech)
    ? projectData.tech
    : [];

  const normalizedLinks = projectData.links || {
    github: projectData.github || "",
    live: projectData.live || "",
  };

  const sectionClass =
    layoutType === "reverse" ? layout.sectionReverse : layout.section;
  const imgClass =
    layoutType === "reverse" ? layout.sectionImg : layout.sectionImgReverse;

  return (
    <section className={sectionClass}>
      {layoutType === "reverse" ? (
        <>
          <div className={layout.sectionInfo}>
            <ProjectContent
              title={title}
              description={description}
              techItems={techItems}
              additionalInfo={additionalInfo}
              links={normalizedLinks}
              highlights={highlights}
            />
          </div>
          <div className={layout.sectionImg}>
            <img src={image} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className={imgClass}>
            <img src={image} alt={title} />
          </div>
          <div className={layout.sectionInfo}>
            <ProjectContent
              title={title}
              description={description}
              techItems={techItems}
              additionalInfo={additionalInfo}
              links={normalizedLinks}
              highlights={highlights}
            />
          </div>
        </>
      )}
    </section>
  );
};

const ProjectContent = ({
  title,
  description,
  techItems,
  additionalInfo = "",
  highlights = [],
  links,
}) => {
  return (
    <>
      <h2 className={styles.heading5}>{title}</h2>
      <TextWithHighlights
        tag="p"
        text={description}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        highlightStyle="bold"
        highlights={highlights}
      />
      <PillsContainer
        items={techItems}
        variant="glass"
        size="sm"
        className="mt-4"
      />
      {additionalInfo && (
        <TextWithHighlights
          tag="p"
          text={additionalInfo}
          className={classNames(styles.paragraph, "text-white")}
        />
      )}
      <div className="flex gap-4 mt-4">
        {links?.github && (
          <Button
            className="flex items-center gap-2"
            href={links.github}
            target="_blank"
            variant="solid"
            style="primary"
          >
            Source Code
            <img src={github} alt="code" className="w-4" />
          </Button>
        )}
        {links?.live && (
          <Button
            className="flex items-center gap-2"
            href={links.live}
            target="_blank"
            variant="solid"
            style="secondary"
          >
            Live
            <img src={live} alt="demo" className="w-4" />
          </Button>
        )}
      </div>
    </>
  );
};

export default Project;
