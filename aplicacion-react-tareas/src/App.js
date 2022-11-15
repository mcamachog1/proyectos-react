import './App.css';
import LogoListaDeTareas from './componentes/logoListaDeTareas';
// import Tarea from './componentes/tarea';
import ListaDeTareas from './componentes/listaDeTareas';

function App() {
  return (
    <div className="App">
      <LogoListaDeTareas />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/* <Tarea texto='Aprender React' /> */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
