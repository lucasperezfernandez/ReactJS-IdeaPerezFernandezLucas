import { useNavigate } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate()

    const goToProducts = () => {
        navigate("/products")
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToProducts}>Ir a la pagina de productos</button>
        </div>
    );
};

export default HomePage;