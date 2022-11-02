import './Organizacao.css'

const Organizacao = (props) => {
    return (
        <section className="organizacao">
            <p className='organizacao__titulo'>{props.titulo}</p>
            <hr />
            {props.children}
        </section>
    )
}

export default Organizacao