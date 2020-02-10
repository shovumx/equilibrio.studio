import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";
import Img from "gatsby-image";
import "../components/style.scss";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import { Link } from "gatsby";
import { FaWhatsapp } from "react-icons/fa";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(
        relativePath: { eq: "images/posicionamiento_web_queretaro.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageThree: file(
        relativePath: { eq: "images/agencia_marketing_digital_queretaro.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
    }
  `);
  return (
    <div>
      <Helmet>
        <title>Portafolio de proyectos | Equilibrio Studio</title>
        <meta
          name="description"
          content="Revisa nuestros proyectos más recientes, donde podrás ver a detalle qué hacemos y cómo lo podemos aplicar a tu idea de negocio."
        ></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
      <a
        href="https://api.whatsapp.com/send?phone=5214421319447&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20ustedes.%20"
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={45} className="my-float" />
      </a>
      <section className="hero is-medium is-light is-bold">
        <Navbar />
        <div className="hero-body">
          <div className="container">
            <h1 className="is-size-2 is-size-5-mobile">
              Posicionamiento web: nuestro portafolio
            </h1>
            <p className="is-size-3 is-size-5-mobile">
              En esta página podrás revisar nuestros proyectos más recientes,
              donde podrás ver a detalle qué hacemos y cómo lo podemos aplicar a
              tu idea de negocio.
            </p>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web SEO en Querétaro"
            />
          </div>
        </div>
      </section>
      <section className="section is-light is-bold">
        <div classname="container">
          <div className="columns has-text-centered">
            <div className="column">
              <div className="notification is-info">
                <h2 className="is-size-3 is-size-6-mobile">
                  Posicionamiento web (SEO)
                </h2>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/portafolio#manejo-redes-sociales"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="notification is-danger">
                <h2 className="is-size-3 is-size-6-mobile">Diseño de páginas web</h2>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/portafolio#posicionamiento-web-SEO-buscadores"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="notification is-info">
                <h2 className="is-size-3 is-size-6-mobile">
                  Manejo de redes sociales
                </h2>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/portafolio#diseño-web"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="notification is-danger">
                <h2 className="is-size-3 is-size-6-mobile">Fotografía y vídeo</h2>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/portafolio#fotografia-y-video"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section is-light is-bold"
        id="posicionamiento-web-SEO-buscadores"
      >
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Manejo de redes sociales
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un texto prueba. Este es un texto prueba. Este es un
                texto prueba. Este es un texto prueba. Este es un texto prueba.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-light is-bold" id="diseño-web">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Manejo de redes sociales
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un texto prueba. Este es un texto prueba. Este es un
                texto prueba. Este es un texto prueba. Este es un texto prueba.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      <section className="section is-light is-bold" id="manejo-redes-sociales">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Manejo de redes sociales
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un texto prueba. Este es un texto prueba. Este es un
                texto prueba. Este es un texto prueba. Este es un texto prueba.
              </p>
            </div>
          </div>
        </div>
      </section>
     <section className="section is-light is-bold" id="fotografia-y-video">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Manejo de redes sociales
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un texto prueba. Este es un texto prueba. Este es un
                texto prueba. Este es un texto prueba. Este es un texto prueba.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
