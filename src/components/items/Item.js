import { useEffect, useState } from 'react';



function GetProducts() {
    const [poke, setPoke] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const URL = 'http://localhost:3500/items'

        setIsLoading(true)
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setPoke(json))
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p>Carrgando los poke...</p>
    } else if (error) {
        return <p>Ha habido un error {error.message}</p>
    } else {
        return (
            <div>
                <h1>Productos</h1>
                <ul>
                    {poke.map((items) => {
                        return <li key={items.id}>{items.title}, <p>precio: {items.price}.</p> <p>Detalle: {items.detail}</p></li>;
                        
                    })}
                </ul>
            </div>
        )
    }
}
export default GetProducts;