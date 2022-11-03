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
import Professores from "./Componentes/Organizacao/Professores";


function App() {
  let professores = [
    {
      id: 1,
      imagem: './img/programador1.png',
      nome: 'Juliana Amoasei',
      profissao: 'Desenvolvedora de software e instrutora'
    },
    {
      id: 2,
      imagem: './img/programador2.png',
      nome: 'Daniel Artine',
      profissao: 'Engenheiro de Software na Stone Age'
    },
    {
      id: 3,
      imagem: './img/programador3.png',
      nome: 'Guilherme Lima',
      profissao: 'Desenvolvedor Python e JavaScript na Alura'
    },
    {
      id: 4,
      imagem: './img/programador4.png',
      nome: 'Paulo Silveira',
      profissao: 'Hipster e CEO da Alura'
    }
  ]

  return (
    <div className="app">
      <Cabecalho />
      <Formulario />
      <Organizacao titulo="Minha Organização">
        <Professores titulo="Programação" background="professores__background--programacao" cardBackgoundHeader="card__header--programacao" prof={professores} />
        <Professores titulo="Front End" background="professores__background--frontend" cardBackgoundHeader="card__header--frontend" prof={professores} />
        <Professores titulo="Data Sience" background="professores__background--datascience" cardBackgoundHeader="card__header--datascience" prof={professores} />
        <Professores titulo="Devops" background="professores__background--devops" cardBackgoundHeader="card__header--devops" prof={professores} />
        <Professores titulo="UX e Design" background="professores__background--uxdesign" cardBackgoundHeader="card__header--uxdesign" prof={professores} />
        <Professores titulo="Mobile" background="professores__background--mobile" cardBackgoundHeader="card__header--mobile" prof={professores} />
        <Professores titulo="Inovação e Gestão" background="professores__background--inovacaogestao" cardBackgoundHeader="card__header--inovacaogestao" prof={professores} />
      </Organizacao>
    </div>
  );
}

export default App;
