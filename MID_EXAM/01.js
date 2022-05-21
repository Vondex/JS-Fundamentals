function solve(input){
let neededXP = input.shift();
let battles = input.shift();
let xp = 0;
let battleCount = 0;

for (let i=0; i<input.length; i++){
    battleCount++;
    xp += input[i];
    if (battles == battleCount || xp >= neededXP){
        break;
    }
    if (battleCount % 3 === 0){
        xp += 1.15*(input[i])
    } else if (battleCount % 5 === 0){
        xp += 0.9*(input[i])
    } else if (battleCount % 15 === 0){
        xp += 1.05*(input[i])
    }
       
}
if (xp>=neededXP){
    console.log(`Player successfully collected his needed experience for ${battleCount} battles.`)
} else {
    more = neededXP - xp;
    console.log(`Player was not able to collect the needed experience, ${more.toFixed(2)} more needed.`)
}




}
solve([500, 5, 50, 100, 200, 100, 30]);
