import Botao from './Botao';
import CampoSelecao from './CampoSelecao';
import CampoTexto from './CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <p>Preencha os dados para criar o card do colaborador</p>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe o caminho da imagem"/>
                <CampoSelecao label="Time"/>
                <Botao />
            </form>
        </section>
    )
}

export default Formulario;