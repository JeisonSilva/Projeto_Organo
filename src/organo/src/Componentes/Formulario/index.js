import Botao from './Botao';
import CampoSelecao from './CampoSelecao';
import CampoTexto from './CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <p>Preencha os dados para criar o card do colaborador</p>
                <CampoTexto />
                <CampoTexto />
                <CampoTexto />
                <CampoSelecao />
                <Botao />
            </form>
        </section>
    )
}

export default Formulario;