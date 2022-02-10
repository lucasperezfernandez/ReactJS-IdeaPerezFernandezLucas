import React, { useContext } from "react";
import ItemCount from "../ItemCount";
import { useEffect, useState} from "react";
import { CartContext, useCart } from "../../context/CartContext";



const ItemDetail = ({product}) => {
    const { cart, addItem} = useCart(); 
    
    const handleClick = () => {
        addItem(product, counter);
    }

    const [counter, setCounter] = React.useState(1)
    const less = () => {
        setCounter((prevState) => prevState - 1);
        if( counter <= 0 ){
            alert("Cantidad minima")
            setCounter(0)
        }
    }
    const more = (evt) => {
        evt.stopPropagation();
        setCounter((prevState) => prevState + 1)
        if( counter >= product.stock){
            alert("No puede superar la cantidad de stock maxima")
            setCounter(product.stock);
        }
    }
    function totalParcial(precio, cantidad) {
        let parcial = precio * cantidad;
        return parcial;
    }
    return (
        <div>
            <h1>{product.title}</h1>
            <img className="detail-img" src={product.image} alt={product.title} />
            <p>{product.detail}</p>
            <p>Precio: {product.price} $</p>
            <p>Stock: {product.stock}</p>
            <ItemCount less={less} more={more}  />
            <p>cantidad deseada:{counter}</p>
            <p>total: {totalParcial(product.price, counter)}</p>
            <button onClick={handleClick}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemDetail