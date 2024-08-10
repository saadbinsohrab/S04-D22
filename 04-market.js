const products = [
    {name: 'sirt', price: 500},
    {name: 'pant', price: 700},
    {name: 'shoe', price: 1000},
];

function sopping (products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}
const market = sopping(products);
console.log(market);     //cl= 2200