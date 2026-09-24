import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import rearBefore from "../assets/work/porsche-rear-before.jpg";
import rearAfter from "../assets/work/porsche-rear-after.jpg";
import lidBefore from "../assets/work/porsche-engine-lid-before.jpg";
import lidAfter from "../assets/work/porsche-engine-lid-after.jpg";
import interiorBefore from "../assets/work/porsche-interior-before.jpg";
import interiorAfter from "../assets/work/porsche-interior-after.jpg";

const PROJECTS = [
  {
    title: "Paint Refresh",
    tag: "Porsche 911 Carrera",
    before: rearBefore,
    after: rearAfter,
  },
  {
    title: "Dust to Gloss",
    tag: "Porsche 911 Carrera",
    before: lidBefore,
    after: lidAfter,
  },
  {
    title: "Interior Reset",
    tag: "Porsche 911 Carrera",
    before: interiorBefore,
    after: interiorAfter,
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);

  const project = PROJECTS[active];

  const updatePosition = (clientX) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  const handlePointerDown = (e) => {
    // On touch screens only the handle starts a drag, so tapping or
    // scrolling over the photo doesn't move the slider.
    if (e.pointerType !== "mouse" && !e.target.closest(".comparison-handle")) {
      return;
    }

    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      updatePosition(e.clientX);
    }
  };

  const selectProject = (index) => {
    setActive(index);
    setPosition(50);
  };

  return (
    <section className="work" id="work">
      <div className="page-width">
        <div className="work-heading">
          <div>
            <p className="kicker">Our work</p>

            <h2>
              Drag the line.
              <br />
              <em>See the difference.</em>
            </h2>
          </div>

          <p className="work-intro">
            Real transformations from around Brisbane. Slide the handle to
            compare the difference.
          </p>
        </div>

        <div
          className="comparison"
          ref={sliderRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          {/* AFTER */}
          <img
            draggable={false}
            className="comparison-image after-image"
            src={project.after}
            alt={`${project.title} after detailing`}
          />

          {/* BEFORE */}
          <div
            className="before-image-wrapper"
            style={{ width: `${position}%` }}
          >
            <img
              draggable={false}
              className="comparison-image before-image"
              src={project.before}
              alt={`${project.title} before detailing`}
            />
          </div>

          <div className="comparison-label before-label">Before</div>
          <div className="comparison-label after-label">After</div>

          {/* Slider */}
          <div
            className="comparison-line"
            style={{ left: `${position}%` }}
          >
            <div className="comparison-handle">
              <FiChevronLeft />
              <FiChevronRight />
            </div>
          </div>

          {/* Project information */}
          <div className="comparison-info">
            <span>{project.title}</span>
            <small>{project.tag}</small>
          </div>
        </div>

        <div className="project-thumbnails">
          {PROJECTS.map((item, index) => (
            <button
              key={item.title}
              className={`project-thumbnail ${
                index === active ? "active" : ""
              }`}
              onClick={() => selectProject(index)}
            >
              <img draggable={false} src={item.after} alt="" />

              <div className="thumbnail-overlay" />

              <div className="thumbnail-content">
                <span>{item.title}</span>
                <small>{item.tag}</small>
              </div>

              {index === active && <span className="thumbnail-dot" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}