import "../header/header.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className={`navbar common-width flex ${props.className}`}>
      <h1 className="website-name">adamkeyes</h1>
      <div className="social-icons flex">
        <a href="#">
          <AiFillGithub />
        </a>
        <a href="#">
          <AiOutlineTwitter />
        </a>
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <AiOutlineInstagram />
        </a>
      </div>
    </nav>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
