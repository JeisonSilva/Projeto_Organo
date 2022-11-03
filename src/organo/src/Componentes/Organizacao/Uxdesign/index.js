import Card from '../../Card'
import './Uxdesign.css'

const Uxdesign = (props) =>{
    return (
        <div className='uxdesign'>
            <p>{props.titulo}</p>
        
            <div className='uxdesign__cards'>
                <Card style="card__header--uxdesign" foto="./img/programador1.png" nome="Juliana Amoasei" profissao="Desenvolvedora de software e instrutora" />
                <Card style="card__header--uxdesign" foto="./img/programador2.png" nome="Daniel Artine" profissao="Engenheiro de Software na Stone Age" />
                <Card style="card__header--uxdesign" foto="./img/programador3.png" nome="Guilherme Lima" profissao="Desenvolvedor Python e JavaScript na Alura" />
                <Card style="card__header--uxdesign" foto="./img/programador4.png" nome="Paulo Silveira" profissao="Hipster e CEO da Alura" />
            </div>

        </div>
    )
}

export default Uxdesign