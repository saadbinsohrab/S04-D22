// Task -1:
// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];
function lowest_number (numbers){
    let lowest = numbers[0];
    for(const number of numbers){
        if(number<lowest){
            lowest = number;
        }
    }
    return lowest;
}
const min = lowest_number(heights2);
console.log(min);                     //cl= 120

function min_number (numbers){
    const lowest = Math.min(...numbers);
    return lowest;
}
const lowNumber = min_number(heights2);
console.log(lowNumber);               //cl= 120