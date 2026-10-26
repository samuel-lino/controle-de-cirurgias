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
        <div className="acoes">
            <button><span className="material-symbols-outlined">
calendar_month
</span></button>
            <button><span className="material-symbols-outlined">
delete
</span></button>
            <button><span className="material-symbols-outlined">
search
</span></button>
        </div>
    </div>)
}

export default CardCirurgia