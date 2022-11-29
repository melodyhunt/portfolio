import React from "react";
import "./index.scss";
import Logo from "../assets/melodyhunt.png";
import Cv from "../assets/MariaMelodyHunt.cv.pdf";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="division">
        <div className="introduccion">
          <h4>¡Hola! mi nombre es</h4>
          <h2>Melody Hunt</h2>
          <p className="maquina">Desarrolladora Front-end</p>
          <h4>¡Bienvenido!</h4>
          <section className="descarga">
            <a href={Cv} className="carga" download="melodyhunt-cv">
              <HiDownload className="hi" /> Descargar cv
            </a>
            <a className="carga" href="#contacto">
              Contacto
            </a>
          </section>
        </div>
        <img src={Logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Home;
