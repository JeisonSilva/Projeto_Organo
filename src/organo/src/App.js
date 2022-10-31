import Cabecalho from "./Componentes/Cabecalho";
import Formulario from "./Componentes/Formulario";

import './app.css'
import Organizacao from "./Componentes/Organizacao";

function App() {
  return (
    <div className="app">
      <Cabecalho/>
      <Formulario/>
      <Organizacao titulo="Minha Organização"/>
    </div>
  );
}

export default App;
