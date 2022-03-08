import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { useCart } from "../../context/CartContext";
const ItemDetail = ({product}) => {
    const { cart, addItem} = useCart(); 
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        addItem(product, counter, totalParcial(product.price , counter));
        setCounter(0)
    };
    function totalParcial(precio, cantidad) {
        let parcial = precio * cantidad;
        return parcial;
    };
    return (
        <div>
            <h1>{product.title}</h1>
            <img className="detail-img" src={product.image} alt={product.title} />
            <p>{product.detail}</p>
            <p>Precio unitario: {product.price} $</p>
            <ItemCount counter={counter} setCounter={setCounter} />
            <p>total: {totalParcial(product.price, counter)}</p>
            <button onClick={handleClick}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemDetail