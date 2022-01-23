import { products } from "../items/Item";

function ItemListContainer() { 
    return(
    <ul>
        {products.map((product) => (
            <li key={ product.id }> {product.name} precio: {product.price} </li>
        ))}
    </ul>
    )
}

export default ItemListContainer;