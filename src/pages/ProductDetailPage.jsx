import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import React from "react";
import ItemDetail from "../components/ItemDetail";

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
            <div className="productDetail">
                <ItemDetail product={product} />
            </div>
        );
};

export default ProductDetailPage;