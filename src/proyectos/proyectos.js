import "./proyectos.scss";
import BuenosAires from "../assets/buenosaires.png";
import SalvaTerra from "../assets/salvaterra.png";
import RickAndMorty from "../assets/ricky.png";
import Gift from "../assets/gift.png";
import Portfolio from "../assets/portfolio.png";

const Proyectos = () => {
  return (
    <div className="homer" id="proyectos">
      <h1>Proyectos</h1>
      <div className="proyectos">
        <section className="section">
          <h5>Blog de Paisajismo</h5>
          <img src={SalvaTerra} className="tamaño" alt="Salva terra" />
          <div className="enlace">
            <a
              href="https://blogpaisajismo.vercel.app/"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              Deploy
            </a>
            <a
              href="https://github.com/melodyhunt/Blog"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              GitHub
            </a>
          </div>
        </section>
        <section className="section">
          <h5>Api Rick And Morty</h5>
          <img src={RickAndMorty} className="tamaño" alt="RickAndMorty" />
          <div className="enlace">
            <a
              href="https://rick-and-morty-hunt.vercel.app/"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              Deploy
            </a>
            <a
              href="https://github.com/melodyhunt/Rick-and-morty"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              GitHub
            </a>
          </div>
        </section>
        <section className="section">
          <h5>Api Gift</h5>
          <img src={Gift} className="tamaño" alt="Gift" />
          <div className="enlace">
            <a
              href="https://vercel.com/melodyhunt/gif-expert/72iKooEC4nvC6Uz2wRju1EPjX2xv"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              Deploy
            </a>
            <a
              href="https://github.com/melodyhunt/Gif-Expert"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              GitHub
            </a>
          </div>
        </section>
        <section className="section">
          <h5 className="h5">Portfolio Anterior</h5>
          <img src={Portfolio} className="tamaño" alt="portfolio" />
          <div className="enlace">
            <a
              href="https://delightful-beignet-f41a95.netlify.app/"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              Deploy
            </a>
          </div>
        </section>
        <section className="section">
          <h5 className="h5">Buenos Aires Trap</h5>
          <img src={BuenosAires} className="tamaño" alt="BuenosAires" />
          <div className="enlace">
            <a
              href="https://poetic-cajeta-683c47.netlify.app/"
              target="_blank"
              without
              rel="noreferrer"
              className="enlace-color"
            >
              Deploy
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proyectos;
