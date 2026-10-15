import './App.css';
import BanerTitulo from './modelos/baner_titulo/baner_titulo';
import CardCirurgia from './modelos/card_cirurgia/card_cirurgia';
import Menulateral from './modelos/menu_lateral/menu_lateral';

function App() {
  return (
    <div className="App">
      <BanerTitulo titulo="Marcações cirurgia"/>
      <div className='conteiner'>
        <Menulateral/>
        <CardCirurgia/>
      </div>
    </div>
  );
}

export default App;
