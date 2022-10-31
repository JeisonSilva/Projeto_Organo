import './Organizacao.css'

const Organizacao = (props) =>{
    return (
        <section className="organizacao">
            <p className='organizacao__titulo'>{props.titulo}</p>
            <hr/>
        </section>
    )
}

export default Organizacao