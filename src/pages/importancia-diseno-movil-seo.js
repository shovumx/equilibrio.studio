import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "gatsby";
import Video from "../components/video";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "../components/style.scss";
import "../components/columns.scss";
import { FaWhatsapp } from "react-icons/fa";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/diseno_movil_seo.jpg" }) {
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
        relativePath: { eq: "images/diseno_posicionamiento_web.jpg" }
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
      imageThree: file(relativePath: { eq: "images/mobile_first_seo.jpg" }) {
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
          La importancia del diseño móvil en el SEO | Equilibrio Studio
        </title>
        <meta
          name="description"
          content="¿Sabías que la mayoría de las personas navegan en internet desde su teléfono móvil? No tener un diseño adaptado puede afectar tu SEO."
        ></meta>
        <meta name="robots" content="index,follow"></meta>

        <meta
          property="og:title"
          content="La importancia del diseño móvil en el SEO"
        />
        <meta
          property="og:description"
          content="¿Sabías que la mayoría de las personas navegan en internet desde su teléfono móvil? No tener un diseño adaptado puede afectar tu SEO."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpzoehc6i/image/upload/v1581629540/RedesES_iwery3.jpg"
        />
        <meta
          property="og:url"
          content="https://equilibrio.studio/importancia-diseno-movil-seo"
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
              La importancia del diseño móvil en el SEO
            </h1>
            <p className="is-size-4 is-size-5-mobile">
              ¿Sabías que la mayoría de las personas navegan en internet desde
              su teléfono móvil? No tener un diseño adaptado, así como brindar
              una experiencia completa, puede afectar tu posicionamiento web en
              la lista de resultados de Google.
            </p>
          </div>
        </div>
      </section>
      <section className="oras">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <p className="is-size-4 is-size-5-mobile">
              Uno de los grandes problemas del diseño web contemporáneo tiene
              que ver con los teléfonos móviles.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Hasta hace no mucho, la mayoría de la gente navegaba por internet
              usando su computadora personal. Por lo tanto, todo el diseño web
              estaba pensado para verse bien en un monitor donde el ancho era
              más largo que la altura.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Sin embargo, con la popularización del teléfono móvil, la forma en
              la que la gente consume contenidos cambió profundamente y, por
              tanto, también la forma en la que se despliegan los contenidos (la
              pantalla de un celular tiene mucho más grande la altura que el
              ancho).
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Y Google entendió esto. Y Google le dio prioridad en el
              posicionamiento web a las páginas que se ven en el teléfono móvil
              porque ahí es donde casi todos consumen contenidos.
            </p>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="SEO y diseño móvil"
            />
            <h2 className="is-size-2 is-size-5-mobile">Todo comenzó en 2017</h2>
            <p className="is-size-4 is-size-5-mobile">
              En 2017 Google anunció que{" "}
              <a
                href="https://webmasters.googleblog.com/2018/03/rolling-out-mobile-first-indexing.html"
                aria-label="Accesibilidad en Google"
              >
                empezaría a darle mucha prioridad
              </a>{" "}
              a cómo se ve una página web en un móvil y cómo es la experiencia
              desde el móvil.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              No importa cómo se vea el escritorio, si la página no está
              adaptada para verse en cualquier dispositivo móvil (teléfono
              celular, tableta, etc), entonces va a ser castigada.
            </p>

            <p className="is-size-4 is-size-5-mobile">
              Pero fue hasta 2019 donde Google determinó que toda página web
              nueva debería cumplir con el 'mobile-first' si quería aspirar a
              posicionarse bien en sus resultados de búsquedas algún día.
            </p>
            <Img
              fluid={data.imageTwo.childImageSharp.fluid}
              alt="Posicionamiento Web y mobile-first"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              El objetivo: la misma experiencia
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Uno de los grandes problemas que puede surgir de todo esto tiene
              que ver con la forma en las que se adaptan las viejas páginas de
              internet. .
            </p>

            <p className="is-size-4 is-size-5-mobile">
              Pensemos en que alguien tiene una página web diseñada para
              escritorio que está bien posicionada en Google. Además, el dueño
              es una persona que tiene cierta cultura de estudio sobre SEO.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Se entera que Google va a tomar estas medidas de 'mobile-first' y
              francamente no encuentra una manera de adaptar rápidamente una
              página en la que ha publicado tal vez 1,000 artículos.
            </p>
            <Img
              fluid={data.imageThree.childImageSharp.fluid}
              alt="Importancia del diseño web móvil para el posicionamiento web"
            />
            <p className="is-size-4 is-size-5-mobile">
              Entonces, para salvarse de la penalización de Google, decide hacer
              dos tipos de página web: una, la de escritorio, tiene toda esa
              gran infraestructura que ha construido en muchos años. La otra,
              una versión móvil, solo tiene una página informativa que pide
              visitar la versión en escritorio para una experiencia más
              completa.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Mal. Tache. Google entiende esto como un engaño porque el objetivo
              es que la gente que solo consume contenidos mediante su teléfono
              pueda tener exactamente la misma experiencia que en la
              computadora.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              ¿Por qué? Porque hay muchos países en vías de desarrollo donde la
              mayoría de la gente no puede comprar una computadora y sí un
              smartphone accesible. Entonces esa gente debe tener la experiencia
              completa. Y, por lo tanto, si quieres posicionar tu página web,
              toda esta gente debe de ponerle palomita a tu sitio web.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              En <Link to="/">Equilibrio.Studio</Link> somos especialistas en
              diseño web y posicionamiento web, así que podemos ayudarte a
              llevar tu proceso de adaptación a las nuevas tendencias y que no
              pierdas clientes por no estar preparado.
            </p>
            <div className="video-wrapper">
              <Video
                videoSrcURL="https://www.youtube.com/embed/CF4q0EBOuIA"
                videoTitle="Importancia de la UX en el SEO"
              />
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
