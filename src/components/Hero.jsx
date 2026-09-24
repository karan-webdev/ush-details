import { FiCalendar, FiArrowRight } from "react-icons/fi";
import ryanAvatar from "../assets/reviewers/ryan.png";
import issyAvatar from "../assets/reviewers/issy.png";
import jonathanAvatar from "../assets/reviewers/jonathan.png";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot" />
          <span>Available Today</span>
        </div>

        <h1>
          Premium care
          <br />
          at your door.
        </h1>

        <p className="hero-subtitle">
          Professional mobile detailing
          <br />
          that fits your life.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-cta">
            <span className="cta-calendar">
              <FiCalendar />
            </span>

            <span style={{ color: "#ffffff" }}>Book Mobile Service</span>

            <FiArrowRight className="cta-arrow" />
          </a>

          <a href="#testimonials" className="hero-proof">
            <div className="avatar-stack">
              <img
                src={ryanAvatar}
                alt=""
              />
              <img
                src={issyAvatar}
                alt=""
              />
              <img
                src={jonathanAvatar}
                alt=""
              />
            </div>

            <div className="proof-rating">
              <span className="star">★</span>
              <strong>4.8</strong>
              <span className="reviews">29 reviews</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}