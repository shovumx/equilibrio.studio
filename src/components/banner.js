import React from "react";
import "./style.scss";
import "./banner.scss";
import MyForm from "../components/formulario";


const Banners = () => (
  <div>
    <section className="section sa">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
           </div>
          <div className="column is-half">
          <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">¿Quieres más información sobre nosotros?</h2>
            <MyForm />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </section>
  </div>
);

export default Banners;
