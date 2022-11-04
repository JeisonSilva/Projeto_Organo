import Botao from './Botao';
import CampoSelecao from './CampoSelecao';
import CampoTexto from './CampoTexto';
import './Formulario.css'

const Formulario = () => {

    let opcoes = [
        {
            id: 1,
            value: 'Programação'
        },
        {
            id: 2,
            value: 'Front End'
        }, {
            id: 3,
            value: 'Data Sience'
        }, 
        {
            id: 4,
            value: 'Devops'
        }, 
        {
            id: 5,
            value: 'UX e Design'
        }, 
        {
            id: 6,
            value: 'Mobile'
        }, 
        {
            id: 7,
            value: 'Inovação e Gestão'
        }
    ]

    return (
        <form className="formulario">
            <p>Preencha os dados para criar o card do colaborador</p>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Informe o caminho da imagem" valueDefault='./img/imagem.png'/>
            <CampoSelecao label="Time" opcoes={opcoes} />
            <Botao value="Criar card" />
        </form>
    )
}

export default Formulario;