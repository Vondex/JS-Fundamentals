function distinctArray(numbers){
let resultArray = [];
for (let i=0; i<numbers.length; i++){
    let currentNumber = numbers[i];
    if (!resultArray.includes(currentNumber)){
        resultArray.push(currentNumber);

    }
}
console.log(resultArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])