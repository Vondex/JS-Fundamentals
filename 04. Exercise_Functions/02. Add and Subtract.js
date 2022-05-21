function addAndSubtract(first, second, third){
function sum(first, second) {
    let result = first + second;
    return result
}
function subtract (first, second){
    let result = first - second;
    return result;
}
let numSum = sum(first, second);
let result = subtract(numSum, third)
return result;

}
let result = addAndSubtract(23, 6, 10)
console.log(result)
