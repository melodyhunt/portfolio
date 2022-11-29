import "./index.scss";
import { MdOutlineLocationOn, MdAlternateEmail } from "react-icons/md";
import Formulario from "../componentes/formulario";
const Contacto = () => {
  return (
    <div className="homes" id="contacto">
      <h1>Contacto</h1>
      <div className="dividir">
        <Formulario className="formu" />
        <div className="datos">
          <section className="ubicacion">
            <MdOutlineLocationOn className="iconic" />
            <h2>
              Hurlingham, <span className="span1">Buenos Aires,</span>
              <span className="span2">Argentina</span>
            </h2>
          </section>
          <section className="mail">
            <MdAlternateEmail className="iconic" />
            <a href="mailto:mariamelodyhunt@gmail.com">
              mariamelodyhunt@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
