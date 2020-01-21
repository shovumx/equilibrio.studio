import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../components/style.scss";
import "../components/columns.scss";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageFour: file(
        relativePath: { eq: "images/hemovacuna.png" }
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
        <title>¡Muchas gracias! | Equilibrio Studio</title>
        <meta
          name="description"
          content="Gracias por ponerte en contacto con nosotros. ¡No dudes en hacerlo las veces que sea necesario!"
        ></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
      
      <section className="hero is-fullheight is-light">
      <Navbar />
        <div className="hero-body">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column"></div>
              <div className="column is-6">
                <p className="subtitle is-3 is-size-5-mobile has-text-white has-text-weight-bold is-uppercase">
                  ¡Muchas gracias por ponerte en contacto con nosotros! <br />
                  Muy pronto te responderemos.
                </p>
              </div>

              <div className="column"></div>
            </div>
            <div className="columns has-text-centered">
              <div className="column"></div>
              <div className="column is-3">
                <a
                  href="/"
                  className="button is-danger is-outlined is-rounded is-inverted"
                >
                  Regresa al inicio
                </a>
              </div>
              <div className="column is-3">
                <a
                  href="https://equilibrio.studio/#informacion"
                  className="button is-outlined is-rounded is-inverted"
                >
                  Más info. 
                </a>
              </div>
              <div className="column"></div>
            </div>
            <div className="columns">
              <div className="column">
                <p></p>
              </div>
              <div className="column is-3">
                <Img
                  fluid={data.imageFour.childImageSharp.fluid}
                  alt="Cámaras de seguridad para empresas en Querétaro"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
        <div className="hero-foot"></div>
      </section>

      <Footer />
    </div>
  );
};