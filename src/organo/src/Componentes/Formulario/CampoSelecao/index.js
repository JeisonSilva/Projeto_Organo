import './CampoSelecao.css'

const CampoSelecao = (props) =>{
    return (
       <div className='campo__selecao'>
        <label>{props.label}</label>
         <select>
            {
              props.opcoes.map(x=>{
                return <option key={x.id} value={x.id}>{x.value}</option>
              })
            }
         </select>
       </div>
    )
}

export default CampoSelecao