import './Organizacao.css'

const Organizacao = (props) => {
    return (
        <section className="organizacao">
            <div className='organizacao__titulo'>
                <p>{props.titulo}</p>
                <hr />
            </div>
            {props.children}
        </section>
    )
}

export default Organizacao