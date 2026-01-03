import backgroundImage from "../../public/assets/background.jpg"
import "./Hero.css"
export default function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{t.hero.slogan || 'REPARACION Y VENTA DE EQUIPO ELECTRONICO INDUSTRIAL'}</h1>
        <h2>{t.hero.title}</h2>
        <p className="subtitle">{t.hero.subtitle}</p>
      </div>
    </section>
  );
}