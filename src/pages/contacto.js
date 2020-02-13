import React from "react";
import "../components/style.scss";
import { navigate } from "gatsby-link";
import "../components/style.scss";
import "../components/columns.scss";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaWhatsapp } from "react-icons/fa";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <div>
      <Helmet>
        <title>Contacto | Equilibrio Studio</title>
        <meta
          name="description"
          content="¿Tienes alguna duda sobre nuestros servicios de Marketing Digital? No dudes en contactarnos y con gusto te resolveremos todas tus inquietudes."
        ></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta property="og:title" content="Contacto | Equilibrio Studio" />
        <meta
          property="og:description"
          content="¿Tienes alguna duda sobre nuestros servicios de Marketing Digital? No dudes en contactarnos y con gusto te resolveremos todas tus inquietudes."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpzoehc6i/image/upload/v1581629540/RedesES_iwery3.jpg"
        />
        <meta
          property="og:url"
          content="https://equilibrio.studio/contacto"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <a
        href="https://api.whatsapp.com/send?phone=5214421319447&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20ustedes.%20"
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={45} className="my-float" />
      </a>
      <Navbar />
      <section className="hero is-fullheight atlas-7">
        
        <div className="hero-body">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column"></div>
              <div className="column is-6">
                <p className="subtitle is-3 is-size-5-mobile">
                  ¿Cotizaciones, citas, comentarios? <br />
                  ¡No dudes en ponerte en contacto con nosotros!
                </p>
                <form
                  name="contact"
                  method="post"
                  action="/gracias/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Tu nombre:
                      <br />
                      <input
                        type="text"
                        name="name"
                        className="input"
                        onChange={handleChange}
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Tu email:
                      <br />
                      <input
                        type="email"
                        name="email"
                        className="input"
                        onChange={handleChange}
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Tu mensaje:
                      <br />
                      <textarea
                        name="message"
                        className="textarea"
                        onChange={handleChange}
                      />
                    </label>
                  </p>
                  <p>
                    <button
                      type="submit"
                      className="button is-warning"
                    >
                      Enviar
                    </button>
                  </p>
                </form>
              </div>

              
            </div>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>

      <Footer />
    </div>
  );
}