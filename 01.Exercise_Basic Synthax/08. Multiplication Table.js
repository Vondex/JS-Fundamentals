function solve(n){
    let output = '';

    for (let i = 1; i <= 10; i++) {
        output += `${n} X ${i} = ${n * i}\n`
        
        
    }
    console.log(output);
}
solve(5)