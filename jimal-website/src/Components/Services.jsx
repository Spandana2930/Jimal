export default function Services({ t }) {
  return (
    <section id="services" style={{ fontSize: '16px', backgroundColor: 'lightgray' }}>
      <div className="content-wrapper" >
        <h2>{t.services.title}</h2>
        <ul>
          <ul>
          {t.services.items.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        </ul>
      </div>
    </section>
  );
}
