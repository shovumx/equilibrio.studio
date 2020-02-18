import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";
import Img from "gatsby-image";
import "../components/style.scss";
import Helmet from "../components/helmet";
import Footer from "../components/footer";
import { Link } from "gatsby";
import Video from "../components/video";
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
      <Helmet />
      <a
        href="https://api.whatsapp.com/send?phone=5214421319447&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20SEO.%20"
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={45} className="my-float" />
      </a>
      <Navbar />
      <section className="hero is-fullheight-with-navbar atlas-1" id="info">
      
        <div className="hero-body">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column">
                <Img
                  fluid={data.imageThree.childImageSharp.fluid}
                  alt="Posicionamiento Web SEO en Querétaro"
                />
                <h1 className="subtitle is-uppercase is-size-6-mobile">
                  Posicionamiento Web en Querétaro
                </h1>
                <p className="is-size-4 is-size-5-mobile morado ola-2">
                  <span className="grueso">Tú</span> te encargas de hacer un
                  gran producto... <span className="grueso">Nosotros</span> de
                  que lo conozcan las personas indicadas.
                </p>
              </div>
              <div className="column is-hidden-mobile"></div>
            </div>
            <div className="columns has-text-centered">
              <div className="column is-3 has-text-weight-bold is-centered">
                <Link to="/contacto" className="button is-warning is-rounded">
                  CONTACTO
                </Link>
              </div>
              <div className="column is-3 has-text-weight-bold is-centered">
                <Link
                  to="/#informacion"
                  className="button is-warning is-rounded"
                >
                  LEER MÁS
                </Link>
              </div>
            </div>
          </div>
          <div className="container"></div>
        </div>
      </section>

      <section className="hero is-fullheight atlas-2" id="informacion">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column has-text-centered">
                <h2 className="is-size-2 is-size-5-mobile">
                  Posicionamiento web (SEO) a tu alcance
                </h2>
                <p className="is-size-4 is-size-5-mobile">
                  ¿Sabías que la mayoría de los emprendimientos fracasan porque
                  no tienen visibilidad? <Link to="/">Equlibrio.Studio</Link> es
                  una Agencia de posicionamiento web enfocada en las pequeñas y
                  medianas empresas de Querétaro. De esta manera,
                  <span className="grueso">
                    no tienes que invertir grandes cantidades de dinero
                  </span>{" "}
                  para que tu producto llegue a tus potenciales compradores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-fullheight atlas-3 ola" id="personalidad">
        <div className="hero-head lorita">
          <div className="container">
            <div className="columns ola">
              <div className="column has-text-centered">
                <h2 className="is-size-2 is-size-5-mobile">
                  Dale personalidad a tu negocio
                </h2>
                <p className="is-size-4 is-size-5-mobile">
                  En un mundo tan competitivo, no basta con tener un buen
                  producto. Nosotros somos especialistas en que tu marca resalte
                  frente a la competencia con la creación de contenido visual y
                  escrito que le aporte un valor extra.
                </p>
                <p className="is-size-4 is-size-5-mobile">
                  Nuestro objetivo es desarrollar un estilo de comunicación para
                  tu empresa que sea consistente para todos los canales. Así te
                  van a poder reconocer por el estilo de fotografías o los
                  gráficos informativos.
                </p>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero is-fullheight atlas-4 ola"
        id="nuestros-servicios"
      >
        <div className="hero-head lorita">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters has-text-centered ola">
                <h2 className="is-size-2 is-size-5-mobile">
                  Posicionamiento web (SEO)
                </h2>
                <p className="is-size-4 is-size-5-mobile">
                  Tener tu página en la primera página de Google es uno de los
                  impulsos más grandes que puede tener tu negocio. En nuestra
                  Agencia de Marketing Digital somos conscientes de eso, así que
                  tenemos un equipo de gente especializada en el posicionamiento
                  web en Google para que estés a la vista de muchas personas que
                  están buscando lo que tú les puedes ofrecer.
                </p>
                <Link
                  to="/posicionamiento-web-queretaro"
                  className="button is-warning is-rounded"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="column is-hidden-mobile"></div>
            </div>
            <div className="columns">
              <div className="column is-hidden-mobile"></div>
              <div className="is-4 has-text-weight-bold is-centered ola-3">

              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero is-fullheight atlas-5"
        id="posicionamiento-web-SEO"
      >
        <div className="hero-head lorita">
          <div className="container">
            <div className="columns">
              <div className="column is-hidden-mobile"></div>
              <div className="column has-text-centered ola">
                <h2 className="is-size-2 is-size-5-mobile">
                  ¿Qué otros servicios tenemos?{" "}
                </h2>
                <p className="is-size-4 is-size-5-mobile">
                  También somos especialistas en manejo de redes sociales
                  (actualmente sumamos más de 90 millones de seguidores entre
                  todas las cuentas que manejamos), fotografía, animaciones y
                  vídeo de producto.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-hidden-mobile"></div>
              <div className="column is-hidden-mobile"></div>
              <div className="column is-hidden-mobile"></div>
              <div className="is-4 has-text-weight-bold is-centered ola-3">
                <Link to="/portafolio" className="button is-warning is-rounded">
                  LEER MÁS
                </Link>
              </div>
              <div className="column is-hidden-mobile"></div>
            </div>
            <div className="columns">
              <div className="column"></div>
              <div className="column video-wrapper">
                <Video
                  videoSrcURL="https://www.youtube.com/embed/bqRP6iROpOk"
                  videoTitle="Posicionamiento web SEO en Querétaro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-fullheight atlas-6" id="otros-servicios">
        <div className="hero-body">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column ola">
                <h2 className="is-size-2 is-size-5-mobile">
                  Paquetes y precios
                </h2>
                <p className="is-size-4 is-size-5-mobile">
                  Tenemos un gran equipo creativo que puede hacer contenido de
                  alta calidad para que tu marca se distinga de la competencia.
                  Contamos con diferentes paquetes a la medida de tu negocio
                </p>
                <div className="is-4 has-text-weight-bold is-centered ola-3">
                  <Link
                    to="/paquetes-y-tarifas"
                    className="button is-warning is-rounded"
                  >
                    LEER MÁS
                  </Link>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
