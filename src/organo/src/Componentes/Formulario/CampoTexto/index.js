import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {


    const digitar = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <div className='campo__texto'>
            <label>{props.label}</label>
            <input
                type="text"
                placeholder={`${props.placeholder} ${props.valueDefault == undefined ? '' : 'Exemplo:' + props.valueDefault}`}
                value={props.value}
                onChange={digitar} />
        </div>
    )
}

export default CampoTexto