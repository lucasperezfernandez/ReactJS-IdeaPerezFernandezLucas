import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from 'react';
import "./styles.scss";
import Item from "../components/ItemCard";
import { getFirestore } from "../firebase";



const HomePage = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    React.useEffect(() => {
        const db = getFirestore();
        const productCollection = db
        .collection("products")

        
        const getDataFromFirestore = async () => {
            setIsLoading(true);
            try{
            const response = await productCollection.get();
            if(response.empty) console.log("No hay productos");
            setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }catch (err){
            setError(err);
        }finally{
            setIsLoading(false)
        }
    }
        getDataFromFirestore();
        
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
    } else if (error) {
        return <p>Ha habido un error {error.message}</p>
    } else {
        return (
            <div>
                <h1>Productos</h1>
                <ul className='item-container'>
                    {data.map((product) => {
                        return (
                            <Item key={product.id} product={product} />          
                        );
                    })} 
                </ul>
            </div>
        )
    }
}
export default HomePage;