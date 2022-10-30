import './Botao.css'

const Botao = (props) =>{
    return (
        <button className='botao__default'>{props.value}</button>
    )
}

export default Botao