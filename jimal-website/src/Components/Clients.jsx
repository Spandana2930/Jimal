import "./Clients.css";

export default function Clients({ lang }) {
  const clients = [
    "Caterpillar",
    "Emerson",
    "Nidec Motor Group",
    "Black & Decker",
    "Pentair / Hoffman",
    "Ametek",
    "Technimark",
  ];

  return (
    <section id="clients" className="clients">
      <div className="clients-container fade-up">

        <h2>
          {lang === "es"
            ? "Algunos de Nuestros Clientes"
            : "Some of Our Clients"}
        </h2>

        <p className="clients-subtitle">
          {lang === "es"
            ? "Empresas líderes que confían en nuestros servicios de reparación y soporte industrial."
            : "Leading companies that trust our industrial repair and technical support services."}
        </p>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <span className="check">✓</span>
              {client}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
