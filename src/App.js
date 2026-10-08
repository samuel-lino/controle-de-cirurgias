import './App.css';
import BanerTitulo from './modelos/baner_titulo/baner_titulo';
import Menulateral from './modelos/menu_lateral/menu_lateral';

function App() {
  return (
    <div className="App">
      <BanerTitulo titulo="Marcações cirurgia"/>
      <Menulateral/>
    </div>
  );
}

export default App;
