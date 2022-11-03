import Cabecalho from "./Componentes/Cabecalho";
import Formulario from "./Componentes/Formulario";

import './app.css'
import Organizacao from "./Componentes/Organizacao";
import Card from "./Componentes/Card";
import Programacao from "./Componentes/Organizacao/Programacao";
import Frontend from "./Componentes/Organizacao/Prontend";
import DataScience from "./Componentes/Organizacao/DataScience";
import Devops from "./Componentes/Organizacao/Devops";
import Uxdesign from "./Componentes/Organizacao/Uxdesign";
import Mobile from "./Componentes/Organizacao/Mobile";
import InovacaoGestao from "./Componentes/Organizacao/InovavaoGestao";

function App() {
  return (
    <div className="app">
      <Cabecalho />
      <Formulario />
      <Organizacao titulo="Minha Organização">
        <Programacao titulo="Programação"/>
        <Frontend titulo="Front End"/>
        <DataScience titulo="Data Sience"/>
        <Devops titulo="Devops"/>
        <Uxdesign titulo="UX e Design"/>
        <Mobile titulo="Mobile"/>
        <InovacaoGestao titulo="Inovação E Gestão"/>
      </Organizacao>
    </div>
  );
}

export default App;
