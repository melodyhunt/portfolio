import "./index.scss";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaSass,
  FaReact,
  FaNpm,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiMysql, SiRedux } from "react-icons/si";

const Tecnologia = () => {
  return (
    <div className="homer">
      <h1>Tecnologias</h1>
      <div className="skills">
        <section className="skills-lista a">
          {" "}
          <TbBrandNextjs className="fa " />
          <h2>NEXT.JS</h2>
        </section>
        <section className="skills-lista b">
          {" "}
          <FaReact className="fa" />
          <h2>REACT.JS</h2>
        </section>
        <section className="skills-lista a">
          {" "}
          <FaJs className="fa" />
          <h2>JAVASCRIPT</h2>
        </section>
        <section className="skills-lista  b">
          {" "}
          <FaHtml5 className="fa" />
          <h2>HTML5</h2>
        </section>
        <section className="skills-lista a">
          {" "}
          <FaCss3Alt className="fa" />
          <h2>CSS3</h2>
        </section>
        <section className="skills-lista b">
          {" "}
          <FaSass className="fa" />
          <h2>SASS</h2>
        </section>
        <section className="skills-lista a">
          {" "}
          <SiTailwindcss className="fa" />
          <h2>TAILWIND.CSS</h2>
        </section>
        <section className="skills-lista b">
          {" "}
          <SiRedux className="fa " />
          <h2>REDUX</h2>
        </section>
        <section className="skills-lista a">
          {" "}
          <FaPhp className="fa" />
          <h2>PHP</h2>
        </section>
        <section className="skills-lista b">
          {" "}
          <SiMysql className="fa" />
          <h2>MYSQL</h2>
        </section>
        <section className="skills-lista a">
          {" "}
          <FaNpm className="fa" />
          <h2>NPM</h2>
        </section>
      </div>
    </div>
  );
};

export default Tecnologia;
