import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import "./styles.scss";

const ProductDetailPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);
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
                <ItemCount stock={product.stock}/>
                <button >Total</button>
            </div>
        );
};

export default ProductDetailPage;