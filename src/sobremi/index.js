import "./index.scss";
import Sobremi from "../assets/yo.jpeg";

const SobreMi = () => {
  return (
    <div className="homes">
      <h1>Sobre Mi</h1>
      <div className="sobremi">
        <p className="sobremi-texto">
          Tengo 23 años, estudio en la Universidad Nacional de Hurlingham,
          Licenciatura en Informatica. Ademas, realice cursos en la plataforma
          Udemy, donde me especialice como desarrolladora FrontEnd.Soy una
          persona autónoma y proactiva. Encontré una manera de plasmar mi
          creativida usando la lógica y el diseño. Quiero sumarme a un equipo de
          trabajo para potenciar mis habilidades tanto técnicas como humanas,
          para seguir desafiándome todos los días.
        </p>
        <img src={Sobremi} alt="sobremi" className="sobremi-imagen" />
      </div>
    </div>
  );
};

export default SobreMi;
