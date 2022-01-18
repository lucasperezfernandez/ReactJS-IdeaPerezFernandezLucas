import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/IndexBody/ItemListContainer';

function App() {
  return ( 
    <div>
      <NavBar />
      <h3>Hola Mundo!</h3>
      <ItemListContainer/>
    </div>
  );
}

export default App;
