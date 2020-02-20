import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";
import Img from "gatsby-image";
import "../components/style.scss";
import Helmet from "react-helmet";
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
      imageFour: file(relativePath: { eq: "images/battersea.png" }) {
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
      imageFive: file(relativePath: { eq: "images/luppo.png" }) {
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
      image6: file(relativePath: { eq: "images/viejaimagen.jpg" }) {
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
      image7: file(relativePath: { eq: "images/nuevaimagen.jpg" }) {
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
      image8: file(relativePath: { eq: "images/baños_antiguo.jpg" }) {
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
      image9: file(relativePath: { eq: "images/baños_nuevo.jpg" }) {
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
      image10: file(relativePath: { eq: "images/equilibriostudio.png" }) {
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
      image11: file(relativePath: { eq: "images/vivirenqueretaro.png" }) {
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
      image12: file(relativePath: { eq: "images/CUERNIS.jpg" }) {
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
          Portafolio de posicionamiento web en Querétaro | Equilibrio Studio
        </title>
        <meta
          name="description"
          content="Revisa nuestros proyectos más recientes, donde podrás ver a detalle qué hacemos y cómo lo podemos aplicar a tu idea de negocio."
        ></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta property="og:title" content="Nuestro portafolio de proyectos" />
        <meta
          property="og:description"
          content="¡Conoce un poco más de lo que hacemos en Equilibrio Studio!"
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
      <Navbar />
      <section className="hero is-medium is-light is-bold">
        
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
                  Llevar una web a la primera página de resultados de Google
                  puede significar un cambio importante en la forma en la que
                  consiguen nuevos clientes.
                </p>
                <Link
                  to="/portafolio#posicionamiento-web-SEO-buscadores"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="notification is-danger">
                <h2 className="is-size-3 is-size-6-mobile">
                  Diseño de páginas web
                </h2>
                <p className="is-size-4 is-size-6-mobile">
                  Una buena página no solo sirve para conquistar a posibles
                  clientes, sino también para ganarse el corazón de Google y que
                  te dé prioridad en su buscador.
                </p>
                <Link
                  to="/portafolio#diseño-web"
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
                  La relevancia de un negocio se gana día a día. Tener tus redes
                  sociales actualizadas puede ser el factor determinante sobre
                  tu competencia.
                </p>
                <Link
                  to="/portafolio#manejo-redes-sociales"
                  className="button is-danger is-inverted is-rounded ola-3"
                >
                  LEER MÁS
                </Link>
              </div>
              <div className="notification is-danger">
                <h2 className="is-size-3 is-size-6-mobile">
                  Fotografía y vídeo
                </h2>
                <p className="is-size-4 is-size-6-mobile">
                  El amor también entra por los ojos. ¿De qué sirve tener un
                  gran producto si a la hora de promocionarlo no puedes plasmar
                  su calidad y llamar la atención?
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
          <div className="columns has-text-centered">
            <div className="column"></div>
            <div className="column is-4">
              <Img
                fluid={data.imageThree.childImageSharp.fluid}
                alt="Posicionamiento Web SEO en Querétaro"
              />
            </div>
            <div className="column"></div>
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
              <h2 className="is-size-3 is-size-6-mobile has-text-centered">
                Posicionamiento de páginas web en Google
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                Cuando comienzas un nuevo emprendimiento, lo más común es que te
                olvides -o retrases- la planeación del marketing. Hay tanto por
                hacer y pensar en la elaboración de tu producto, que ves muy
                distante el momento en el que hay que comenzar a promocionarlo.
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Pero entonces pasas todos los obstáculos y llega ese momento.
                ¿Cómo hacer para que la gente conozca ese proyecto en el que
                tanto he trabajado?
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Para&nbsp;
                <a
                  href="https://luppo.mx"
                  aria-label="APP para el control de accesos en condominios"
                >
                  LUPPO
                </a>
                ,&nbsp;
                <a
                  href="https://battersea.mx"
                  aria-label="Sistemas de seguridad para empresas en Querétaro"
                >
                  BATTERSEA
                </a>
                &nbsp;y&nbsp;
                <a
                  href="https://calentadores-solares.mx"
                  aria-label="Calentadores solares en Querétaro"
                >
                  CALENTADORES SOLARES 
                </a>
                &nbsp;se hizo un trabajo para identificar las palabras claves de
                cada negocio y poderlos llevar a la primera página de Google.
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Parte de la estrategia consistió rediseñar la página web para
                que tuviera una identidad más moderna y al mismo tiempo fuese
                mucho más ligera y rápida a la hora de cargar.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Img
                fluid={data.imageFour.childImageSharp.fluid}
                alt="SEO en Querétaro"
              />
            </div>
            <div className="column">
              <Img
                fluid={data.imageFive.childImageSharp.fluid}
                alt="Posicionamiento Web Querétaro"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section is-light is-bold" id="diseño-web">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">Diseño web</h2>
              <p className="is-size-4 is-size-6-mobile">
                Nuestra filosofía respecto al diseño web está en el equilibrio
                entre lo funcional y lo estético. ¿De qué sirve tener una página
                muy bonita si va a resultar lenta o inaccesible para Google?
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Por eso, cada trabajo que realizamos está pensando para sacar lo
                más estético de lo más efectivo. Conjuntamos la modernidad con
                el buen diseño gráfico y los vídeos con párrafos claros y bien
                escritos.
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Para &nbsp;
                <a
                  href="https://vivirenqueretaro.mx"
                  aria-label="Agencia Inmobliaria en Querétaro"
                >
                  Vivir en Querétaro
                </a>
                &nbsp; y                 <a
                  href="https://autohemoterapia.mx"
                  aria-label="Autohemoterapia en México"
                >
                  AUTOHEMOTERAPIA 
                </a>
                &nbsp;hicimos un diseño clásico para una Agencia Inmobiliaria
                basada en Inteligencia Artificial. El objetivo era que, a pesar
                de que es una empresa bastante tecnológico, no se quería dar a
                entender que era un producto solo para aficionados a la
                tecnología.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Img
                fluid={data.image10.childImageSharp.fluid}
                alt="SEO en Querétaro"
              />
            </div>
            <div className="column">
              <Img
                fluid={data.image11.childImageSharp.fluid}
                alt="Posicionamiento Web Querétaro"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-light is-bold" id="manejo-redes-sociales">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile has-text-centered">
                Manejo de redes sociales
              </h2>
              <p className="is-size-4 is-size-6-mobile">
                En un mercado tan saturado como es el de los perros,&nbsp;
                <a
                  href="https://www.facebook.com/losbelgasyunsanbernardo/"
                  aria-label="Paseo de perros en Querétaro"
                >
                  Los Belgas y Un San Bernardo
                </a>
                &nbsp;nos buscaron para renovar su imagen en redes sociales y
                poder destacar frente a toda la competencia que existe.
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Cambiamos su logo y le dimos identidad narrativa y visual para
                transmitir el mensaje de que son una empresa seria que daría
                todo por la felicidad de tu perro.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Img
                fluid={data.image6.childImageSharp.fluid}
                alt="SEO en Querétaro"
              />
            </div>
            <div className="column">
              <Img
                fluid={data.image7.childImageSharp.fluid}
                alt="Posicionamiento Web Querétaro"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Img
                fluid={data.image8.childImageSharp.fluid}
                alt="Equilibrio Studio"
              />
            </div>
            <div className="column">
              <Img
                fluid={data.image9.childImageSharp.fluid}
                alt="Equilibrio Studio"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section is-light is-bold" id="fotografia-y-video">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-3 is-size-6-mobile">Fotografía y vídeo</h2>
              <p className="is-size-4 is-size-6-mobile">
                Tenemos bastante clara la importancia de la fotografía y el
                vídeo. No hay un buen producto sin una buena presentación.
              </p>
              <p className="is-size-4 is-size-6-mobile">
                Para lograrlo, tenemos un equipo especializado en fotografía de
                producto, vídeo, &nbsp;
                <a
                  href="https://www.facebook.com/losbelgasyunsanbernardo/videos/419908442057485/"
                  aria-label="Paseo de perros en Querétaro"
                >
                  drones
                </a> y animación. De esta manera, tenemos
                todos los elementos para llamar la atención de tu público
                objetivo.
              </p>
              
            </div>
          </div>
          <div className="columns">
            <div className="column video-wrapper">
            <Video
                  videoSrcURL="https://www.youtube.com/embed/bqRP6iROpOk"
                  videoTitle="Posicionamiento web SEO en Querétaro"
                />
            </div>
            <div className="column">
            <Img
                fluid={data.image12.childImageSharp.fluid}
                alt="Equilibrio Studio"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
