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
      imageFour: file(
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
        <title>Posicionamiento web en Querétaro | Equilibrio Studio</title>
        <meta
          name="description"
          content="En nuestra Agencia somos especialistas en posicionar tu página mediante SEO o SEM. ¡No dudes en contactarnos para maximizar tus ganancias!"
        ></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta property="og:title" content="Posicionamiento SEO en Querétaro" />
        <meta
          property="og:description"
          content="En nuestra Agencia somos especialistas en posicionar tu página mediante SEO o SEM. ¡No dudes en contactarnos para maximizar tus ganancias!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpzoehc6i/image/upload/v1581629540/RedesES_iwery3.jpg"
        />
        <meta
          property="og:url"
          content="https://equilibrio.studio/posicionamiento-web-queretaro"
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
              Posicionamiento web: SEO y SEM
            </h1>
            <p className="is-size-4 is-size-5-mobile">
              ¿Cuál es la diferencia entre el SEO y el SEM? No tener clara la
              respuesta a esa pregunta sobre posicionamiento web en Google puede
              perjudicar las ventas de tu negocio. En nuestra Agencia de
              Posicionamiento Web podemos ayudarte a implementar una estrategia
              para potenciar tus ventas por internet.
            </p>
          </div>
        </div>
      </section>
      <section className="oras">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <p className="is-size-4 is-size-5-mobile">
              Todos los días, millones y millones de personas entran a Google a
              buscar cosas. Todos los días, miles y miles de empresas y negocios
              buscan la forma de captar todo ese volumen de búsquedas para poder
              generar ganancias.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              ¿Tu negocio aprovecha esto? ¿Tu página web es visible para todo
              este mercado que se mueve en Google?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Hay una estadística demoledora: el 93% de la gente que utiliza
              Google jamás llega a la segunda página del resultado de búsquedas.
              Así que da igual si apareces en la página 20 o en la segunda, si
              no posicionas tu página en la primera página de Google, tu negocio
              y tus ganancias están en las sombras.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Muchos negocios no lo saben (o no lo quieren saber por aferrarse a
              prácticas de marketing más tradicionales), pero el posicionamiento
              web es o debería ser una de las mejores fuentes de ingresos para
              sus negocios.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Entonces, ¿cómo hacerle para que tu página web llegue a la primera
              página de los resultados de Google? ¿Cómo posicionar tu web en el
              mejor lugar de Google?
            </p>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Posicionamiento Web en Querétaro"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              ¿Qué es el posicionamiento SEO y SEM?
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Para lograr llegar a posicionar tu página web en la primera página
              de Google, hay dos caminos que puedes seguir para cumplir tu meta.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Uno, el más largo, es que Google reconozca la calidad de tu página
              web y crea conveniente que los usuarios de su servicio te lean de
              inmediato y te ponga en los primeros lugares de resultados de sus
              búsquedas.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              El otro, un camino más corto, es utilizar la plataforma de
              publicidad de Google para aparecer en sus lugares reservados de la
              parte alta de su página web. Las dos estrategias tienen sus
              ventajas y desventajas, dependiendo de cuál sea tu objetivo.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Pero, lo más importante... ¿Cuál es el más conveniente para tu
              empresa?
            </p>
            <Img
              fluid={data.imageTwo.childImageSharp.fluid}
              alt="Posicionamiento SEO en Querétaro"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              Posicionamiento SEO: qué es y para qué sirve
            </h2>
            <p className="is-size-4 is-size-5-mobile">
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
            <p className="is-size-4 is-size-5-mobile">
              Es gratis, no tienes que estar pensando anuncios y naturalmente
              muchas personas van a hacer cotizaciones en tu negocio si el resto
              de tu página web es confiable y es lo que ellos buscan.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Desafortunadamente, por estas ventajas, hay una gran competencia
              para llegar a esa primera posición en Google utilizando el famoso
              Search Engine Optimization (SEO).{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Después de todo, ¿a quién no le gustaría tener tanta visibilidad
              sin pagar un solo peso?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              La forma en la que Google clasifica sus primeros resultados no es
              conocida. Es, de hecho, un secreto que mu pocos empleados conocen.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Google no publica una lista detallada de requisitos para que los
              desarrolladores de páginas web sigan al pie de la letra para
              llegar a ese ansiado primer lugar.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              A pesar de todo esto, su algortimo es estudiado a prueba y error
              por todos los que nos dedicamos a esto. Se examina, se utilizan
              programas que pueden llegar más a fondo para entender los primeros
              lugares{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Con buen contenido, un diseño web bien hecho y demostrándole a
              Google que eres una autoridad en la materia, con el paso del
              tiempo tu posicionamiento web ocupará un buen lugar en la primera
              página de búsquedas de Google.
            </p>
            <h2 className="is-size-2 is-size-5-mobile">
              Posicionamiento SEM: significado y ventajas
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              El posicionamiento SEM (pagar anuncios en los buscadores) es ideal
              para las empresas que venden un servicio o producto que es
              urgente. Si tienes una fuga en tu casa y no conoces a ningún
              plomero, lo más probable es que contrates al primero que te salga
              en Google ante la urgencia de detener el agua.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Construir una buena reputación en línea es algo que lleva tiempo,
              trabajo y esfuerzo. Para muchas empresas no es posible dedicarle
              tantas horas o esperar tanto a que página web se posicione de
              forma natural y, además, quede por abajo de todos esos anuncios
              que van a captar la atención del que busca con urgencia.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              De tal forma que la prioridad es ser el primero de los primeros y
              tener anuncios atractivos que enganchen a un posible cliente que
              busca con urgencia tus servicios y que no está dispuesto a
              realizar un comparativo profundo entre diferentes opciones.
            </p>
            <Img
              fluid={data.imageThree.childImageSharp.fluid}
              alt="Agencia de posicionamiento web SEO en Querétaro"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              ¿Cómo hacer para que mi web aparezca en primero en Google?
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Como hemos visto, existen dos formas de aparecer en los primeros
              resultados de Google. Dependiendo de tu tipo de producto es la
              estrategia a seguir para maximizar tus ventas.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              En Equilibrio Studio somos una{" "}
              <span className="magical">
                <a
                  href="https://equilibrio.studio"
                  aria-label="Posicionamiento Web en Querétaro"
                >
                  Agencia de Posicionamiento Web
                </a>
              </span>{" "}
              especializada en el posicionamiento web, ya sea de manera orgánica
              (SEO) o pagada.{" "}
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Si buscas entrar en la conversación digital, nosotros estamos ahí
              para ti desde el{" "}
              <span className="magical">
                <a
                  href="https://equilibrio.studio"
                  aria-label="Posicionamiento SEO en Querétaro"
                >
                  diseño web
                </a>
              </span>
              , hasta la creación de contenido para que tu empresa resalte entre
              la competencia con elementos que hagan tu marca distinta e
              innovadora.{" "}
            </p>
            <h2 className="is-size-2 is-size-5-mobile">
              Pero, ¿cómo funciona el posicionamiento web?
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              El SEO no siempre ha sido lo mismo. El posicionamiento web ha ido
              cambiando a lo largo de los más de 20 años de historia de Google.
              Lo que todo comenzó como una tesis doctoral, años después se
              convirtió en una de las empresas más valiosas y poderosas del
              mundo.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              En la actualidad, el SEO está fundamentado en tres aspectos que
              son bastante intuitivos: la confianza, la autoridad y el ser un
              experto en la materia.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Piensa en cómo contratas a alguien para que te dé un servicio. Si
              viene recomendado por alguien, te da confianza. Si, encima, es
              alguien que sabe mucho, pues todavía mejor. Y si es reconocido por
              la comuidad (y por tanto tiene autoridad), ¿qué más necesitas para
              contratarlo?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Sin embargo, si esto lo analizas así, es muy fácil de entenderlo.
              La cosa se vuelve infinitamente más complicada cuando se tratan de
              millones y millones de páginas que hay en internet. ¿Cómo diseñar
              un algoritmo que pueda posicionar las páginas web de acuerdo a
              este principio?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Para darte un poco de contexto, Google procesa 4,500,000 de
              búsquedas por minuto al día. Cuatro millones y medio. Y en cada
              una de esas búsquedas, Google tiene que decidir, en fracciones de
              segundo, cómo va a ordenar todas las páginas de internet que tiene
              indexadas.
            </p>
            <Img
              fluid={data.imageFour.childImageSharp.fluid}
              alt="SEO en Querétaro"
            />
            <h2 className="is-size-2 is-size-5-mobile">
              SEO: autoridad, confianza y conocimiento
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Para lograr este gran orden, Google navega constantemente todas
              las páginas web para utilizar inteligencia artificial y entender
              de qué trata el sitio web. Sería imposible o muy costoso tener 4
              millones de personas respondiendo todas las peticiones que se
              hacen por minuto, así que tiene que hacerse todo de manera
              automatizada.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Pero, ¿qué pasa cuando dos páginas tratan sobre lo mismo? ¿Cómo
              darle un lugar más alto en la página de resultados? Aquí es donde
              entra la autoridad, la confianza y el conocimiento.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Estos tres factores es un reconocimiento interno que Google le da
              a la gente que sabe sobre determinada materia. ¿Quién sabe más de
              medicina? ¿Un médico que ha escrito miles de artículos o alguien
              que simplemente se puso a investigar de forma amateur y publicó un
              texto más informal?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Volvamos al ejemplo del mundo físico. Si una persona te recomienda
              a otra, le das tu voto de confianza. Si 10 personas te lo
              recomiendan, es casi un hecho que le vas a dar el beneficio de la
              duda. En internet funciona igual, pero con los enlaces. Cada que
              alguien enlaza a tu página, es una recomendación digital como lo
              harías en el mundo físico.
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Y si eso lo conjugas con varios años escribiendo sobre tu area de
              conocimiento, ¡pues qué mejor! Google sabe que eres activo. Y, si
              eres activo, es porque en cierta medida eres una persona exitosa.
              En el mundo físico, ¿qué local puede estar varios años abierto si
              no es porque genera ingresos? Y si genera ingresos es precisamente
              porque es una persona que sabe hacer bien su trabajo.
            </p>
            <h2 className="is-size-2 is-size-5-mobile">
              Lo visual también es importante para el SEO
            </h2>
            <p className="is-size-4 is-size-5-mobile">
              Pero no todo en la vida es el conocimiento. Para posicionar tu
              página web en Google también tienes que ser presentable. Tu página
              web debe estar limpia, ser accesible y estar bien hecha. Una vez
              más, Google sigue siendo bastante intuitivo. ¿A quién le darían
              ganas de entrar a un local sucio o donde tardan mucho en atender?
            </p>
            <p className="is-size-4 is-size-5-mobile">
              Por eso, es muy importante prestar atención a los factores
              técnicos que están detrás de una página. Que las imágenes estén
              optimizadas y carguen rápido. Que las animaciones (si es que tiene
              animaciones) no vuelvan muy lenta la página. Que la página sea
              funcional en el teléfono móvil y que los colores no la vuelvan
              difícil de leer.
            </p>
            <h2 className="is-size-2 is-size-5-mobile">Nuestra promesa</h2>
            <p className="is-size-4 is-size-5-mobile">
              Nuestra promesa como Agencia de posicionamiento web en Querétaro
              es darle a tu negocio todo esto que necesita. Generar contenido
              útil para los demás y darle a tu empresa ese factor de
              diferenciación por encima de tu competencia. Remodelar tu página
              para que cumpla con todos estos requisitos. Y, sobre todo, nunca
              perder de vista que el objetivo de todo esto es que más gente
              pueda conocer tu negocio.
            </p>
          </div>
          <div className="column"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
