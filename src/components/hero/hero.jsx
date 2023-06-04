import '../hero/hero.css'
import PropTypes from 'prop-types';

export default function Hero(props) {
  return (
    <div className={`hero flex-col ${props.className}`}>
      <picture className='hero-img'>
        <source media="(min-width: 69.375em)" srcSet="./images/image-profile-desktop.webp" width='445px' height='720px'/>
        <source media="(min-width: 48em)" srcSet="./images/image-profile-tablet.webp" width='322px'height='600px' />
        <source media="(min-width: 23.4375em)" srcSet="./images/image-profile-mobile.webp" width='174px' height='383px'/>
        <img src="./images/image-profile-mobile.webp" alt="Image of Adam Keyes"  />
      </picture>
      <div className="hero-txt">
        <h1 className="hero-heading">Nice to <br/> meet you! I&apos;m <span className='name-underline'>Adam Keyes</span>.</h1>
        <p className="hero-discription">Based in the UK, I&apos;m a front-end devevloper passionate about building accessible web apps that users love.</p>
        <a href="#" className="contact-cta">contact me</a>
      </div>
    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string,
};