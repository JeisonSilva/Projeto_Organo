import './Card.css'

const Card = (props)=>{
    return (
        <div className='card'>
            <div className={`card__header ${props.style}`}></div>
            <img className='card__img' src={props.foto}/>
            <div className='card__body'>
                <p className='card__body--nome'>{props.nome}</p>
                <p className='card__body--profissao'>{props.profissao}</p>
            </div>
        </div>
    )
}

export default Card