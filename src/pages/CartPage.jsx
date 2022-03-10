import { useCart } from "../context/CartContext";
import * as React from "react";
import { getFirestore } from "../firebase";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react/cjs/react.development";

const CARRITO = []


const CartPage = () => {
    const { cart , removeItem} = useCart();
    function totalParcial(price, quantity) {
        let parcial = price * quantity
        return parcial
    }
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState(null);


    let navigate = useNavigate();
    const getTotal = () => {
        let total = 0;
        CARRITO.forEach((element) => {
            total += element.item.price * element.item.quantity;
        });
        return total;
    };

    const handleSubmit = (evt) =>{
        evt.preventDefault()

        if(!name || !phone){
            console.log('por fabor llene los campos');
            return false;
        }

        const newOrder = {
            buyer:{name, phone},
            items: cart, 
            total: getTotal(cart),  
        };
        console.log(newOrder);
        const db = getFirestore()
        db.collection('orders')
        .add(newOrder)
        .then((res)=>{console.log('compra realizada exitosamente', res.id);
        navigate(`/thanks/${res.id}`);
        })
        .catch((err)=>console.log("hubo un error", err));
    };

    return (
        <div>
            <h1>Carrito</h1>
            {cart.map((purchase) => {
                return (
                    <div key={purchase.item.id}>
                        <p>{purchase.item.title}</p>
                        <p>Cantidad: {purchase.quantity}</p>
                        <p> Semi total: {totalParcial( purchase.item.price, purchase.quantity)} $</p>
                        <button onClick={()=>removeItem(purchase.item.id)}>remove</button>
                    </div>
                ); 
            })}
            <div className="formulario">
            <form className="CheckOutForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" className="rm-check-input" name="name" placeholder="Escriba su nombre" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefono</label>
                    <input type="number" id="phone" name="phone" placeholder="Escriba su telefono" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <input type="submit" className="button" value="Finalizar compra" />
            </form>
            </div>
        </div>
    );
}

export default CartPage;