import Card from '../../Card'
import './Frontend.css'

const Frontend = (props) =>{
    return (
        <div className='frontend'>
            <p>{props.titulo}</p>
        
            <div className='frontend__cards'>
                <Card style="card__header--frontend" foto="./img/programador1.png" nome="Juliana Amoasei" profissao="Desenvolvedora de software e instrutora" />
                <Card style="card__header--frontend" foto="./img/programador2.png" nome="Daniel Artine" profissao="Engenheiro de Software na Stone Age" />
                <Card style="card__header--frontend" foto="./img/programador3.png" nome="Guilherme Lima" profissao="Desenvolvedor Python e JavaScript na Alura" />
                <Card style="card__header--frontend" foto="./img/programador4.png" nome="Paulo Silveira" profissao="Hipster e CEO da Alura" />
            </div>

        </div>
    )
}

export default Frontend