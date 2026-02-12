import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactus from "../../public/Images/Contactus.jpg";
import "./Enquiries.css";

export default function Contact({ lang }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hl3zuwi",
        "template_6mapcaz",
        formRef.current,
        "muUcIuGUkdJIf0LDG",
      )
      .then(() => {
        alert(
          lang === "es"
            ? "Mensaje enviado correctamente"
            : "Message sent successfully",
        );
        formRef.current.reset();
        console.log(new FormData(formRef.current));
      })
      .catch(() => {
        alert(
          lang === "es" ? "Error al enviar mensaje" : "Failed to send message",
        );
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-form fade-left">
          <h2>{lang === "es" ? "Contáctanos" : "Contact Us"}</h2>

          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder={lang === "es" ? "Nombre" : "Name"}
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder={lang === "es" ? "Mensaje" : "Message"}
              required
            />
            <button type="submit">
              {lang === "es" ? "Enviar Mensaje" : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact-image fade-right">
          <img src={contactus} alt="Contact JIMAL Industrial Electronics" />
        </div>
      </div>
    </section>
  );
}
