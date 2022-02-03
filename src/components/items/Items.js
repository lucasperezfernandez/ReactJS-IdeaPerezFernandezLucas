import { useEffect, useState } from 'react';
import Item from '../ItemCard';
import "./styles.scss";


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
        return <p>Cargando los poke...</p>
    } else if (error) {
        return <p>Ha habido un error {error.message}</p>
    } else {
        return (
            <div>
                <h1>Productos</h1>
                <ul className='item-container'>
                    {poke.map((items) => {
                        return (
                            <Item key={items.id} product={items}/>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
export default GetProducts;