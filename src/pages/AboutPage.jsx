import { Outlet } from "react-router-dom";
import { getFirestore } from "../firebase";

const PRODUCTS =   [
    
    {
        "title": "PlayStation 5",
        "price": 500,
        "image": "https://store.sony.com.ar/arquivos/menu-ps5.png?v=637300051469000000",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 3,
        "categoryId": 1

    },
    {
        "title": "PlayStation 4",
        "price": 300,
        "image": "https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$facebook$",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 9,
        "categoryId": 2

    },
    {
        "title": "PlayStation 3",
        "price": 100,
        "image": "https://www.pngall.com/wp-content/uploads/2016/07/PlayStation-PNG-Image-PNG-Image.png",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 15,
        "categoryId": 3
    },
    {
        "title": "Nintendo Switch",
        "price": 350,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.png/1280px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.png",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 17,
        "categoryId": 4
    },
    {
        "title": "Xbox Series S",
        "price": 450,
        "image": "https://res-4.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1599666268/vvna09tuxefif8kwhi9a.png",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 10,
        "categoryId": 5
    },
    {
        "id": 6,
        "title": "Xbox 360",
        "price": 200,
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Xbox_360_S.png",
        "category": "consolas",
        "detail": "pequeño detalle del producto",
        "stock": 5,
        "categoryId": 6
    },
    {
        "id": 7,
        "title": "Amazon echo dot",
        "price": 300,
        "image": "https://images.unsplash.com/photo-1568910748155-01ca989dbdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "category": "parlantes",
        "detail": "pequeño detalle del producto",
        "stock": 3,
        "categoryId": 7
    },
    {
        "id": 8,
        "title": "Google Home",
        "price": 275,
        "image": "http://catalogo.claro.com.ec/uploads/imgs/productos/google-home-mini/blanco/zoom/01-google-home-mini-blanco-front.png",
        "category": "parlantes",
        "detail": "pequeño detalle del producto",
        "stock": 9,
        "categoryId": 8
    },
    {
        "id": 9,
        "title": "Bose Soundlink",
        "price": 220,
        "image": "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/soundlink_mini_II_carbon_EC.psd/jcr:content/renditions/cq5dam.web.320.320.png",
        "category": "parlantes",
        "detail": "pequeño detalle del producto",
        "stock": 1, 
        "categoryId": 9
    },
    {

        "title": "JBL Flip 5",
        "price": 280,
        "image": "https://www.jbl.es/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf4187a12/JBL_Flip5_Product%20Photo_Side_MidnightBlack-1605x1605-DS3.png?sw=537&sfrm=png",
        "category": "parlantes",
        "detail": "pequeño detalle del producto",
        "stock": 5,
        "categoryId": 10
    },
    {

        "title": "ASUS zenbook 14 UX425",
        "price": 900,
        "image": "https://dlcdnwebimgs.asus.com/gain/35665ff7-8414-487d-b19e-ceaaf51b1e7d/w800",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 22,
        "categoryId": 11
    },
    {

        "title": "MacBook pro 13",
        "price": 1200,
        "image": "https://cdn.pixabay.com/photo/2020/06/26/12/21/macbook-pro-5342546_1280.png",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 16,
        "categoryId": 12
    },
    {

        "title": "MacBook air 13",
        "price": 900,
        "image": "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP825/macbookair.png",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 28,
        "categoryId": 13
    },
    {

        "title": "HP Omen",
        "price": 800,
        "image": "https://www.hp.com/mx/es/images/02_hero_r1_700x500_tcm230_2638293_tcm230_2638346_tcm230-2638293.png",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 9,
        "categoryId": 14
    },
    {

        "title": "Lenovo Thinkbook",
        "price": 650,
        "image": "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-series-14s-hero.png?context=bWFzdGVyfHJvb3R8OTE1OTF8aW1hZ2UvcG5nfGg5Yi9oM2IvMTExNDA0NzA0MDcxOTgucG5nfGUxZDVkNjkwZmFlODFlM2VhZTc3YjEyY2NmMjljYTMwZjVjNDk2NDIzMmM3NzU0Yjk3NGJiNzIzY2NlYjczM2E",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 15,
        "categoryId": 15
    },
    {

        "title": "Lenovo Yoga",
        "price": 400,
        "image": "https://www.lenovo.com/medias/lenovo-laptop-yoga-710-14-hero.png?context=bWFzdGVyfHJvb3R8NjA1NDd8aW1hZ2UvcG5nfGgyNC9oZTQvOTQ1MjE3NzQyNDQxNC5wbmd8MDIwNmM0NGQ3ZWNjNGMzMGY0NmViZmVmYjA1MzE5YWE1ZDA1NGIwYjU5MmIwYmFkNzZmYWMzZTA3ZDQwMzMzNA",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 5,
        "categoryId": 16
    },
    {

        "title": "Dell Inspiron 15",
        "price": 750,
        "image": "https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_3501_non-touch/in3501nt_cnb_00055lf110_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=647&qlt=100,0&resMode=sharp2&size=647,402",
        "category": "notebooks",
        "detail": "pequeño detalle del producto",
        "stock": 6,
        "categoryId": 17
    },
    {

        "title": "Logitech G435",
        "price": 200,
        "image": "https://resource.logitechg.com/content/dam/gaming/en/products/g435/swatches/g435-gaming-headset-gallery-1-black.png",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 2,
        "categoryId": 18
    },
    {

        "title": "Logitech G335",
        "price": 60,
        "image": "https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g335/g335-black-gallery-1.png?v=1",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 12,
        "categoryId": 19
    },
    {

        "title": "logitech G305",
        "price": 80,
        "image": "https://www.logitechg.com/content/dam/products/gaming/gaming-mice/g305-lightspeed-wireless-gaming-mouse/g304-g305-lightspeed-wireless-gaming-mouse21.png",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 40,
        "categoryId": 20
    },
    {

        "title": "Red Dragon Teclado 60%",
        "price": 95,
        "image": "https://redragon.es/content/uploads/2021/07/DRAGONBORN.png",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 5,
        "categoryId": 21
    },
    {

        "title": "Red Dragon Teclado 80%",
        "price": 75,
        "image": "http://d2r9epyceweg5n.cloudfront.net/stores/001/418/967/products/redragon-k522rgb-kumara-white-11-aacca7e8bfdefa5db316138599907615-640-0.png",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 7,
        "categoryId": 22
        
    },
    {

        "title": "Keychron 65%",
        "price": 185,
        "image": "https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/pf-6fee5ffe--20213516269.jpg?v=1614933099",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 15,
        "categoryId": 23
    },
    {

        "title": "Red Dragon teclado 100%",
        "price": 80,
        "image": "https://cdn.shopify.com/s/files/1/2695/9506/products/Bluetooth2.4GhzWiredUltra-ThinLowProfileGamingKeyboard_450x450.png?v=1626334705",
        "category": "perifericos",
        "detail": "pequeño detalle del producto",
        "stock": 25,
        "categoryId": 24
    }
];     


const AboutPage = () => {
    const db = getFirestore();
    const collection =db.collection('products')

    const createProductOnFirestore = () => {
        PRODUCTS.forEach((product) => {
        collection
            .add(product)
            .then((res)=>console.log('producto agreagdo:', res.id))
            .catch((err) => console.log('se rompio todo:', err));
    });
};
    return (
        <div>
            <h1>About Page</h1>
            <Outlet/>
            <button onClick={createProductOnFirestore}>Agregar a firestore</button>
        </div>
    );
};

export default AboutPage;