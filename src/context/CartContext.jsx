import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity, price) => {
        const newItem = { item, quantity, price };
        console.log("Se agrego al carrito:" + newItem)
        setCart((prevState) => [...prevState, newItem]);
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((element) => element.item.id !== id));
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext)