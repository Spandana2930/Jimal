export default function Services({ t }) {
  return (
    <section id="services">
      <h2>{t.services.title}</h2>
      <ul>
        {t.services.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
