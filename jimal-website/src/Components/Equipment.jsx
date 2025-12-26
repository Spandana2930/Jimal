export default function Equipment({ t }) {
  return (
    <section id="equipment">
      <h2>{t.equipment.title}</h2>
      <div className="grid">
        {t.equipment.items.map((item, index) => (
          <div key={index} className="card">{item}</div>
        ))}
      </div>
    </section>
  );
}
