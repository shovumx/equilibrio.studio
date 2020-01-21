import React from "react";
import { FaFacebook } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import "./style.scss";
import "./columns.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            facebook
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center">
        <div className="content has-text-centered">
          <div className="columns is-mobile is-marginless heading has-text-weight-bold">
            <div className="column left">
              <Link to="/" className="navbar-item">
                Inicio
              </Link>
            </div>
            <div className="column center">
              <p>
                <Link to="/portafolio" className="navbar-item">
                  Portafolio
                </Link>
              </p>
            </div>
            <div className="column right">
              <Link to="/contacto" className="navbar-item">
                Contacto
              </Link>
            </div>
          </div>
          <p className="is-size-7">
            Agencia de Marketing Digital en Querétaro | Equilibrio Studio. Todos
            los derechos reservados. Desde 2019.
          </p>

          <article className="media center">
            <span className="icon">
              <a href={data.site.siteMetadata.facebook}>
                <FaFacebook size={25} color="blue" />
              </a>
            </span>
          </article>
        </div>
      </footer>
    )}
  />
);

export default Footer;
