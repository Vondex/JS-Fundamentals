function solve(input){
let energy = Number(input.shift());
let wins = 0;

for (let i=0; i<input.length; i++){
    if (input[i] === 'End of battle'){
        console.log(`Won battles: ${wins}. Energy left: ${energy}`)
        break;
    }

    if (energy < Number(input[i])){
        console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`)
        break;
    }
    energy -= Number(input[i]);
    wins++;
    if (wins % 3 === 0){
        energy += wins;
    }

}
}
solve(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
solve(["200",
"54",
"14",
"28",
"13",
"End of battle"])
