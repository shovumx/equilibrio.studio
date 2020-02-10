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
        relativePath: { eq: "images/agencia_seo_queretaro.png" }
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
      imageTwo: file(
        relativePath: { eq: "images/seo_en_queretaro.png" }
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
      imageFour: file(
        relativePath: { eq: "images/agenciaI_posicionamiento_web_en_queretaro.png" }
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
        <title>
          Blog sobre emprendimiento en Querétaro | Equilibrio Studio
        </title>
        <meta
          name="description"
          content="¿Estás comenzando tu negocio? Te presentamos una serie de consejos y trucos para que el proceso sea más fácil y exitoso."
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
              Posicionamiento web (SEO) en Querétaro
            </h1>
            <p className="is-size-3 is-size-5-mobile">
              En esta página podrás encontrar consejos de emprendimiento
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div classname="container">
          <div className="columns has-text-centered">
            <div className="column"></div>
            <div className="column is-three-quarters">
              <h3 className="is-size-2 is-size-5-mobile">Índice:</h3>
            </div>
            <div className="column"></div>
          </div>
          <div className="columns has-text-centered">
            <div className="column">
              <div className="notification is-info">
                <FaWhatsapp size={45} />
                <p className="is-size-3 is-size-6-mobile">
                  Este es un título prueba
                </p>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/#informacion"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="notification is-danger">
                <FaWhatsapp size={45} />
                <p className="is-size-3 is-size-6-mobile">
                  Este es un título prueba
                </p>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/#informacion"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="notification is-info">
                <FaWhatsapp size={45} />
                <p className="is-size-3 is-size-6-mobile">
                  Este es un título prueba
                </p>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/#informacion"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="notification is-danger">
                <FaWhatsapp size={45} />
                <p className="is-size-3 is-size-6-mobile">
                  Este es un título prueba
                </p>
                <p className="is-size-4 is-size-6-mobile">
                  Este es un texto prueba. Este es un texto prueba. Este es un
                  texto prueba. Este es un texto prueba. Este es un texto
                  prueba.
                </p>
                <Link
                  to="/#informacion"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="seo-que-es">
        <div className="container">
          <div className="columns">
            
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Este es un subtítulo prueba
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un párrafo prueba. Este es un párrafo prueba. Este es un
                párrafo prueba. Este es un párrafo prueba. Este es un párrafo
                prueba. Este es un párrafo prueba. Este es un párrafo prueba.
                Este es un párrafo prueba. Este es un párrafo prueba.{" "}
              </p>
            </div>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web en Querétaro"
            />
          </div>
        </div>
      </section>
      <section className="section" id="seo-que-es">
        <div className="container">
          <div className="columns">
            
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Este es un subtítulo prueba
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un párrafo prueba. Este es un párrafo prueba. Este es un
                párrafo prueba. Este es un párrafo prueba. Este es un párrafo
                prueba. Este es un párrafo prueba. Este es un párrafo prueba.
                Este es un párrafo prueba. Este es un párrafo prueba.{" "}
              </p>
            </div>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web en Querétaro"
            />
          </div>
        </div>
      </section>
      <section className="section" id="seo-que-es">
        <div className="container">
          <div className="columns">
            
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Este es un subtítulo prueba
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un párrafo prueba. Este es un párrafo prueba. Este es un
                párrafo prueba. Este es un párrafo prueba. Este es un párrafo
                prueba. Este es un párrafo prueba. Este es un párrafo prueba.
                Este es un párrafo prueba. Este es un párrafo prueba.{" "}
              </p>
            </div>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web en Querétaro"
            />
          </div>
        </div>
      </section>
      <section className="section" id="seo-que-es">
        <div className="container">
          <div className="columns">
            
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">
                Este es un subtítulo prueba
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Este es un párrafo prueba. Este es un párrafo prueba. Este es un
                párrafo prueba. Este es un párrafo prueba. Este es un párrafo
                prueba. Este es un párrafo prueba. Este es un párrafo prueba.
                Este es un párrafo prueba. Este es un párrafo prueba.{" "}
              </p>
            </div>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web en Querétaro"
            />
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  );
};
