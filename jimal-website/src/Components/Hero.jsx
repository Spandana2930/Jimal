export default function Hero({ t }) {
  return (
    <section className="hero">
      <h2>{t.hero.title}</h2>
      <p>{t.hero.subtitle}</p>
    </section>
  );
}
