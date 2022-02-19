import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import React from "react";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from "../firebase";

const ProductDetailPage = () => {
    
    const {productId} = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // console.log (5 === +productId);
    useEffect(()=>{
        const db = getFirestore();
        const productsCollection = db.collection("products");
        const selectedProduct = productsCollection.doc(productId);

        setIsLoading(true)
        selectedProduct
        .get()
        .then((response) => {
            if (!response.exists) console.log("El producto no existe");
            setProduct({...response.data(), id: response.id})
        })
        .finally(() => setIsLoading(false));

        
        // const URL = `http://localhost:3500/items/${productId}`;
        // setIsLoading(true);
        // fetch(URL)
        //     .then(res => res.json())    
        //     .then(data=> setProduct(data))
        //     .finally(()=> setIsLoading(false));
    }, [productId]);
    if(isLoading || !product) return <p>Cargando...</p>;
        return(
            <div className="productDetail">
                <ItemDetail product={product} />
            </div>
        );
};

export default ProductDetailPage;