function solve(n){
for (let i = 1; i <= n; i++){
    let result = '';

    for (let j = 1; j <= i; j++){
        result += ` ${i}`
    }
    console.log(result);
}
}
solve(4);