import { useEffect, useState } from "react";
import Icon from "./Icon";

const LOGO_SRC = "/logo.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const links = ["Services", "Work", "Testimonials"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-nav scrolled" : "site-nav"}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          <img src={LOGO_SRC} alt="Ush Details" />
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
          <a className="nav-book" href="#contact">
            Book a detail <Icon.Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
