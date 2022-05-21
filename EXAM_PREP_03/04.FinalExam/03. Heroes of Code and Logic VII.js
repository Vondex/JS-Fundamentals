function solve(input){
 
    let n = Number(input.shift());
 
    let catalog = {};
 
    for(let i = 0; i< n; i++){
        let [name, HitPoints, ManaPoints] = input.shift().split(' ')
 
        catalog[name] = {
            HitPoints: Number(HitPoints),
            ManaPoints: Number(ManaPoints)
        }
    }
 
    while(input[0] != 'End'){
 
        let line = input.shift().split(' - ');
        let command = line[0];
        let name = line[1];
 
        if(command === 'CastSpell'){
            let points = Number(line[2]);
            let spell = line[3];
 
            if(catalog[name].ManaPoints >= points){
                catalog[name].ManaPoints -= points
                console.log(`${name} has successfully cast ${spell} and now has ${catalog[name].ManaPoints} MP!`);
 
            }else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
 
        } else if(command === 'TakeDamage'){
 
            let damage = Number(line[2]);
            let attacker = line[3];
 
            if(catalog[name].HitPoints - damage > 0){
 
                catalog[name].HitPoints = catalog[name].HitPoints - damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${catalog[name].HitPoints} HP left!`);
 
            } else{
                delete catalog[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
 
        } else if(command === 'Recharge'){
 
            let recharge = Number(line[2]);
 
 
            if(catalog[name].ManaPoints + recharge > 200){
                let result = 200 - catalog[name].ManaPoints;
                catalog[name].ManaPoints = 200;
                console.log(`${name} recharged for ${result} MP!`);
            } else{
                catalog[name].ManaPoints += recharge;
                console.log(`${name} recharged for ${recharge} MP!`);
            }
 
 
 
        }else if(command === 'Heal'){
            let heal = Number(line[2]);
 
            if(catalog[name].HitPoints + heal > 100){
                let result = 100 - catalog[name].HitPoints;
                catalog[name].HitPoints = 100;
 
                console.log(`${name} healed for ${result} HP!`);
            } else{
                catalog[name].HitPoints += heal;
                console.log(`${name} healed for ${heal} HP!`);
            }
 
 
        }
    }
 
    let sorted = Object.entries(catalog).sort((a,b) => {
 
        let hpA = a[1].HitPoints
        let hpB = b[1].HitPoints
 
        let nameA = a[0]
        let nameB = b[0]
 
        return (hpB-hpA) || nameA.localeCompare(nameB);
 
    })
 
    for(let [name, points] of sorted){
        console.log(`${name}\n  HP: ${points.HitPoints}\n  MP: ${points.ManaPoints}`);
    }
 
}
solve()