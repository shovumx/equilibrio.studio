import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "../components/style.scss";
import { FaWhatsapp } from "react-icons/fa";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/manejo_redes_sociales.png" }) {
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
      imageTwo: file(relativePath: { eq: "images/diseño_grafico_queretaro.png" }) {
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
      imageThree: file(relativePath: { eq: "images/diseño_apps_queretaro.png" }) {
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
      imageFour: file(relativePath: { eq: "images/diseño_banners_queretaro.png" }) {
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
      imageFive: file(relativePath: { eq: "images/branding_queretaro.png" }) {
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
          Características | Agencia de Marketing Digital en Querétaro
        </title>
        <meta
          name="description"
          content="Revisa todo nuestro trabajo de marketing digital para ver en qué podemos ayudarte. ¿Quieres formar parte de nuestro grupo?"
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
      <section className="oras">
      <Navbar />
        <div>
          <div className="columns has-text-centered">
            <div className="column"></div>
            <div className="column is-three-quarters">
              <h1 className="title is-1 has-text-white">
                Portafolio de proyectos
              </h1>
              <p className="subtitle is-5 has-text-white">
                <i>
                  Una muestra de nuestro trabajo como Agencia de Marketing
                  Digital.{" "}
                </i>
              </p>
            </div>
            <div className="column"></div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <p className="subtitle is-3 has-text-white has-text-weight-bold has-text-centered">
                &nbsp;
                <a
                  href="https://www.facebook.com/losbelgasyunsanbernardo/"
                  aria-label="Manejo de redes sociales"
                >
                  <span className="magical">Los Belgas y un San Bernardo</span>
                </a>
              </p>
            </div>
            <div className="column is-half"></div>
          </div>
          <div className="columns is-gapless has-text-centered">
            <div className="column is-one-quarter">
              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                alt="Manejo de Redes Sociales"
              />
            </div>
            <div className="column is-one-quarter">
              <Img
                fluid={data.imageTwo.childImageSharp.fluid}
                alt="Diseño de gráficos para Marketing Digital"
              />
            </div>
            <div className="column is-half">
              <h2 className="title is-5 has-text-info">
                &nbsp;&nbsp;Manejo de redes sociales
              </h2>
              <p className="subtitle is-5 has-text-white">
                &nbsp;&nbsp;&nbsp;Creación de identidad digital para negocio.
                Diseñamos un nuevo logo, hicimos un vídeo corporativo y
                delineamos un tono narrativo para tener una nueva forma de
                comunicación en redes sociales con clientes nuevos y
                establecidos. Creamos una estrategia de publicidad en Facebook
                para captar nuevos clientes con poca inversión económica y buena
                segmentación del público.
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <p className="subtitle is-3 has-text-white has-text-weight-bold has-text-centered">
                &nbsp;
                <a href="https://luppo.mx/" aria-label="Diseño de apps">
                  <span className="magical">Luppo APP</span>
                </a>
              </p>
            </div>
            <div className="column is-half"></div>
          </div>
          <div className="columns is-gapless has-text-centered">
            <div className="column is-one-quarter">
              <Img
                fluid={data.imageThree.childImageSharp.fluid}
                alt="Diseño de apps"
              />
            </div>
            <div className="column is-one-quarter">
              <Img
                fluid={data.imageFour.childImageSharp.fluid}
                alt="Diseño de banners"
              />
            </div>
            <div className="column is-half">
              <h2 className="title is-4 has-text-white">
                &nbsp;&nbsp;Diseño de aplicación móvil y posicionamiento en
                Google
              </h2>
              <p className="subtitle is-5 has-text-white">
                &nbsp;&nbsp;&nbsp;Trabajamos en el diseño de la aplicación móvil
                para que fuese más fácil acceder a todas las funciones para el
                usuario. Creamos gráficos, botones, logo y el acomodo de los
                menús. También diseñamos la página web, tanto la parte gráfica
                como la parte de contenidos para posicionar a la página en los
                primeros resultados de Google.
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <p className="subtitle is-3 has-text-white has-text-weight-bold has-text-centered">
                &nbsp;
                <a
                  href="https://vivirenqueretaro.mx"
                  aria-label="Diseño de páginas web en Querétaro"
                >
                  <span className="magical">Vivir en Querétaro</span>
                </a>
              </p>
            </div>
            <div className="column is-half"></div>
          </div>
          <div className="columns is-gapless has-text-centered">
            <div className="column is-one-quarter"></div>
            <div className="column is-one-quarter">
              <Img
                fluid={data.imageFive.childImageSharp.fluid}
                alt="Manejo de Redes Sociales"
              />
            </div>
            <div className="column is-half">
              <h2 className="title is-4 has-text-white">
                &nbsp;&nbsp;Creación de estrategia de comunicación
              </h2>
              <p className="subtitle is-5 has-text-white">
                &nbsp;&nbsp;&nbsp;El cliente se nos acercó con una idea y nos
                contrató para poder realizar toda la estraetegia de comunicación
                en torno a ella. Necesitaba publicidad, diseño de página web,
                diseño gráfico y creación de redes sociales. También nos pidió
                realizar un blog para diferenciarse de su competencia en un
                segmento tan complicado y, por supuesto, posicionamiento SEO en
                Google.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
