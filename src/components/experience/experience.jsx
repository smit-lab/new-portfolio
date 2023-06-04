import '../experience/experience.css';
import "../../assets/fonts/fonts.css";
import PropTypes from "prop-types";

function Experiences({experience, years}) {
  return (
    <div>
    <h1 className="experience-heading">{experience}</h1>
    <p className="experience-para">{years} Years Experience</p>
    </div>
)
}


export default function Experience() {
  return (
    <div className='experience-container common-width'>
      <Experiences
        experience={"HTML"}
        years={4}
      />
      <Experiences
        experience={"CSS"}
        years={4}
      />
      <Experiences
        experience={"JavaScript"}
        years={4}
      />
      <Experiences
        experience={"Accessibility"}
        years={4}
      />
      <Experiences
        experience={"React"}
        years={3}
      />
      <Experiences
        experience={"Sass"}
        years={3}
      />
    </div>
  )
}


Experiences.propTypes = {
  experience: PropTypes.string,
  years: PropTypes.number
};