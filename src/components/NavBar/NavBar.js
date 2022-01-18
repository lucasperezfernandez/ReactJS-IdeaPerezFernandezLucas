import { BsFillCartFill } from 'react-icons/bs'
function NavBar() {
    return <>
        {/* Creamos barra para el navegador */}
        <div className="NavBar">
            <h2 className="NavBar-Heading">GeekSpot</h2>
            <h3>Seccion 1</h3>
            <h3>Seccion 2</h3>
            <h3>Seccion 3</h3>
            <h3> <BsFillCartFill></BsFillCartFill>  </h3>
        </div>
    </>
};

export default NavBar;
