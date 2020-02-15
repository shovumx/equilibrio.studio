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
        relativePath: { eq: "images/seo_diseño_importancia.jpg" }
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
        relativePath: { eq: "images/posicionamiento_web_ux.jpg" }
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
      imageThree: file(relativePath: { eq: "images/seo_para_todos.jpg" }) {
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
          SEO y UX: la importancia del diseño en el posicionamiento web |
          Equilibrio Studio
        </title>
        <meta
          name="description"
          content="¿Piensas que el diseño es solamente algo subjetivo? También es importante para tu optimización en buscadores"
        ></meta>
        <meta name="robots" content="index,follow"></meta>

        <meta property="og:title" content="SEO y UX: la importancia del diseño en el posicionamiento web" />
        <meta
          property="og:description"
          content="¿Piensas que el diseño es solamente algo subjetivo? También es importante para tu optimización en buscadores"
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
              ¿Por qué es importante un buen diseño para el posicionamiento web?
            </h1>
            <p className="is-size-4 is-size-5-mobile">
              Un buena interfaz de diseño no solo sirve para decorar y volver atractiva tu página web. Planear bien la parte gráfica de tu proyecto es fundamental para que Google te tome en cuenta para el SEO. 
            </p>
          </div>
        </div>
      </section>
      <section className="oras">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <p className="is-size-4 is-size-5-mobile">
              La pregunta es bastante válida. ¿Por qué Google tendría que tomar
              en cuenta el diseño de tu página para darle un mejor lugar en su
              lista de resultados? ¿No es el diseño, después de todo, algo
              subjetivo y de apreciación? ¿Por qué, entonces, tomarlo en cuenta
              para el SEO?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Mucha gente suele hacerse estas -y más- preguntas cuando se
              enteran que el diseño es un factor que Google toma para el
              posicionamiento web.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Evidentemente, a Google no le importa qué colores uses para
              diseñar tu página por mero gusto, sino porque colores que sean muy
              parecidos pueden hacer que la experiencia sea la mejor. Imagina un
              fondo gris claro y letra blanca. ¿Es fácil leer un texto largo
              así?{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Ese es un factor directamente relacionado con el diseño. Sin
              embargo, hay otros factores que también están relacionados con el
              diseño de manera indirecta.{" "}
            </p>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="SEO y diseño"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              El porcentaje de rebote
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              ¿Cuánta gente entra a tu página web y sale de inmediato? Google
              entiende esto como que en tu página no estaba lo que buscaba el
              lector y, por tanto, que falló en mostrarles tu página cuando
              ellos usaron su buscador.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Muchas veces este rechazo a tu página no es por la información
              sino, adivinaste, por un mal diseño. Si tu página está mal hecha o
              tarda en cargar, la gente simplemente va a picar el botón para
              retroceder y buscar otra página donde la información esté mejor
              presentada.{" "}
            </p>
            <h2 className="is-size-2 is-size-5-mobile">
              Las páginas visitadas
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Si tu web es una tienda y tiene 100 productos, pero la gente solo
              entra y ve la portada de tu página, Google entiende también esto
              como falta de interés.{" "}
            </p>
            <Img
              fluid={data.imageTwo.childImageSharp.fluid}
              alt="Posicionamiento Web y UX"
            />
            <p className="is-size-4 is-size-5-mobile">
              Si tu web es sobre recetas y la gente no se interesa en seguir
              viendo, Google va a preferir darle un lugar alto en sus resultados
              a una página que sí genera interés en ver y ver más páginas.
            </p>
            <h2 className="is-size-2 is-size-5-mobile">
              El tiempo que pasan en tu página
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Pero, ¿qué pasa con las web que tienen una sola página? Pensemos
              en un artículo de la Wikipedia. Generalmente entras y lees un solo
              artículo. Pero tal vez tardas cinco minutos haciéndolo.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Google toma esto como un signo importante de relevancia. Si la
              gente pasa mucho tiempo en tu página, es porque tienes contenido e
              interesante. Si, en cambio, cuando alguien entra y sale a los diez
              segundos, es porque tus textos son aburridos o no tienen lo que
              estaba buscando.{" "}
            </p>
            <Img
              fluid={data.imageThree.childImageSharp.fluid}
              alt="Importancia del diseño para el posicionamiento web"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              Mejores experiencias para todos
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Uno de los grandes objetivos de Google es que todo el mundo pueda
              disfrutar del internet. Y por todos se refiere a todos, incluidas
              personas que no pueden ver u oir.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              ¿Te imaginas una plaza comercial sin rampas para sillas de ruedas?
              Pues lo mismo pasa en el mundo digital. Si tu página no tiene el
              contraste entre fondo y letras que hablábamos anteriormente, a
              personas con problemas visuales les va a resultar muy difícil,
              entonces Google prefiere darle prioridad a páginas que sí se
              tomaron la molestia de pensar en ellos.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Hay programas que leen páginas web. Pero, ¿qué pasa si todo el
              texto de tu página está en vídeos o animaciones y no en texto como
              tal? Pues que la gente que no puede ver y que recurre a estos
              programas simplemente no va a poder consumir nada. Entonces{" "}
              <a
                href="https://www.google.com/accessibility/"
                aria-label="Accesibilidad en Google"
              >
                Google
              </a>{" "}
              también lo toma en cuenta para el posicionamiento web.{" "}
            </p>
          </div>
          <div className="column"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
