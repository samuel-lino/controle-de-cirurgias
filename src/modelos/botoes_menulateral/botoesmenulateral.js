import './botoes.css';

function BotoesMenuLateral(props){
    return (<div>
        <button onClick={props.funcao}>{props.nome}</button>
    </div>)
}


export default BotoesMenuLateral