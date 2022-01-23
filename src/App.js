import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/IndexBody/ItemListContainer';
// import MyClassComponent from './components/MyClassComponent';
// import MyFunctionalComponent from './components/MyFunctionalComponent';
import ItemCount from './components/ItemCount';
import { useEffect, useState } from 'react';
import { getProductos } from './components/items/Item';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  
  return ( 
    <div>
      <NavBar />
      <h3>Hola Mundo!</h3>
      {/* <MyClassComponent/>
      <MyFunctionalComponent/> */}
      <ItemCount name="Boton Prueba" stock= {5}/>
      <ul>
        {products.map((product) => (
            <li key={ product.id }> {product.name} precio: {product.price} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
