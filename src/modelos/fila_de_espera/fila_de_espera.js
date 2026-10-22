import "./filadeespera.css";
import CardCirurgia from "../card_cirurgia/card_cirurgia";

const cirurgias = [{"nome":"samuel eduardo", "cpf":"11523726458", "tipocirurgia": "Postectomia"}, {"nome":"maria liz", "cpf":"1152586458", "tipocirurgia": "Histerectomia"}]


function FilaDeEspera(){
    return(<div className="filadeespera">
        <ul className="listacirurgia">
            {cirurgias.map((cirurgia, index)=>(
                <li key={index}>
                    <CardCirurgia nome={cirurgia.nome} cpf={cirurgia.cpf} tipocirurgia={cirurgia.tipocirurgia}/>
                </li>
            ))}
        </ul>
    </div>)
}

export default FilaDeEspera