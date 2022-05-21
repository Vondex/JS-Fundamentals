function solve(input){
let daysOfPirating = Number(input[0])
let dailyPlunder = Number(input[1])
let expectedPlunder = Number(input[2]);
let plunder = 0;
let days = 0;

for (let i = 0; i < daysOfPirating; i++){

    plunder += dailyPlunder;
    days++;
    
    if(days % 3 == 0){
        let additionalPlunder = dailyPlunder * 0.5
        plunder += additionalPlunder
    } if (days % 5 == 0){
        plunder -= 0.3*(plunder);
    } 
    

}
if  (plunder >= expectedPlunder){
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`)
} else {
    let percentage = (100 * plunder) / expectedPlunder;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
}


}
solve(["5",
"40",
"100"])
solve(["10",
"20",
"380"])

