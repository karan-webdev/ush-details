import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiExternalLink,
} from "react-icons/fi";
import googleLogo from "../assets/google-logo.webp";
import roozbehAvatar from "../assets/reviewers/roozbeh.png";
import raewynAvatar from "../assets/reviewers/raewyn.png";
import hamishAvatar from "../assets/reviewers/hamish.png";
import jonathanAvatar from "../assets/reviewers/jonathan.png";
import ryanAvatar from "../assets/reviewers/ryan.png";
import achelAvatar from "../assets/reviewers/achel.png";
import emilyAvatar from "../assets/reviewers/emily.png";
import issyAvatar from "../assets/reviewers/issy.png";
import belindaAvatar from "../assets/reviewers/belinda.png";
import anthonyAvatar from "../assets/reviewers/anthony.png";

// Excerpts from real Google reviews (Sept 2026), lightly tidied for typos.
const TESTIMONIALS = [
  {
    name: "Roozbeh Behbahani",
    avatar: roozbehAvatar,
    quote:
      "If you need your car detailed, look no further than Ush. He is super professional, incredibly friendly, and takes absolute pride in his work. He just finished applying a ceramic coating to my BMW X4, and the finish looks brand new.",
  },
  {
    name: "Raewyn Eti",
    avatar: raewynAvatar,
    quote:
      "Hands down one of the best detailers we’ve ever used! Quality service all around—our cars looked as if we had just bought them off the lot. Usher was amazing to deal with: punctual, communicative, and completely transparent with his pricing.",
  },
  {
    name: "Hamish Pearce",
    avatar: hamishAvatar,
    quote:
      "Usher spent around six hours on the car and refused to leave until everything was done to the highest possible standard. He didn’t rush, didn’t cut corners, and was clearly focused on getting it as close to perfect as possible.",
  },
  {
    name: "Jonathan Grainger",
    avatar: jonathanAvatar,
    quote:
      "From start to finish, he was easy to deal with, professional, and communicated really well. He took the time to properly detail two Raptors, and the results were excellent.",
  },
  {
    name: "Ryan Cummings",
    avatar: ryanAvatar,
    quote:
      "Got the deluxe detail and Ush got me right. He came to my place, had a great attitude and did an awesome job inside and out. The car came up looking fresh.",
  },
  {
    name: "Achel Gout",
    avatar: achelAvatar,
    quote:
      "The car came back looking spotless, inside and out, with so much attention to detail. You can really tell a lot of care and pride goes into the work.",
  },
  {
    name: "Emily Russell",
    avatar: emilyAvatar,
    quote:
      "My 11 year old Mazda 2 hadn’t seen a proper detail in 11 years so it was rough! I couldn’t be happier, Usher was professional, timely and honest with what was required.",
  },
  {
    name: "Issy Ali",
    avatar: issyAvatar,
    quote:
      "He removed a stain in my car that was there for about 2 years on the roof which ran from the drivers seat to the boot. I would highly recommend his services and his prices are very reasonable too.",
  },
  {
    name: "Belinda Busmer",
    avatar: belindaAvatar,
    quote:
      "Everything looks spot on especially the interior with no dog hair at all left in my car. Highly recommend Usher’s services!",
  },
  {
    name: "Anthony O'Bryan",
    avatar: anthonyAvatar,
    quote:
      "Had Usher and his team do mine and my mum’s car, couldn’t be happier with the work. One of the best detailing services and paint correction in all of Brisbane.",
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=ush+details&rlz=1C1CHBF_enAU1094AU1094&oq=ush+details&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhge0gEIMTc5NWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x2ebc6f0706ee2b49:0xdc33a9ebe3dc8a6c,1,,,,";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const current = TESTIMONIALS[index];
  const total = TESTIMONIALS.length;

  const currentNumber = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  const next = () => {
    setIndex((currentIndex) => (currentIndex + 1) % total);
  };

  const prev = () => {
    setIndex((currentIndex) => (currentIndex - 1 + total) % total);
  };

  const goToTestimonial = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <section
      id="testimonials"
      className="testimonials section-light"
      aria-label="Customer testimonials"
    >
      <div className="page-width testimonials-inner">
        <div className="section-header testimonials-header">
          <div>
            <p className="kicker">Testimonials</p>

            <h2>
              Loved by drivers
              <br />
              who care about the details.
            </h2>
          </div>

          <a
            className="google-reviews-button"
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read our 29 Google reviews"
          >
            <span className="google-g" aria-hidden="true">
              <img src={googleLogo} alt="" />
            </span>

            <span className="google-review-copy">
              <span className="google-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} />
                ))}
              </span>

              <span>29 Google reviews</span>
            </span>

            <FiExternalLink className="google-external-icon" />
          </a>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-top">
            <div
              className="testimonial-stars"
              aria-label="5 out of 5 stars"
            >
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} />
              ))}
            </div>

            <span className="testimonial-counter" aria-live="polite">
              {currentNumber} <span>/</span> {totalNumber}
            </span>
          </div>

          <blockquote key={index}>“{current.quote}”</blockquote>

          <div className="testimonial-meta">
            <img
              className="testimonial-avatar"
              src={current.avatar}
              alt=""
              width="46"
              height="46"
            />

            <div>
              <strong>{current.name}</strong>
            </div>
          </div>

          <div className="testimonial-footer">
            <div
              className="testimonial-progress-wrap"
              aria-label={`Showing testimonial ${index + 1} of ${total}`}
            >
              <div className="testimonial-progress-dots">
                {TESTIMONIALS.map((testimonial, testimonialIndex) => (
                  <button
                    key={testimonial.name}
                    className={
                      testimonialIndex === index
                        ? "testimonial-dot is-active"
                        : "testimonial-dot"
                    }
                    onClick={() => goToTestimonial(testimonialIndex)}
                    aria-label={`Show testimonial ${testimonialIndex + 1}`}
                    aria-current={
                      testimonialIndex === index ? "true" : undefined
                    }
                  />
                ))}
              </div>
            </div>

            <div className="testimonial-controls">
              <button onClick={prev} aria-label="Previous testimonial">
                <FiChevronLeft />
              </button>

              <button
                className="testimonial-next"
                onClick={next}
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}