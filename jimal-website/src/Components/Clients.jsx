export default function Clients({ t }) {
  const clients = [
    "Caterpillar", "Emerson", "Nidec Motor Group", "Black & Decker",
    "Pentair / Hoffman", "Ametek", "Technimark"
  ];

  return (
    <section id="clients">
      <h2>{t.clients.title}</h2>
      <ul className="clients">
        {clients.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </section>
  );
}
