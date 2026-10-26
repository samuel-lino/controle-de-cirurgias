import BotoesMenuLateral from '../botoes_menulateral/botoesmenulateral';
import './menulateral.css';



function Menulateral(props){
    return (
    <div className='menulateral'>
        <ul className='menulist'>
            <li><BotoesMenuLateral nome="Dashboard" pagina="dashboard" funcao={props.funcao}/></li>
            <li><BotoesMenuLateral nome="Fila de espera" pagina="filadeespera" funcao={props.funcao}/></li>
            <li><BotoesMenuLateral nome="cirurgias realizadas" funcao={props.funcao}/></li>
            <li><BotoesMenuLateral nome="relatorios" funcao={props.funcao}/></li>
            <li><BotoesMenuLateral nome="sair" funcao={props.funcao}/></li>
        </ul>
    </div>
    )
}

export default Menulateral