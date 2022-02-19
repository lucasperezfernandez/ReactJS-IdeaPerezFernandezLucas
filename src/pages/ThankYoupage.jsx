import * as React from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ThankYouPage = () => {
const {orderId} = useParams()
const [order, setOrder] = React.useState({})

React.useEffect(()=>{
    const db = getFirestore();
    db.collection('orders')
    .doc(orderId)
    .get()
    .then((res)=> setOrder({ id: res.id, ...res.data()}));
}, [orderId]);

    return(
        <div>
            <h1>Gracias por su compra, sr/srta. </h1>
            <h2>Detalle de su compra:</h2>
            <p>  </p>
        </div>
    )
}

export default ThankYouPage;