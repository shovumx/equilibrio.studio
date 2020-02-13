import React from "react";
import { Link } from "gatsby";
import "./style.scss";
import "./columns.scss";

const Navbar = () => (
  <div className="hero-head sticky">
    <div className="columns is-hidden-mobile is-marginless heading has-text-weight-bold">
      <div className="column left">
        <Link to="/" className="navbar-item has-text-success">
          Inicio
        </Link>
      </div>
      <div className="column center">
        <Link to="/portafolio" className="navbar-item has-text-success">
          Portafolio
        </Link>
        <Link
          to="/posicionamiento-web-queretaro"
          className="navbar-item has-text-success"
        >
          Posicionamiento Web
        </Link>
        <Link to="/blog" className="navbar-item has-text-warning">
          Blog
        </Link>
      </div>
      <div className="column right">
        <Link to="/contacto" className="navbar-item has-text-grey-dark">
          Contacto
        </Link>
      </div>
    </div>
    <div className="columns is-hidden-desktop is-mobile is-marginless heading has-text-weight-bold">
      <div className="column left">
        <Link to="/" className="navbar-item has-text-success">
          Inicio
        </Link>
      </div>
      <div className="column center"></div>
      <div className="column right">
        <Link to="/portafolio" className="navbar-item has-text-warning">
          Portafolio
        </Link>
        <Link to="/blog" className="navbar-item has-text-warning">
          Blog
        </Link>
        <Link to="/contacto" className="navbar-item has-text-warning">
          Contacto
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
