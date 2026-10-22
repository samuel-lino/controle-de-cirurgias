import "./card_cirurgia.css";

function CardCirurgia(props){
    return(<div className="card">
        <div className="dadospessoais">
            <h5>{props.nome}</h5>
            <p>{props.cpf}</p>
        </div>
        <div className="infocirurgia">
            <h4 className="tipocirurgia">{props.tipocirurgia}</h4>
        </div>
    </div>)
}

export default CardCirurgia