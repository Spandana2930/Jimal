export default function Navbar({ t, lang, setLang }) {
  return (
    <nav className="navbar">
      <h1>JIMAL Industrial Electronics</h1>
      <div className="nav-links">
        <a href="#services">{t.nav.services}</a>
        <a href="#mission">{t.nav.mission}</a>
        <a href="#equipment">{t.nav.equipment}</a>
        <a href="#clients">{t.nav.clients}</a>
      </div>
      <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
        {lang === "en" ? "ES" : "EN"}
      </button>
    </nav>
  );
}
