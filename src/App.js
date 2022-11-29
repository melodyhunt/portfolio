import "./App.scss";
import Navegacion from "./componentes/navegacion";
import Home from "./inicio/index";
import SobreMi from "./sobremi/index";
import Tecnologia from "./tecnologias/index";
import Contacto from "./contacto/index";
import Footer from "./componentes/footer";
import Proyectos from "./proyectos/proyectos";

function App() {
  return (
    <div>
      <Navegacion />
      <div className="principal">
        <Home />
        <SobreMi />
        <Tecnologia />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
