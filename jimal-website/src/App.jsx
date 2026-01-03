import { useState } from "react";
import { translations } from "./i18n/Translations";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Services from "./Components/Services";
import Equipment from "./Components/Equipment";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import "./styles.css";
function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="app">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Mission t={t} />
        <Services t={t} />
        <Equipment t={t} />
        <Clients t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
