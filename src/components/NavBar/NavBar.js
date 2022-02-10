import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
function NavBar() {
    return <>
        {/* Creamos barra para el navegador */}
        <div className="NavBar">
            <h2 className="NavBar-Heading"><Link to= '/'>GeekSpot</Link> </h2>
            <ul>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/cart'><BsFillCartFill></BsFillCartFill> </Link>  </li>
            </ul>
            
        </div>
    </>
};

export default NavBar;
