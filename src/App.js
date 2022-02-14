// npm start  --> ejecuta la app
// npm run json-server  --> ejecuta el servidor json
// json-server --watch db.json --port 3500  -->Correr el servidor json en el puerto 3500
// Sass --> npm install sass
// React router dom v6  --> npm install react-router-dom@6 
// Ctrl + C --> cerrar app
// INSTALAR FIREBASE --> npm install firebase@8.10.0 --save
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import { CartContext, CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';


function App() {
return (
  <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
            <Route path=":productId" element={<ProductDetailPage />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='cart' element={<CartPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
)
}


export default App;