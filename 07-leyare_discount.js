function layere_discount(quantity) {
    const f100 = 5;
    const s100 = 4;
    const t100 = 3;
    if(quantity <= 100){
        return quantity * f100;
    }
    else if(quantity <= 200){
        const f100total = 100 * f100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * s100;
        return f100total+ remainingTotal;
    }
    else{
        const f100total = 100 * f100;
        const s100total = 100 * s100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * t100;
        return f100total + s100total + remainingTotal;
    }
}
const ticket = layere_discount(201);
console.log(ticket);           //cl= 903
