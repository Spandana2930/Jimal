import { useState } from "react";
import { translations } from "./i18n/Translations";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Services from "./Components/Services";
import Equipment from "./Components/Equipment";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import Enquiries from "./Components/Enquiries";
import "./styles.css";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
     <I18nextProvider i18n={i18n}>
    <div className="app">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        
        <Hero t={t} />
        <Mission t={t} />
        <Services t={t} />
        <Equipment t={t} />
        <Clients t={t} />
        <Enquiries t={t} />
      </main>
      <Footer t={t} />
    </div>
     </I18nextProvider>
  );
}

export default App;
