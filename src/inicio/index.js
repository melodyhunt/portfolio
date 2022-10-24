import React from "react";
import "./index.scss";
import Cv from "../assets/HuntMelody-cv.pdf";
import { HiDownload } from "react-icons/hi";
const Home = () => {
  return (
    <div className="home">
      <h4>Hola, mi nombre es</h4>
      <h1>Melody Hunt</h1>
      <p className="maquina">Desarrolladora Front-end</p>
      <h4>¡Bienvenido!</h4>
      <div className="download">
        <HiDownload />
        <a href={Cv} className="down" download="melodyhunt-cv">
          Descargar cv
        </a>
      </div>
    </div>
  );
};

export default Home;
