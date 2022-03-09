import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Item = ({product}) => {
    const navigate = useNavigate();
    return(
        <div className="item-card">
            <div className="img-container">
                <img src={product.image} alt={product.title} />
            </div>
            <p>Nombre: {product.title}</p>
            <p>Detalle: {product.detail}</p>
            <p>Precio unitario: {product.price} $</p>
            <button  className="button" onClick={()=> navigate(`/${product.id}`)}>Ver mas...</button>
        </div>
    );
};

export default Item;