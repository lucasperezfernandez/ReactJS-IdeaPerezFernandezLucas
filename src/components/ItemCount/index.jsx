import React from "react";

const ItemCount = ({counter , setCounter}) =>{
    return (
        <div className="counterContainer">
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        <p>{counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
    );
}

export default ItemCount