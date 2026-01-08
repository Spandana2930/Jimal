import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bg1 from "../../public/bg1.jpg";
import bg2 from "../../public/bg2.jpg";
import bg3 from "../../public/bg3.png";
import "./Hero.css";

export default function Hero({ t }) {
  const images = [bg1, bg2, bg3];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
    id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImage]})`,
      }}
    >
      <button className="nav-arrow left-arrow" onClick={prevImage} aria-label="Previous image">
        <FaArrowLeft />
      </button>
      
      <div className="hero-content">
        <h1 className="hero-title">
          {t.hero.slogan || "REPARACION Y VENTA DE EQUIPO ELECTRONICO INDUSTRIAL"}
        </h1>
        <h2 className="hero-subtitle">{t.hero.title}</h2>
        <p className="subtitle">{t.hero.subtitle}</p>
      </div>

      <button className="nav-arrow right-arrow" onClick={nextImage} aria-label="Next image">
        <FaArrowRight />
      </button>
    </section>
  );
}