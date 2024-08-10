const highest = [5,45,56,15,89,15,12,126,569,554,69];
function getMax (numbers){
    let large = numbers[0];
    for(const number of numbers){
        if(large<number){
            large = number;
        }
    }
    return large;
}

const max = getMax(highest);
console.log(max);            //cl= 569