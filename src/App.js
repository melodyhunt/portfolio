import "./App.scss";
import Navegacion from "./componentes/navegacion";
import Home from "./inicio/index";
import SobreMi from "./sobremi/index";
import Tecnologia from "./tecnologias/index";

function App() {
  return (
    <div>
      <Navegacion />
      <div className="principal">
        <Home />
        <SobreMi />
        <Tecnologia />
      </div>
    </div>
  );
}

export default App;
