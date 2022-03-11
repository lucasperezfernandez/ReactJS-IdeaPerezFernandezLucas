import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function NavBar() {
    const {cartQuantity} = useCart();
    return <>
        {/* Creamos barra para el navegador */}
        <div className="NavBar">
            <h2 ><Link  className="NavBar-Heading geekSpot" to= '/'>GeekSpot</Link> </h2>
            <ul>
                <li><Link className='NavBar-Heading' to='/consolas'>Consolas</Link></li>
                <li><Link className='NavBar-Heading' to='/notebooks'>Notebooks</Link></li>
                <li> <Link className="NavBar-Heading" to='/about'>About</Link> </li>
                <li> <Link className="NavBar-Heading" to='/cart'><BsFillCartFill></BsFillCartFill> ({cartQuantity })</Link>  </li>
            </ul>
            
        </div>
    </>
};

export default NavBar;
