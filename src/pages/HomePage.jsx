import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from 'react';
import "./styles.scss";
import Item from "../components/ItemCard";
import { getFirestore } from "../firebase";


// const URL = 'http://localhost:3500/items'

const HomePage = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    React.useEffect(() => {
        const db = getFirestore();
        const productCollection = db.collection("productos");
        //.where("categoryId" , "==", 1)
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
        // 1:22:10
        

    //     setIsLoading(true)
    //     fetch(URL)
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((err) => setError(err))
    //         .finally(() => setIsLoading(false));
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
                    {data.map((items) => {
                        return (
                            <Item key={items.id} product={items} />          
                        );
                    })}
                </ul>
            </div>
        )
    }
}

//     return (
//         <div>
//             <h1>Home Page</h1>
//             <h3>Esto es geek spot, el lugar en donde siempre encontras lo que necesitas</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus eius laboriosam possimus alias fuga ipsum tenetur velit nesciunt dolorum, officiis cupiditate quisquam natus placeat dignissimos repellendus, neque, porro error!</p>
//             <button onClick={goToProducts}>Ir a la pagina de productos</button>

//         </div>
//     );
// };

export default HomePage;