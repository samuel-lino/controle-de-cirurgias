import './App.css';
import BanerTitulo from './modelos/baner_titulo/baner_titulo';
import FilaDeEspera from './modelos/fila_de_espera/fila_de_espera';
import Menulateral from './modelos/menu_lateral/menu_lateral';

function App() {
  return (
    <div className="App">
      <BanerTitulo titulo="Marcações cirurgia"/>
      <div className='conteiner'>
        <Menulateral/>
        <div className='conteudo'>
          <FilaDeEspera/>
        </div>
      </div>
    </div>
  );
}

export default App;
