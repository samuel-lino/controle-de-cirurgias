import BotoesMenuLateral from '../botoes_menulateral/botoesmenulateral';
import './menulateral.css';

function Menulateral(){
    return (
    <div className='menulateral'>
        <ul className='menulist'>
            <li><BotoesMenuLateral nome="Dashboard" funcao=""/></li>
            <li><BotoesMenuLateral nome="Fila de espera" funcao=""/></li>
            <li><BotoesMenuLateral nome="cirurgias realizadas" funcao=""/></li>
            <li><BotoesMenuLateral nome="relatorios" funcao=""/></li>
            <li><BotoesMenuLateral nome="sair" funcao=""/></li>
        </ul>
    </div>
    )
}

export default Menulateral