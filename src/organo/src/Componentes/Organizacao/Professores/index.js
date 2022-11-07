import Card from '../../Card'
import './Professores.css'

const Professores = (props) => {
    let contador = 0
    return (
        <div className={`professores ${props.background}`}>
            <div className='professores__titulo'>
                <p>{props.titulo}</p>
                <hr className={props.cardBackgoundHeader} />
            </div>
            <div className='professores__cards'>

                {
                    props.prof.map(x => {
                        if (String(props.titulo).includes(x.time)) {
                            return <Card key={contador++} style={props.cardBackgoundHeader} foto={x.imagem} nome={x.nome} profissao={x.cargo} />
                        }

                    })
                }
            </div>

        </div>
    )
}

export default Professores