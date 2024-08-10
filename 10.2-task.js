// Task -2:
// Find the friend with the smallest name.

const heights2 = ['rahimaa', 'rashed', 'robin', 'rafi', 'ron'];
function smallest_name (names){
    let lent = names[0].length;
    let small = '';
    for(const name of names){
        if(name.length < lent){
            lent = name.length;
            small = name;
        }
    }
    return small;
}
const result = smallest_name(heights2);
console.log(result);