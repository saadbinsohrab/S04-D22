const products = [
    {name: 'sirt', price: 500, quantity: 2},
    {name: 'pant', price: 700, quantity: 1},
    {name: 'shoe', price: 1000, quantity: 0},
];
function sopping (products){
    let sum = 0;
    for(const product of products){
        let total = product.price * product.quantity;
        sum = sum + total;
    }
    return sum;
}
const market = sopping(products);
console.log(market);     //cl= 1700