import "./Mission.css"
import MissionImage from "../../public/assets/Mission.png"
export default function Mission({ t }) {
  return (
    <section id="mission" className="mission">
      <div className="content-wrapper mission-grid">
        {/* Text Content */}
        <div>
          <h2>{t.mission.title}</h2>
          <p>{t.mission.text}</p>
        </div>

        {/* Image (optional but recommended) */}
        <img
          src={MissionImage}
          alt="Industrial electronics service mission"
          className="mission-image"
        />
      </div>
    </section>
  )
}
