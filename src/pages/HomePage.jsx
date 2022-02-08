import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const HomePage = () => {
    let navigate = useNavigate()
    const goToProducts = () => {
        navigate("/products")
    };
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Esto es geek spot, el lugar en donde siempre encontras lo que necesitas</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eius laboriosam possimus alias fuga ipsum tenetur velit nesciunt dolorum, officiis cupiditate quisquam natus placeat dignissimos repellendus, neque, porro error!</p>
            <button onClick={goToProducts}>Ir a la pagina de productos</button>
        </div>
    );
};

export default HomePage;