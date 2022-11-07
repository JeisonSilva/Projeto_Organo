import { useState } from 'react';
import Botao from './Botao';
import CampoSelecao from './CampoSelecao';
import CampoTexto from './CampoTexto';
import './Formulario.css'

const Formulario = (props) => {

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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (event)=>{
        event.preventDefault()
        props.onChange({
            nome, cargo, imagem, time
        })
    }
    return (
        <form className="formulario" onSubmit={salvar}>
            <p>Preencha os dados para criar o card do colaborador</p>
            <CampoTexto label="Nome" placeholder="Digite seu nome" value={nome} setValue={valor => setNome(valor)}/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" value={cargo} setValue={valor => setCargo(valor)}/>
            <CampoTexto label="Imagem" placeholder="Informe o caminho da imagem" valueDefault='./img/imagem.png' value={imagem} setValue={valor => setImagem(valor)}/>
            <CampoSelecao label="Time" opcoes={opcoes} value={time} setValue={valor => setTime(valor)}/>
            <Botao value="Criar card" click={event=> salvar(event)}/>
        </form>
    )
}

export default Formulario;