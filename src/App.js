// npm start  --> ejecuta la app
// npm run json-server  --> ejecuta el servidor json
// json-server --watch db.json --port 3500  -->Correr el servidor json en el puerto 3500
// Sass --> npm install sass
// React router dom v6  --> npm install react-router-dom@6 
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import { CartContext } from './context/CartContext';

const USER_DATA = {
  name: 'Laura',
  email: 'laura@email.com',
  age: '55', 
};
function App() {
return (
  <CartContext.Provider value={USER_DATA}>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage />}/>
        <Route path='products'>
          <Route index element = {<ProductsPage/>}></Route>
          <Route path=":productId" element={<ProductDetailPage />}></Route>
        </Route>
        <Route path='about' element={<AboutPage/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </CartContext.Provider>
)
}


export default App;