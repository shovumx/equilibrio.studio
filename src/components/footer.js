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
            Posicionamiento web SEO en Querétaro | Equilibrio Studio. Todos
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
