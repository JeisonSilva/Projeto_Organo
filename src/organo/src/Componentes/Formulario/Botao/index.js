import './Botao.css'

const Botao = (props) =>{
    return (
        <button className='botao__default' onClick={props.click}>{props.value}</button>
    )
}

export default Botao