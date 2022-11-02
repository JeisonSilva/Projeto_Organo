import Cabecalho from "./Componentes/Cabecalho";
import Formulario from "./Componentes/Formulario";

import './app.css'
import Organizacao from "./Componentes/Organizacao";
import Card from "./Componentes/Card";
import Programacao from "./Componentes/Organizacao/Programacao";
import Frontend from "./Componentes/Organizacao/Prontend";

function App() {
  return (
    <div className="app">
      <Cabecalho />
      <Formulario />
      <Organizacao titulo="Minha Organização">
        <Programacao titulo="Programação"/>
        <Frontend titulo="Front End"/>
      </Organizacao>
    </div>
  );
}

export default App;
