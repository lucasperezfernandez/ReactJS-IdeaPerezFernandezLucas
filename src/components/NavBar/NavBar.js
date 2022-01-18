import './components/NavBar/NavBar.css';
function NavBar() {
    return <>
        {/* Creamos barra para el navegador */}
        <div className="NavBar">
            <h2 className="NavBar-Heading">GeekSpot</h2>
            <h3>Seccion 1</h3>
            <h3>Seccion 2</h3>
            <h3>Seccion 3</h3>
            <img className="NavBarImg" src="http://assets.stickpng.com/thumbs/59bedb1e7a216d0b052f128b.png"></img>
        </div>
    </>
};

export default NavBar;
