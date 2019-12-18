import React from "react";


import "./style.scss";

import { Link } from "gatsby";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero is-fullheight">
    <Navbar />
    <container>
      <div className="columns">
        <div className="column is-half has-text-centered">
          <h1 className="subtitle is-4 has-text-white">
            Agencia de Marketing Digital
          </h1>
          <h2 className="title is-1 has-text-white">Equilibrio Studio</h2>
          <p className=" subtitle is-5 has-text-white">
            Tú te encargas de hacer un gran producto. Nosotros nos encargamos de
            que llegue a las personas indicadas en Querétaro para potencializar
            tus ventas. <span className="magical">Así de simple.</span>
          </p>
          <Link to="#informacion" className="button is-warning is-outlined is-rounded">Más información</Link>
        </div>

        <div className="column is-one-quarter"></div>
        <div className="column is-one-quarter"></div>
      </div>
    </container>

    <container>
      <div className="hero-foot center">
        <div className="columns is-desktop">
          <div className="column"></div>

          <div className="column center is-desktop"></div>
          <div className="column"></div>
        </div>
      </div>
    </container>
  </section>
);

export default Header;

