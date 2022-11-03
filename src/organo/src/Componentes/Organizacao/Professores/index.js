import Card from '../../Card'
import './Professores.css'

const Professores = (props) => {
    return (
        <div className={`professores ${props.background}`}>
            <div className='professores__titulo'>
                <p>{props.titulo}</p>
                <hr className={props.cardBackgoundHeader}/>
            </div>
            <div className='professores__cards'>

                {
                    props.prof.map(x => {
                        return <Card key={x.id} style={props.cardBackgoundHeader} foto={x.imagem} nome={x.nome} profissao={x.profissao} />
                    })
                }
            </div>

        </div>
    )
}

export default Professores