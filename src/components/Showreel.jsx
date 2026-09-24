import { useEffect, useRef } from "react";
import bmwVideo from "../assets/videos/bmw-x4-exterior.mp4";
import bmwPoster from "../assets/videos/bmw-x4-exterior.jpg";
import audiVideo from "../assets/videos/audi-q7-interior.mp4";
import audiPoster from "../assets/videos/audi-q7-interior.jpg";
import rangerVideo from "../assets/videos/ford-ranger-exterior.mp4";
import rangerPoster from "../assets/videos/ford-ranger-exterior.jpg";
import corollaVideo from "../assets/videos/corolla-interior.mp4";
import corollaPoster from "../assets/videos/corolla-interior.jpg";
import porscheExteriorVideo from "../assets/videos/porsche-exterior.mp4";
import porscheExteriorPoster from "../assets/videos/porsche-exterior.jpg";
import porscheInteriorVideo from "../assets/videos/porsche-interior.mp4";
import porscheInteriorPoster from "../assets/videos/porsche-interior.jpg";

const CLIPS = [
  { car: "BMW X4", type: "Exterior", src: bmwVideo, poster: bmwPoster },
  { car: "Audi Q7", type: "Interior", src: audiVideo, poster: audiPoster },
  { car: "Ford Ranger", type: "Exterior", src: rangerVideo, poster: rangerPoster },
  { car: "Toyota Corolla", type: "Interior", src: corollaVideo, poster: corollaPoster },
  { car: "Porsche 911", type: "Exterior", src: porscheExteriorVideo, poster: porscheExteriorPoster },
  { car: "Porsche 911", type: "Interior", src: porscheInteriorVideo, poster: porscheInteriorPoster },
];

function Clip({ clip }) {
  const videoRef = useRef(null);

  // Only play while on screen, and not at all for reduced-motion users.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="showreel-card">
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${clip.car} ${clip.type.toLowerCase()} after detailing`}
      />
      <figcaption>
        <span>{clip.car}</span>
        <small>{clip.type}</small>
      </figcaption>
    </figure>
  );
}

export default function Showreel() {
  return (
    <section className="showreel" id="showreel">
      <div className="page-width">
        <div className="showreel-heading">
          <div>
            <p className="kicker">Videos</p>

            <h2>
              Straight from
              <br />
              <em>the driveway.</em>
            </h2>
          </div>

          <p className="showreel-intro">
            Short clips from recent jobs around Brisbane, taken on the
            day.
          </p>
        </div>

        <div className="showreel-grid">
          {CLIPS.map((clip) => (
            <Clip key={`${clip.car}-${clip.type}`} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
