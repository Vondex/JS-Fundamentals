function solve(n){
if (n % 4 === 0 && n % 100 !== 0 || n % 400 === 0){
    console.log('yes');
} else {
    console.log('no');
}
}
solve(1984)
solve(2003)
solve(4)
