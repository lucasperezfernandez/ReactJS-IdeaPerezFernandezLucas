import React from "react";

const ItemCount = ({less , more}) =>{
    return (
        <>
        <button onClick={less}>-</button>
        <button onClick={more}>+</button>
        </>
    );
}

export default ItemCount