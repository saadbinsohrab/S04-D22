const products = [
    {name: 'apple', price: 50000, color: 'blue', camera: '12pm'},
    {name: 'sasung', price: 30000, color: 'blue', camera: '12pm'},
    {name: 'xaimi', price: 20000, color: 'blue', camera: '12pm'},
    {name: 'wolton', price: 10000, color: 'blue', camera: '12pm'},
    {name: 'oppo', price: 15000, color: 'blue', camera: '12pm'},
    {name: 'vivo', price: 25000, color: 'blue', camera: '12pm'}
];

function chipest_phone (phones){
    let get = phones[0].price;
    for(const phone of phones){
        if(phone.price < get ){
            get = phone.price
        }
    }
    return get;
}

const getPhone = chipest_phone(products);
console.log(getPhone);          //cl= 10000
