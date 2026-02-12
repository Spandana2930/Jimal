import "./Mission.css"
import MissionImage from "../../public/Images/Mission.png"
import { useEffect, useRef, useState } from "react";
import { FaIndustry, FaTools, FaCogs, FaUsers } from "react-icons/fa";

// 👉 change image paths as needed
import siemens from "../../public/assets/logos/siemens.png";
import honeywell from "../../public/assets/logos/Honeywell.png";
import mitsubishi from "../../public/assets/logos/mitsubishi.png";
import allen from "../../public/assets/logos/allen.png";

export default function Mission({ t, lang }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const stats = [
    { icon: <FaIndustry />, value: 15, label: t.mission.counters.experience },
    { icon: <FaTools />, value: 1200, label: t.mission.counters.repaired },
    { icon: <FaCogs />, value: 25, label: t.mission.counters.brands },
    { icon: <FaUsers />, value: 500, label: t.mission.counters.clients }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // counter animation
  useEffect(() => {
    if (!visible) return;

    const timers = stats.map((item, index) =>
      setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[index] < item.value) {
            updated[index] += Math.ceil(item.value / 40);
          }
          return updated;
        });
      }, 30)
    );

    return () => timers.forEach(clearInterval);
  }, [visible]);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className={`missionServices ${lang === "es" ? "spanish" : ""}`}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="mission-overlay" />

      <div className="mission-container">
        {/* LEFT CONTENT */}
        <article className="mission-content">
          <h2 itemProp="slogan">{t.mission.title}</h2>
          <p itemProp="description">{t.mission.description}</p>

          <div className="mission-counters">
            {stats.map((s, i) => (
              <div className="counter" key={i}>
                <div className="icon">{s.icon}</div>
                <span>{counts[i]}+</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </article>

        {/* RIGHT VISUAL */}
        <aside className="mission-visual">
          {/* <img
            src={MissionImage}
            alt="Industrial electronic equipment repair and automation"
            className="mission-main-img"
            loading="lazy"
          /> */}

          <div className="brand-grid">
            <img src={siemens} alt="Siemens" />
            <img src={honeywell} alt="Honeywell" />
            <img src={mitsubishi} alt="Mitsubishi" />
            <img src={allen} alt="Allen Bradley" />
          </div>
        </aside>
      </div>
    </section>
  );
}
