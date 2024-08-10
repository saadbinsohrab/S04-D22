function market (sirtQuantity,pantQuantity,shoeQuantity){
    const sirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 1000;

    const totalSirtPrice = sirtPrice * sirtQuantity;
    const totalPantPrice = pantPrice * pantQuantity;
    const totalShoePrice = shoePrice * shoeQuantity;

    const totalPrice = totalSirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
}
const shoping = market(1,1,0);
console.log('money needed ', shoping);  //cl= money needed  800