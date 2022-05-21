function oddAndEven (number) {
    let numAsString = number.toString( );
    let oddSum = 0;
    let evenSum = 0;

    for(let digit of numAsString){
        if (Number(digit) % 2 === 0){
            evenSum += Number(digit);

        } else {
            oddSum += Number(digit);

        }
    }
    let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    return resultString;
}
let result = oddAndEven(1000435);
console.log(result);