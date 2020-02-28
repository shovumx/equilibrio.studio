import React from "react";
import { FaFacebook } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
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
          <p className="is-size-7">
            Posicionamiento web en Querétaro | Equilibrio Studio. <br />
            Av. Euripides, El Refugio, 76146 Santiago de Querétaro, Qro.
            <br />
            Tel. 442 131 9447
            <br />
            <a href="https://g.page/EquilibrioStudioMX?gm">Google Maps</a>
            <br />
            Todos los derechos reservados. Desde 2019.
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
