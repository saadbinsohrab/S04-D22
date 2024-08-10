function discount (quantity){
    if(quantity<=100){
        const price = 5 * quantity;
        return price;
    }
    else if(quantity<=200){
        const price = 4 * quantity;
        return price;
    }
    else{
        const price = 3 * quantity;
        return price;
    }
}
const ticket = discount(201);
console.log(ticket);           //cl= 603
