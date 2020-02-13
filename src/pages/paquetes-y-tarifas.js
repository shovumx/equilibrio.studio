import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";
import Img from "gatsby-image";
import "../components/style.scss";
import Helmet from "react-helmet";
import Footer from "../components/footer";
import { FaWhatsapp } from "react-icons/fa";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(
        relativePath: { eq: "images/posicionamiento_seo_queretaro.png" }
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
          Tarifas y precios sobre posicionamiento web en Querétaro | Equilibrio
          Studio
        </title>
        <meta
          name="description"
          content="¿Estás comenzando tu negocio? Te presentamos una serie de consejos y trucos para que el proceso sea más fácil y exitoso."
        ></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta property="og:title" content="Precios sobre posicionamiento web" />
        <meta
          property="og:description"
          content="¿Estás comenzando tu negocio? Te presentamos una serie de consejos y trucos para que el proceso sea más fácil y exitoso."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpzoehc6i/image/upload/v1581629540/RedesES_iwery3.jpg"
        />
        <meta
          property="og:url"
          content="https://equilibrio.studio/portafolio"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <a
        href="https://api.whatsapp.com/send?phone=5214421319447&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20SEO.%20"
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={45} className="my-float" />
      </a>
      <section className="hero is-light is-bold">
        <Navbar />
        <div className="hero-body">
          <div className="container">
            <h1 className="is-size-2 is-size-5-mobile">Tarifas y precios</h1>
            <h2 className="is-size-3 is-size-5-mobile">
              ¿Cuánto cuesta posicionar mi página web en Google?
            </h2>
          </div>
        </div>
      </section>
      <section className="section is-light is-bold">
        <div classname="container">
          <div className="columns has-text-centered">
            <div className="column"></div>
            <div className="column is-three-quarters">
              <h2 className="is-size-2 is-size-5-mobile">Nuestros paquetes:</h2>
            </div>
            <div className="column"></div>
          </div>

          <div className="columns has-text-centered">
            <div className="column b1">
              <h3 className="is-size-2 is-size-5-mobile is-uppercase">
                Básico
              </h3>
              <div className="content">
                <li className="is-size-5 is-size-6-mobile">
                  Diseño de página web ultra-rápida
                </li>
                <li className="is-size-5 is-size-6-mobile">
                  Adaptación de contenido orientado a SEO
                </li>
                <li className="is-size-5 is-size-6-mobile">
                  Revisión de enlaces, optimización de imágenes, correción de texto
                </li>
              </div>
              <p className="is-size-5 is-size-6-mobile has-text-weight-bold">
                $3,500 + dominio (pago único)
              </p>
            </div>
            <div className="column b2">
              <h3 className="is-size-2 is-size-5-mobile is-uppercase">
                Premium
              </h3>
              <div className="content">
                <li className="is-size-5 is-size-6-mobile">Paquete básico</li>
                <li className="is-size-5 is-size-6-mobile">
                  Manejo de una red social
                </li>
                <li className="is-size-5 is-size-6-mobile">
                  Dos artículos de contenido escrito por mes
                </li>
              </div>
              <p className="is-size-5 is-size-6-mobile has-text-weight-bold">
                $3,500 mensuales
              </p>
            </div>
            <div className="column b3 has-text-white">
              <h3 className="is-size-2 is-size-5-mobile is-uppercase has-text-white">
                Total
              </h3>
              <div className="content">
                <li className="is-size-5 is-size-6-mobile">Paquete básico</li>
                <li className="is-size-5 is-size-6-mobile">
                  Manejo de dos redes sociales
                </li>
                <li className="is-size-5 is-size-6-mobile">
                  Creación de contenido escrito y gráfico para blog y redes
                  sociales
                </li>
              </div>
              <p className="is-size-5 is-size-6-mobile has-text-weight-bold has-text-white">
                $5,000 mensuales
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column"></div>
            <div className="column is-3">
              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                alt="Posicionamiento Web SEO en Querétaro"
              />
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
