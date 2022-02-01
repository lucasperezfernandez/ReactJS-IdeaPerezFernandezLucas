import { Link } from "react-router-dom"

const Navbar = () => {
    return <nav>
        <h2 className="NavBar-Heading"> <Link to='/'>GeekSpot</Link> </h2>
        <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
}

export default Navbar