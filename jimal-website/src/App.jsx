import { useState } from "react";
import { translations } from "./i18n/Translations";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Services from "./Components/Services";
import Equipment from "./Components/Equipment";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
 import "./styles.css"

function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <>
    <Navbar t={t} lang={lang} setLang={setLang} />
    <Hero t={t} />
    <Mission t={t} />
     <Services t={t} />
      <Equipment t={t} />
      <Clients t={t} />
      <Footer t={t} /> 
   
      {/* <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Mission t={t} />
      <Services t={t} />
      <Equipment t={t} />
      <Clients t={t} />
      <Footer t={t} /> */}
    </>
  );
}

export default App;
