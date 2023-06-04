import "../form/form.css";
import Header from "../header/header";

export default function ContactForm() {
  return (
    <div className="form-container">
      <div className="form">
        <div className="form-txt">
          <h1 className="form-txt__heading">Contact</h1>
          <p className="form-txt__para">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form className="form-box flex-col" action="#" noValidate>
          <input
            className="input-field input-name"
            type="text"
            placeholder="name"
            required
          />
          <input
            className="input-field input-email"
            type="email"
            placeholder="email"
            required
          />
          <textarea
            className="input-field input-msg"
            type="text"
            placeholder="message"
          />
          <button className="submit-btn" type="submit">
            send message
          </button>
        </form>
      </div>
      <Header className="footer" />
    </div>
  );
}
