// ---------------------------number--------------------------------
function multy(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    return num1 * num2;
 }
 const result = multy(5,8);
 console.log(result);

// ----------------------------string-------------------------------
 function full_name(fName,lName){
    if(typeof fName !== 'string' || typeof lName !== 'string'){
        return 'name should be a string';
    }
    return fName + ' ' + lName;
 }
const fullName = full_name('saad', 5);
console.log(fullName);

// ----------------------------object-------------------------------
function object(products){
    if(typeof products !== 'object'){
        return 'please provide an object';
    }
    else if(!products.color){
        return 'must have a color kye';
    }
    else if(typeof products.color !== 'string'){
        return ' should be a string';
    }
    else if(products.price <= 35000){
        return 'should be more price';
    }
    return products.price;
    Array.filter ()
}
const get_price = object({name: 'vivo', price: 35000, color: 'blue'});
console.log(get_price);

// ---------------------------array---------------------------------
function check_array(numbers){
    if(Array.isArray[numbers]=== false){
        return 'please provide an array';
    }
    return numbers[2];
}
const getArray = check_array([2,5,8,45,7]);
console.log(getArray);