import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Showreel from "./components/Showreel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function UshDetailsLanding() {
  return (
    <div className="ud-root" onDragStart={(e) => e.preventDefault()}>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Showreel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
