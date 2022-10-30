import './CampoSelecao.css'

const CampoSelecao = (props) =>{
    return (
       <div className='campo__selecao'>
        <label>{props.label}</label>
         <select />
       </div>
    )
}

export default CampoSelecao