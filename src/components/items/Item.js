export const products = [
    {id: 0, name: "Macbook Pro", price: 1200},
    {id: 1, name: "PlayStation", price: 600},
    {id: 2, name: "Nintendo Switch", price: 450},
    {id: 3, name: "Parlante", price: 150},
];


export function getProductos() {
    return new Promise(( resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
}
