export default function Footer({ t }) {
  const contactInfo = t?.footer || {};
  
  return (
    <footer>
      <div className="content-wrapper">
        <h3>{contactInfo.contact || 'Contact Information'}</h3>
        <p><span role="img" aria-label="Location">📍</span> {contactInfo.address || '802 Francisco Ave, Mission TX 78572'} <strong>{contactInfo.country || ', USA'}</strong></p>
        <p><span role="img" aria-label="Mexico phone">📞</span> <strong>{contactInfo.mexico || 'Mexico'}:</strong> +52 (899) 282-0759</p>
        <p><span role="img" aria-label="USA phone">📞</span> <strong>{contactInfo.usa || 'USA'}:</strong> +1 (956) 432-4790</p>
        <p><span role="img" aria-label="Email">✉️</span> dega.adm@telmexmail.com</p>
      </div>
    </footer>
  )
}
