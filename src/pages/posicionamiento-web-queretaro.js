import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import "../components/style.scss";
import "../components/columns.scss";
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
      imageTwo: file(relativePath: { eq: "images/seo_en_queretaro.png" }) {
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
    }
  `);
  return (
    <div>
      <Helmet>
        <title>Posicionamiento web SEO en Querétaro | Equilibrio Studio</title>
        <meta
          name="description"
          content="En nuestra Agencia somos especialistas en posicionar tu página mediante SEO o SEM. ¡No dudes en contactarnos para maximizar tus ganancias!"
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
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <h1 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
              Posicionamiento web: SEO y SEM
            </h1>
            <p className="is-size-4 has-text-white">
              <i>¿Cuál es la diferencia entre el SEO y el SEM? No tener clara la
              respuesta a esa pregunta sobre posicionamiento web en Google puede
              perjudicar las ventas de tu negocio. En nuestra Agencia de
              Marketing Digital podemos ayudarte a implementar una estrategia
              para potenciar tus ventas por internet.</i>
            </p>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <p className="is-size-5 has-text-white">
              Todos los días, millones y millones de personas entran a Google a
              buscar cosas. Todos los días, miles y miles de empresas y negocios
              buscan la forma de captar todo ese volumen de búsquedas para poder
              generar ganancias.
            </p>
            <p className="is-size-5 has-text-white">
              Hay una estadística demoledora: el 93% de la gente que utiliza
              Google jamás llega a la segunda página del resultado de búsquedas.
              Así que da igual si apareces en la página 20 o en la segunda, si
              no llegas a la primera página de Google, tu negocio está en las
              sombras.{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Entonces, ¿cómo hacerle para que tu página web llegue a la primera
              página de los resultados de Google?
            </p>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web en Querétaro"
            />
            <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
              ¿Qué es el posicionamiento SEO y SEM?
            </h2>
            <p className="is-size-5 has-text-white">
              Para lograr llegar a posicionar tu página web en la primera página
              de Google, hay dos caminos que puedes seguir para cumplir tu meta.{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Uno, el más largo, es que Google reconozca la calidad de tu página
              web y crea conveniente que los usuarios de su servicio te lean de
              inmediato y te ponga en los primeros lugares de sus búsquedas.
            </p>
            <p className="is-size-5 has-text-white">
              El otro, un camino más corto, es utilizar la plataforma de
              publicidad de Google para aparecer en sus lugares reservados de la
              parte alta de su página web. Las dos estrategias tienen sus
              ventajas y desventajas, dependiendo de cuál sea tu objetivo.{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Pero, lo más importante... ¿Cuál es el más conveniente para tu
              empresa?
            </p>
            <Img
              fluid={data.imageTwo.childImageSharp.fluid}
              alt="Posicionamiento SEO en Querétaro"
            />
            <h3 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
              Posicionamiento SEO: qué es y para qué sirve
            </h3>
            <p className="is-size-5 has-text-white">
              Es muy fácil intuir que la mejor estrategia es posicionar de
              manera orgánica{" "}
              <a
                href="https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores"
                aria-label="Posicionamiento SEO en buscadores"
              >
                <span className="magical">(Posicionamiento SEO)</span>
              </a>{" "}
              tu página web en la primera página de Google.{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Es gratis, no tienes que estar pensando anuncios y naturalmente
              muchas personas van a hacer cotizaciones en tu negocio si el resto
              de tu página web es confiable y es lo que ellos buscan.
            </p>
            <p className="is-size-5 has-text-white">
              Desafortunadamente, por estas ventajas, hay una gran competencia
              para llegar a esa primera posición en Google utilizando el famoso
              Search Engine Optimization (SEO).{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Después de todo, ¿a quién no le gustaría tener tanta visibilidad
              sin pagar un solo peso?
            </p>
            <p className="is-size-5 has-text-white">
              La forma en la que Google clasifica sus primeros resultados no es
              conocida. Es, de hecho, un secreto que mu pocos empleados conocen.
            </p>
            <p className="is-size-5 has-text-white">
              Google no publica una lista detallada de requisitos para que los
              desarrolladores de páginas web sigan al pie de la letra para
              llegar a ese ansiado primer lugar.{" "}
            </p>
            <p className="is-size-5 has-text-white">
              A pesar de todo esto, su algortimo es estudiado a prueba y error
              por todos los que nos dedicamos a esto. Se examina, se utilizan
              programas que pueden llegar más a fondo para entender los primeros
              lugares{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Con buen contenido, un diseño web bien hecho y demostrándole a
              Google que eres una autoridad en la materia, con el paso del
              tiempo tu posicionamiento web ocupará un buen lugar en la primera
              página de búsquedas de Google.
            </p>
            <h3 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
              Posicionamiento SEM: significado y ventajas
            </h3>
            <p className="is-size-5 has-text-white">
              El posicionamiento SEM (pagar anuncios en los buscadores) es ideal
              para las empresas que venden un servicio o producto que es
              urgente. Si tienes una fuga en tu casa y no conoces a ningún
              plomero, lo más probable es que contrates al primero que te salga
              en Google ante la urgencia de detener el agua.
            </p>
            <p className="is-size-5 has-text-white">
              Construir una buena reputación en línea es algo que lleva tiempo,
              trabajo y esfuerzo. Para muchas empresas no es posible dedicarle
              tantas horas o esperar tanto a que página web se posicione de
              forma natural y, además, quede por abajo de todos esos anuncios
              que van a captar la atención del que busca con urgencia.
            </p>
            <p className="is-size-5 has-text-white">
              De tal forma que la prioridad es ser el primero de los primeros y
              tener anuncios atractivos que enganchen a un posible cliente que
              busca con urgencia tus servicios y que no está dispuesto a
              realizar un comparativo profundo entre diferentes opciones.
            </p>
            <Img
              fluid={data.imageThree.childImageSharp.fluid}
              alt="Agencia de posicionamiento web SEO en Querétaro"
            />
            <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
              ¿Cómo hacer para que mi web aparezca en primero en Google?
            </h2>
            <p className="is-size-5 has-text-white">
              Como hemos visto, existen dos formas de aparecer en los primeros
              resultados de Google. Dependiendo de tu tipo de producto es la
              estrategia a seguir para maximizar tus ventas.
            </p>
            <p className="is-size-5 has-text-white">
              En Equilibrio Studio somos una <span className="magical"><a href="https://equilibrio.studio" aria-label="Posicionamiento Web en Querétaro">Agencia de Marketing Digital</a></span> especializada en el posicionamiento web, ya sea de manera orgánica (SEO) o pagada.{" "}
            </p>
            <p className="is-size-5 has-text-white">
              Si buscas entrar en la conversación digital, nosotros estamos ahí para ti desde el <span className="magical"><a href="https://equilibrio.studio" aria-label="Posicionamiento SEO en Querétaro">diseño web</a></span>, hasta la creación de contenido para que tu empresa resalte entre la competencia con elementos que hagan tu marca distinta e innovadora.{" "}
            </p>
          </div>
          <div className="column"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
