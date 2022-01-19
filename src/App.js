import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/IndexBody/ItemListContainer';
// import MyClassComponent from './components/MyClassComponent';
// import MyFunctionalComponent from './components/MyFunctionalComponent';
import ItemCount from './components/ItemCount';


function App() {
  return ( 
    <div>
      <NavBar />
      <h3>Hola Mundo!</h3>
      <ItemListContainer/>
      {/* <MyClassComponent/>
      <MyFunctionalComponent/> */}
      <ItemCount name="computadora" stock= {5}  />
    </div>
  );
}

export default App;
