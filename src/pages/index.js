import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../components/style.scss";
import "../components/columns.scss";
import "../components/formulario.scss";
import Helmet from "../components/helmet";
import Header from "../components/header";
import MyForm from "../components/formulario";
import Footer from "../components/footer";
import Video from "../components/video";
import { Link } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "images/marketing_digital.png" }) {
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
      imageTwo: file(relativePath: { eq: "images/publicidad.png" }) {
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
      imageThree: file(relativePath: { eq: "images/redessociales.png" }) {
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
      imageFour: file(relativePath: { eq: "images/seo.png" }) {
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
      imageFive: file(relativePath: { eq: "images/nosotros.png" }) {
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
      imageSix: file(relativePath: { eq: "images/equilibrio-studio.png" }) {
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
      <Header />
      <div>
        <section className="section oras" id="informacion">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters">
                <h2 className="title is-2 has-text-centered has-text-weight-bold has-text-white">
                  <span className="magical">
                    La importancia del Marketing Digital
                  </span>
                </h2>
                <p className="is-size-5 has-text-white">
                  Piensa en un negocio local que consideres exitoso. Puede ser
                  una tienda, un restaurante o un taller. ¿Dónde está? Si es de
                  comida, seguramente cerca de una zona de oficina o de
                  estudiantes. Si vende productos, tal vez está en el centro,
                  donde mucha gente pasa caminando, o en alguna avenida
                  principal a la vista de miles de coches.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Piensa ahora en ese negocio de algún ser querido que no pegó.
                  ¿Qué tanta culpa tiene el no haber rentado un local a la vista
                  de todos para poder mostrar su gran producto?{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  <span className="magical">
                    ¿Te gustaría que a tu producto le pasara lo mismo?
                  </span>{" "}
                  El marketing digital, cuando está bien hecho, te permite ser
                  visible en un mundo con{" "}
                  <span className="magical">
                    millones de habitantes digitales
                  </span>{" "}
                  que están buscando productos y servicios todo el tiempo.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Querétaro es una ciudad cosmopolita. Gente nueva llega todo el
                  tiempo. Del norte, del sur, del centro. De otros países. ¿Y
                  qué hace toda esta gente cuando necesita algo en una ciudad
                  que no conoce? Recurre al internet.{" "}
                  <span className="magical">
                    Y ahí es donde debes estar tú.
                  </span>{" "}
                </p>
              </div>
              <div className="column"></div>
            </div>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
                <Img
                  fluid={data.imageOne.childImageSharp.fluid}
                  alt="Agencia de Marketing Digital en Querétaro"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters">
                <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
                  <span className="magical">Sobre nuestra Agencia</span>
                </h2>
                <p className="is-size-5 has-text-white">
                  Antes de que sigas leyendo, es importante hablar un poco de
                  nosotros. Somos una Agencia de Marketing Digital enfocada las
                  pequeñas y medianas empresas. Hasta hace no mucho, la
                  publicidad era cosa de las grandes empresas que podían pagar
                  millonarios anuncios en televisión.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Con el auge del internet, los canales de comunicación se
                  pusieron al alcance de todos. Sin embargo, no muchas agencias
                  han seguido el mismo camino y siguen enfocadas en las grandes
                  marcas.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Hace nueve años comenzamos en el marketing digital. Hemos
                  visto crecer a Twitter, el nacimiento de las páginas en
                  Facebook y el gran auge de Instagram. Hemos trabajado para
                  grandes marcas en el extranjero, 'freelanceado' para pequeños
                  clientes y descubierto muchas herramientas y trucos que nos
                  ayudan en nuestro día a día.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Equilibrio Studio nace con la firme esperanza de convertirnos
                  en aliados de esas PyMes en Querétaro que tienen un gran
                  producto o servicio qué ofrecer. Creemos que la creatividad es
                  un gran factor de igualdad en la Web, y que, con el esfuerzo
                  adecuado, se puede construir un local increíble en una gran
                  avenida con miles de ojos viéndolo.
                </p>
              </div>
              <div className="column"></div>
            </div>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
                <Img
                  fluid={data.imageFive.childImageSharp.fluid}
                  alt="Sobre nuestra Agencia de Marketing Digital"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters">
                <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
                  <span className="magical">Manejo de redes sociales</span>
                </h2>
                <p className="is-size-5 has-text-white">
                  No hay mejor metáfora para pensar las redes sociales que una
                  gran plaza comercial. Ahí convergen vendedores, un montón de
                  compradores y gente que solo va a socializar. Todos en zonas
                  distintas para comprar ropa, comer o jugar.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  ¿Dónde quieres que esté parado tu negocio? Hay un mundo
                  inmenso de redes sociales. ¿Tiene sentido que tu negocio esté
                  en todas? Probablemente no. Incluso, tal vez resulte negativo
                  intentar comerse todo el pastel. ¿Hasta dónde llegar?{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Uno de los pilares ideológicos de nuestra Agencia es el
                  marketing digital pragmático. No queremos cobrarte por cobrar.
                  ¿Tiene sentido que un negocio de plomería este en Instagram?
                  ¿Qué gana un restaurante de sushi teniendo perfil en Twitter?
                </p>
                <p className="is-size-5 has-text-white">
                  Nuestra promesa es la siguiente: manejar las redes sociales
                  que hagan sentido. Trazar una línea creativa que sirva para
                  fidelizar a tus clientes y conseguir nuevos. Que en esa gran
                  plaza comercial, tu local esté bien decorado y tu discurso de
                  ventas sea lo suficientemente atractivo como para captar la
                  atención de ese mundo de posibles compradores.
                </p>
              </div>
              <div className="column"></div>
            </div>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
                <Img
                  fluid={data.imageThree.childImageSharp.fluid}
                  alt="Manejo de Redes Sociales"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters">
                <h2 className="title is-size-3 has-text-centered has-text-weight-bold has-text-white">
                  <span className="magical">
                  <Link
                      to="/posicionamiento-web-queretaro"
                      aria-label="SEO en Querétaro"
                    >
                      Posicionamiento web en Google
                    </Link>
                    
                    </span>
                </h2>
                <p className="is-size-5 has-text-white">
                  Volvamos a la idea de los negocios que no funcionaron por
                  tener mala ubicación. Esa calle pequeña, donde no pasa gente y
                  nadie ve tu local, son las últimas páginas de Google. La calle
                  de los Arcos o el centro de Querétaro es la primera página de
                  Google.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  Tenemos un equipo de especialistas dedicado a optimizar tu
                  página web para que logres llegar a esa ansiada página uno. Si
                  tienes un producto de primer nivel, entonces tienes que estar
                  en un lugar de primer nivel para redondear el círculo.{" "}
                </p>
                <p className="is-size-5 has-text-white">
                  La mayoría de las personas buscan en Google cualquier cosa que
                  necesitan. Estar visible en esa ventana es una gran manera de
                  poder captar clientes nuevos constantemente. ¿De qué sirve
                  tener un local bien decorado y con un gran discurso de ventas
                  si está a la mitad de la nada?{" "}
                </p>
              </div>
              <div className="column"></div>
            </div>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
                <Img
                  fluid={data.imageFour.childImageSharp.fluid}
                  alt="Optimización de páginas web para posicionamiento en Google"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters">
                <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
                  <span className="magical">
                    <Link
                      to="/posicionamiento-web-queretaro"
                      aria-label="SEO en Querétaro"
                    >
                      Campañas de publicidad en redes sociales y Google
                    </Link>
                  </span>
                </h2>
                <p className="is-size-5 has-text-white">
                  La mejor publicidad, dicen, es la de boca en boca. Es la ideal
                  por muchas razones. Primero, no te cuesta nada. Segundo, quien
                  habla bien de tu negocio sin ningún interés lo hace con
                  sinceridad, entonces es muy probable que quien escuche le dé
                  el beneficio de la duda a tu producto.
                </p>
                <p className="is-size-5 has-text-white">
                  Sin embargo, es muy difícil conseguir este tipo de publicidad
                  a gran escala. Así que hay que invertir en el marketing
                  digital para ir dando a conocer tu negocio a personas que
                  podrían estar interesadas.
                </p>
                <p className="is-size-5 has-text-white">
                  En nuestra Agencia de Marketing Digital podemos llevar
                  campañas de todo tipo (Facebook, Instagram, Twitter y Google)
                  dependiendo el objetivo que tengas. Desde dar a conocer un
                  producto hasta generar ventas, en pocos meses puedes comenzar
                  a ver resultados que de otra forma tardarían mucho más tiempo.
                </p>
              </div>
              <div className="column"></div>
            </div>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
                <Video
                  videoSrcURL="https://www.youtube.com/embed/vNrxe5nJenU"
                  videoTitle="Agencia de Marketing Digital en Querétaro"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters">
                <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
                  <span className="magical">
                    Diseño gráfico y creación de contenido
                  </span>
                </h2>
                <p className="is-size-5 has-text-white">
                  En estos tiempos de tanta información y competencia, ya no es
                  suficiente con que tu empresa dé un gran servicio. Ahora es
                  necesario aportar algo extra que le agregue valor a tu marca.
                </p>
                <p className="is-size-5 has-text-white">
                  En Equilibrio Studio tenemos gente especialista en el diseño
                  gráfico y la creación de contenido visual y de texto. Podemos
                  hacer fotografías, vídeos y gráficos con tu marca; rediseñar
                  tu logo, hacer tarjetas de presentación, infografías,
                  banners...
                </p>
                <p className="is-size-5 has-text-white">
                  Si quieres tener un blog o 'newsletter', también podemos
                  generar textos interesantes y atractivos para tu audiencia
                  ideal. Mucha gente te verá como una autoridad en la materia si
                  decides compartir todo este conocimiento que durante años has
                  ido acumulando.
                </p>
              </div>
              <div className="column"></div>
            </div>

            <div className="columns">
              <div className="column"></div>
              <div className="column is-half">
                <Img
                  fluid={data.imageTwo.childImageSharp.fluid}
                  alt="Campañas de publicidad en Facebook y Google en Querétaro"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
          <div>
            <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-half">
                    <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
                      ¿Quieres más información sobre nosotros?
                    </h2>
                    <MyForm />
                  </div>
                  <div className="column is-half">
                    <Img
                      fluid={data.imageSix.childImageSharp.fluid}
                      alt="Equilibrio Studio - Agencia de Marketing Digital"
                    />
                  </div>
                  <div className="column"></div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
