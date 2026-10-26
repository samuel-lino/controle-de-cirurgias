import './App.css';
import { useState } from 'react';
import BanerTitulo from './modelos/baner_titulo/baner_titulo';
import Dashboard from './modelos/dashboard/dashboard';
import FilaDeEspera from './modelos/fila_de_espera/fila_de_espera';
import Menulateral from './modelos/menu_lateral/menu_lateral';




function App() {
  const [conteudo, setconteudo] = useState("dashboard")

  
  return (
    <div className="App">
      <BanerTitulo titulo="Marcações cirurgia"/>
      <div className='conteiner'>
        <Menulateral funcao={setconteudo}/>
        <div className='conteudo'>
          {conteudo === "dashboard" ? <Dashboard/> : conteudo === "filadeespera" ? <FilaDeEspera/> : <p>Conteudo não encontrado</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
