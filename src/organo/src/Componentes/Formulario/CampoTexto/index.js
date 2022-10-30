import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className='campo__texto'>
            <label>{props.label}</label>
            <input type="text"  placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto