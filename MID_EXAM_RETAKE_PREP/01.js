function solve(input){
    let wantedXP = Number(input.shift());
    let battles = Number(input.shift());
    let xp = 0;
    let countBatlles = 0;

    for (let i = 0; i < battles; i++){
        let current = Number(input[i]);
        countBatlles++;

        if (countBatlles % 3 === 0){
            xp += 1.15*(current)
        } else if (countBatlles % 5 === 0){
            xp += 0.9*(current)
        } else if (countBatlles % 15 === 0){
            xp += 1.05*(current)
        } else {
            xp += current;
        }

        if (xp >= wantedXP){
            console.log(`Player successfully collected his needed experience for ${countBatlles} battles.`);
            return;
        }


    }
    if (xp < wantedXP){
        let need = wantedXP - xp;
        console.log(`Player was not able to collect the needed experience, ${need.toFixed(2)} more needed.`);
    } else {
        console.log(`Player successfully collected his needed experience for ${countBatlles} battles.`);
    }
    
    
}
/*
solve([500,
    5,
    50,
    100,
    200,
    100,
    20])
*/
solve([400,
    5,
    50,
    100,
    200,
    100,
    20])
    
    
    
    