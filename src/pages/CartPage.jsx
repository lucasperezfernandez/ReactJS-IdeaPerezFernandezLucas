import { useCart } from "../context/CartContext"

const CartPage = () => {

    const { cart , removeItem} = useCart();

    function totalParcial(price, quantity) {
        let parcial = price * quantity
        return parcial
    }

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
        </div>
    );
}

export default CartPage;