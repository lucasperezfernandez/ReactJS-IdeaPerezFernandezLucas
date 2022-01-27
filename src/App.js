import './App.css';
// import './components/NavBar/NavBar.css';
// import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/IndexBody/ItemListContainer';
// // import MyClassComponent from './components/MyClassComponent';
// // import MyFunctionalComponent from './components/MyFunctionalComponent';
// import ItemCount from './components/ItemCount';
import { useEffect, useState } from 'react';
// import { getProductos } from './components/items/Item';

function App() {
  const [poke, setPoke] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const URL = 'http://localhost:3500/items'

    setIsLoading(true)
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setPoke(json))
      .catch((err) => setError (err))
      .finally(() => setIsLoading(false));
  }, []);

  if(isLoading){
    return <p>Carrgando los poke...</p>
  }else if (error){
    return <p>Ha habido un error {error.message}</p>
  }else {
    return(
      <div>
        <h1>Hola</h1>
        <ul>
          {poke.map((items) => {
            return <li key={items.id}>{items.name}</li>;
          })}
        </ul>
      </div>
    )
  }

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
    //   <ul>
    //     {products.map((product) => (
    //         <li key={ product.id }> {product.name} precio: {product.price} </li>
    //     ))}
    //   </ul>
    // </div>

    // ASYNC DENTRO DEL USE EFFECT EN FUNCION
        // const getPoke = async() => {
    //   const response = await fetch(URL);
    //   const json = response.json()
    //   console.log(json)
    // };
    // getPoke(); 