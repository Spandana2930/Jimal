import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../public/assets/logo.png'; // Make sure this path is correct
import "./Navbar.css";

export default function Navbar({ t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="content-wrapper nav-content">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img 
                src={logo} 
                alt="JIMAL Industrial Electronics" 
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide the image if it fails to load
                  e.target.nextSibling.style.display = 'flex'; // Show the text fallback
                }}
              />
               </a>
              <div className="logo-text">
                <span className="logo-main">JIMAL</span>
                <span className="logo-sub">Industrial Electronics</span>
              </div>
           
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <a href="#services">{t.nav.services}</a>
            <a href="#mission">{t.nav.mission}</a>
            <a href="#equipment">{t.nav.equipment}</a>
            <a href="#clients">{t.nav.clients}</a>
            <button
              className="lang-btn"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`hamburger ${isMobile ? 'mobile-visible' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu - only visible when menuOpen is true on mobile */}
        {isMobile && menuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={() => setMenuOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#mission" onClick={() => setMenuOpen(false)}>
              {t.nav.mission}
            </a>
            <a href="#equipment" onClick={() => setMenuOpen(false)}>
              {t.nav.equipment}
            </a>
            <a href="#clients" onClick={() => setMenuOpen(false)}>
              {t.nav.clients}
            </a>
            <button
              className="lang-btn mobile-lang"
              onClick={() => {
                setLang(lang === "en" ? "es" : "en");
                setMenuOpen(false);
              }}
              aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        )}
      </nav>
      <div className="top-contact-bar">
        <div className="content-wrapper">
          <span className="contact-phone">
            <span role="img" aria-label="Mexico phone">📞</span> MX: (899) 282-0759 | 
            <span role="img" aria-label="USA phone"> 📞</span> USA: (956) 432-4790
          </span>
        </div>
      </div>
    </>
  );
}