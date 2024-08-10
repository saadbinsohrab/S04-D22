function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
function substruct(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divided(num1,num2){
    return num1 / num2;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        const total = add(a,b);
        return total;
    }
    else if(operation === 'substruct'){
        return substruct(a,b);
    }
    else if(operation === 'multiply'){
        return multiply(a,b);
    }
    else if(operation === 'divided'){
        return divided(a,b);
    }
}

const result = calculator(9,5,'multiply');
console.log(result);        //cl= 45