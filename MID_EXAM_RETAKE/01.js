function solve(input){
let neededMoney = Number(input[0]);
let months = Number(input[1]);
let counterMonths = 0;
let currentMoney = 0;
let salary = 0.25 * neededMoney;

while(true){
    if (counterMonths < months){
    counterMonths++;
    
    if (counterMonths % 2 != 0 && counterMonths > 1){
        let spentMoney = 0.16 * currentMoney;
        currentMoney -= spentMoney;
        currentMoney += salary;
    } else if (counterMonths % 4 == 0){
        currentMoney = 1.25*currentMoney + salary;  
    } else {
        currentMoney += salary;
    }
    
    } else {
        break;
    }
}
if (currentMoney >= neededMoney){
    let souveniers = currentMoney - neededMoney;
    console.log(`Bravo! You can go to Disneyland and you will have ${souveniers.toFixed(2)}lv. for souvenirs.`)
} else {
    let money = neededMoney - currentMoney;
    console.log(`Sorry. You need ${money.toFixed(2)}lv. more.`)
}
}
solve(["1000",
"4"])
solve(["3265",
"3"])

