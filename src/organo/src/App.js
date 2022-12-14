import Cabecalho from "./Componentes/Cabecalho";
import Formulario from "./Componentes/Formulario";

import './app.css'
import Organizacao from "./Componentes/Organizacao";
import Professores from "./Componentes/Organizacao/Professores";
import Rodape from "./Componentes/Rodape";
import { useState } from "react";


function App() {
  

  const [colaboradores, setColaboradores] = useState([
    {
      imagem:'https://organo-eight-psi.vercel.app/img/programador1.png',
      nome: 'Juliana Amoasei',
      cargo: 'Desenvolvedora de software e instrutora',
      time: 'Programação'
    },{
      imagem: 'https://organo-eight-psi.vercel.app/img/programador2.png',
      nome: 'Daniel Artine',
      cargo: 'Engenheiro de Software na Stone Age',
      time: 'Programação'
    },
    {
      imagem: 'https://organo-eight-psi.vercel.app/img/programador3.png',
      nome: 'Guilherme Lima',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      time: 'Programação'
    },
    {
      imagem: 'https://organo-eight-psi.vercel.app/img/programador4.png',
      nome: 'Paulo Silveira',
      cargo: 'Hipster e CEO da Alura',
      time: 'Programação'
    }
  ])

  return (
    <div className="app">
      <Cabecalho />
      <Formulario  onChange={colaborador => setColaboradores([...colaboradores, colaborador])}/>
      <Organizacao titulo="Minha Organização">
        <Professores titulo="Programação" background="professores__background--programacao" cardBackgoundHeader="card__header--programacao" prof={colaboradores} />
        <Professores titulo="Front End" background="professores__background--frontend" cardBackgoundHeader="card__header--frontend" prof={colaboradores} />
        <Professores titulo="Data Sience" background="professores__background--datascience" cardBackgoundHeader="card__header--datascience" prof={colaboradores} />
        <Professores titulo="Devops" background="professores__background--devops" cardBackgoundHeader="card__header--devops" prof={colaboradores} />
        <Professores titulo="UX e Design" background="professores__background--uxdesign" cardBackgoundHeader="card__header--uxdesign" prof={colaboradores} />
        <Professores titulo="Mobile" background="professores__background--mobile" cardBackgoundHeader="card__header--mobile" prof={colaboradores} />
        <Professores titulo="Inovação e Gestão" background="professores__background--inovacaogestao" cardBackgoundHeader="card__header--inovacaogestao" prof={colaboradores} />
        <Rodape/>
      </Organizacao>
    </div>
  );
}

export default App;
