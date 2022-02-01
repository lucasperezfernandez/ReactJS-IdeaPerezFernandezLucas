import React from "react";

export default function ItemCount({stock}){
    const [counter, setCounter] = React.useState(1)

    const less = () => {
        setCounter(counter - 1);
        if( counter <= 0 ){
            alert("Cantidad minima");
            setCounter(0)
        }
    }
    const more = () => {
        setCounter(counter + 1);
        if( counter >= stock){
            alert("No puede superar la cantidad de stock maxima")
            setCounter(stock);
        }
    }
    return (
        <>
        <p>Cantidad deseada: {counter}</p>
        <button onClick={less}>-</button>
        <button onClick={more}>+</button>
        <button>Agregar al carrito</button>
        </>
    )
}