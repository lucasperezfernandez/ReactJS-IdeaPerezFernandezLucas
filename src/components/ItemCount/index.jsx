import React from "react";

export default function ItemCount(){
    let stock = 5;
    const [counter, setCounter] = React.useState(1)

    const less = () => {
        setCounter(counter - 1);
        if( counter <= 0 ){
            alert("Te arrepentiste? :(");
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
        <h2>Item re copado</h2>
        <img src="" alt="   " /><p>aca deberia haber una imagen</p>
        <h3>Cantidad deseada: {counter}</h3>
        <button onClick={less}>-</button>
        <button onClick={more}>+</button>
        </>
    )
}