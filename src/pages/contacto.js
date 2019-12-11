import React from "react";
import Helmet from "../components/helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MyForm from "../components/formulario";


import "../components/style.scss";

export default () => (
  <div>
         <Helmet>
        <title>Contacto | Agencia de Marketing Digital en Querétaro</title>
        <meta name="description" content="¿Buscas más información sobre nuestra Agencia de Marketing? No dudes en ponerte en contacto con nosotros y con gusto te resolveremos todas tus dudas."></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
      <Navbar />
    <div>
      <section className="section sa">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters">
              <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-white">
                ¿Quieres más información sobre nosotros?
              </h2>
              <MyForm />
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);
