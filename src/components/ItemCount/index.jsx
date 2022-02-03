import React from "react";

const ItemCount = ({less , more, agregarCarro}) =>{
    return (
        <>
        <button onClick={less}>-</button>
        <button onClick={more}>+</button>
        <div></div>
        <button onClick={agregarCarro}>agregar al Carro</button>
        
        </>
    );
}

export default ItemCount