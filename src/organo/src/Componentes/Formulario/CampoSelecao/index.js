import './CampoSelecao.css'

const CampoSelecao = (props) =>{

    const selected = (event) =>{
      props.setValue(event.target.value)
    }

    return (
       <div className='campo__selecao'>
        <label>{props.label}</label>
         <select value={props.value} onChange={selected}>
            {
              props.opcoes.map(x=>{
                return <option key={x.id} value={x.value}>{x.value}</option>
              })
            }
         </select>
       </div>
    )
}

export default CampoSelecao