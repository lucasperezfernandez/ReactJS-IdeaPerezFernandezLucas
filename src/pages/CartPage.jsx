import { useCart } from "../context/CartContext";
import * as React from "react";
import { getFirestore } from "../firebase";
import { useNavigate } from "react-router-dom";

const CARRITO = [
    {
    item: 
        {
            "id": 1,
            "title": "PlayStation 5",
            "price": 500,
            "image": "https://store.sony.com.ar/arquivos/menu-ps5.png?v=637300051469000000",
            "category": "consolas",
            "detail": "pequeño detalle del producto",
            "stock": 3,
            "categoryId": 1,
            'quantity': 10,
        },
        
    },
    
    {
    item:{
        "title": "Paraguas ",
        "price": 50,
        "image": "https://store.sony.com.ar/arquivos/menu-ps5.png?v=637300051469000000",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 3,
        "categoryId": 2,
        'quantity':5,
    },
    
    },
]


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
            items: CARRITO, 
            total: getTotal(CARRITO),  
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
            {CARRITO.map((cart)=>{
                return(
                            <div key={cart.item.id}>
                                <p>Nombre: {cart.item.title}</p>
                                <p>precio: {cart.item.price}</p>
                            </div>)
                        })}
            {/* {cart.map((purchase) => {
                return (
                    <div key={purchase.item.id}>
                        <p>{purchase.item.title}</p>
                        <p>Cantidad: {purchase.quantity}</p>
                        <p> Semi total: {totalParcial( purchase.item.price, purchase.quantity)} $</p>
                        <button onClick={()=>removeItem(purchase.item.id)}>remove</button>
                    </div>
                ); 
            })}*/}
            <h2>Intrduzca sus datos:</h2>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', border:' 1px solid red',}}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name"    name="name" placeholder="Escriba su nombre" value={name} onChange={e=>setName(e.target.value)}/>
                <label htmlFor="phone">Telefono</label>
                <input type="number" id="phone"    name="phone" placeholder="Escriba su telefono" value={phone} onChange={e=>setPhone(e.target.value)} />
                <input type="submit" value="Finalizar compra" />
            </form>
        </div>
    );
}

export default CartPage;