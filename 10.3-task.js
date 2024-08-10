// Task-3:
// Your task is to calculate the total budget required to buy electronics:

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget (laptop,tablet,mobile){
return laptop + tablet + mobile;
}
const total = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(total);      //cl= 70000