import "../portfolio/portfolio.css";
// import "../../assets/fonts/fonts.css";
import PropTypes from "prop-types";

function imageUrl(project) {
  return `./images/thumbnail-project-${project.number}-${project.size}.webp`;
}

function Projects({ project }) {
  return (
    <div className="project-box flex-col">
      <div className="img">
        <img className="project-img" src={imageUrl(project)} alt="" />
      </div>
      <div>
        <h1 className="project-name">{project.name}</h1>
        <div className="project-language flex-row">
          {project.lang &&
            project.lang.map((language, index) => (
              <p key={index} className="language-item">
                {language}
              </p>
            ))}
        </div>
      </div>
      <div className="project-link-container flex-row">
        <a className="contact-cta" href="#">
          view project
        </a>
        <a className="contact-cta" href="#">
          view code
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projectValues = [
    {
      name: "design portfolio",
      lang: ["HTML", "CSS"],
      number: "1",
      size: "small",
    },
    {
      name: "e-learning landing page",
      lang: ["html", "css"],
      number: "2",
      size: "small",
    },
    {
      name: "todo web app",
      lang: ["html", "css"],
      number: "3",
      size: "small",
    },
    {
      name: "design portfolio",
      lang: ["html", "css"],
      number: "4",
      size: "small",
    },
    {
      name: "memory game",
      lang: ["html", "css", "javascript"],
      number: "5",
      size: "small",
    },
    {
      name: "art gallery showcase",
      lang: ["html", "css", "javascript"],
      number: "6",
      size: "small",
    },
  ];

  return (
    <div className="common-width projects-container">
      <div className="portfolio-heading-box flex-row">
        <h1 className="projects-heading">Projects</h1>
        <a className="contact-cta" href="#">
          contact me
        </a>
      </div>
      <div className="project--container">
        {projectValues.map((project, index) => (
          <Projects key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  className: PropTypes.string,
};

Projects.propTypes = {
  project: PropTypes.shape({
    number: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lang: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
