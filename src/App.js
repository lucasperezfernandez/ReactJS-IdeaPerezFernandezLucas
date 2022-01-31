import './App.css';
// import './components/NavBar/NavBar.css';
// import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/IndexBody/ItemListContainer';
// import MyClassComponent from './components/MyClassComponent';
// import MyFunctionalComponent from './components/MyFunctionalComponent';
import ItemCount from './components/ItemCount';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import GetProducts from './components/items/Item';

// import { getProductos } from './components/items/Item';

function App() {
return (
  <div>
    <NavBar></NavBar>
    <h2>Titulo</h2>
    <GetProducts></GetProducts>
    <ItemCount name="Boton Prueba" stock= {5}/>
  </div>
)

}
export default App;

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getProductos()
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.log(error));
  // }, []);

    // <div>
    //   <NavBar />
    //   <h3>Hola Mundo!</h3>
    //   {/* <MyClassComponent/>
    //   <MyFunctionalComponent/> */}
    //   <ItemCount name="Boton Prueba" stock= {5}/>


