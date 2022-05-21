function solve(m, n){
    let resultString = '';
    let sum = 0;
for (let i = m; i <= n; i++){
    resultString += ` ${i}`;
    sum += i;
}
console.log(resultString);
console.log(`Sum: ${sum}`);
}
solve(5, 10)