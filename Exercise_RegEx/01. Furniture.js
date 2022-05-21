function solve(input){
///>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qnt>\d+)
let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qnt>\d+)/;
let furniture = [];
let total = 0;

while (input[0] != 'Purchase'){
    let line = input.shift();
    let match = pattern.exec(line);
    if (match != null ){
        let { name, price, qnt} = match.groups;
        price = Number(price);
        qnt = Number(qnt);
        total += price * qnt;
        furniture.push(name);

    }
}
console.log('Bought furniture:');
for (let item of furniture){
    console.log(item);
}
console.log('Total money spend: ' + total.toFixed(2));
}
solve([">>Sofa<<312.23!3",
">>TV<<300!5",
">Invalid<<!5",
"Purchase"]
)