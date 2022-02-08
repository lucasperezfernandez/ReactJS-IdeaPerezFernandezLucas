import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import "./styles.scss";
import React from "react";
import { CartContext } from "../context/CartContext";

const ProductDetailPage = () => {
    let navigate = useNavigate()
    const goToCart = () => {
        navigate('/cart')
    }
    
    const {productId} = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [counter, setCounter] = React.useState(1)
    
    const less = () => {
        setCounter((prevState) => prevState - 1);
        if( counter <= 0 ){
            alert("Cantidad minima");
            setCounter(0)
        }
    }
    const more = (evt) => {
        evt.stopPropagation();
        setCounter((prevState) => prevState + 1)
        if( counter >= product.stock){
            alert("No puede superar la cantidad de stock maxima")
            setCounter(product.stock);
        }
    }
    const agregarCarro = () =>{
        let total = product.price * counter;
        console.log("Se agrega el siguiente monto a pagar:" + total + "$");
        setCounter(0);
        navigate('/cart');
    }
    function totalParcial(precio, cantidad) {
        let parcial = precio * cantidad;
        return parcial;
    }

    // console.log (5 === +productId);
    useEffect(()=>{
        const URL = `http://localhost:3500/items/${productId}`;
        setIsLoading(true);
        fetch(URL)
            .then(res => res.json())    
            .then(data=> setProduct(data))
            .finally(()=> setIsLoading(false));
    }, [productId]);
    if(isLoading || !product) return <p>Cargando...</p>;
        return(
            
            <div>
                <h1>{product.title}</h1>
                <img className="detail-img" src={product.image} alt={product.title} />
                <p>{product.detail}</p>
                <p>Precio: {product.price} $</p>
                <p>Stock: {product.stock}</p>
                <p>cantidad deseada:{counter}</p>
                <ItemCount less={less} more={more} agregarCarro={agregarCarro}  />
                <p>total: {totalParcial(product.price, counter)}</p>
            </div>
        );
};

export default ProductDetailPage;