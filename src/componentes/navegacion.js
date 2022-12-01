import React, { useState } from "react";

import {
  FaCode,
  FaUser,
  FaRegEnvelope,
  FaBars,
  FaTimes,
  FaCogs,
  FaHome,
} from "react-icons/fa";

import "./navegacion.scss";

const Navegacion = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className=" header">
      <span className="menu-icon">
        {!open && <FaBars className="icono" onClick={() => setOpen(true)} />}
      </span>

      <div className="laptop ">
        <a className=" navlink" href="#home">
          <FaHome className="icono" />

          <h3>Inicio</h3>
        </a>
        <a className=" navlink " href="#sobremi">
          <FaUser className="icono" />

          <h3>Sobre Mi</h3>
        </a>
        <a className="navlink " href="#tecnologias" id="tecnologias">
          <FaCogs className="icono" />
          <h3>Tecnologias</h3>
        </a>
        <a className="navlink" href="#proyectos">
          <FaCode className="icono" />
          <h3>Proyectos</h3>
        </a>
        <a className="navlink " href="#contacto">
          <FaRegEnvelope className="icono" />
          <h3>Contacto</h3>
        </a>
      </div>

      {open && (
        <div className="mobil">
          <div className="nav-mobile">
            <a href="#home" className="navlink">
              inicio
            </a>
            <a href="#sobremi" className="navlink">
              Sobre Mi
            </a>
            <a href="#Tecnologias" className="navlink">
              Tenologias
            </a>
            <a href="#proyecto" className="navlink">
              Proyectos
            </a>
            <a href="#contacto" className="navlink">
              Contacto
            </a>
          </div>
          <div>
            <span className="close-mobile" onClick={() => setOpen(false)}>
              <FaTimes className="icono" />
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navegacion;
