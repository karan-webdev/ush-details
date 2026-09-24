import deluxeImage from "../assets/service-deluxe.jpg";
import paintImage from "../assets/service-paint.jpg";
import ceramicImage from "../assets/service-ceramic.jpg";

const services = [
  [
    "01",
    "Deluxe detail",
    "Complete interior and exterior reset with wash, decontamination, vacuum, dress and finish.",
    deluxeImage,
  ],
  [
    "02",
    "Paint enhancement",
    "Machine polish to soften swirls and light scratches, bringing depth and clarity back to your paint.",
    paintImage,
  ],
  [
    "03",
    "Ceramic coating",
    "Long-lasting protection with a slick, glassy finish. Choose from Basic, Mid, or Premium tier.",
    ceramicImage,
  ],
];

export default function Services() {
  return (
    <section className="services section-dark" id="services">
      <div className="page-width">
        <div className="section-heading">
          <p className="kicker light">What we do</p>
          <h2>
            Detailing,
            <br />
            <em>done properly.</em>
          </h2>
        </div>

        <div className="service-list">
          {services.map(([number, title, desc, image]) => (
            <article className="service-item" key={title}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="service-image-frame">
                <img src={image} alt="" className="service-image" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
