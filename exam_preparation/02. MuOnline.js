function gameRoom(input) {
    let inputArr = input.split(`|`);
    let health = 100;
    let bitcoins = 0;
    let counter = 0;
 
    for (let room of inputArr) {
        let [comand, points] = room.split(` `);
        counter++;
 
        switch (comand) {
            case `potion`: health += Number(points);
                if(health > 100) {
                    points = 100 - (health - points);
                    health = 100;
                }
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case `chest`: bitcoins += Number(points);
                console.log(`You found ${points} bitcoins.`);
                break;
            default:
                health -= Number(points);
                if (health <= 0) {
                    break;
                } else {
                console.log(`You slayed ${comand}.`);
                }
        }
        if(health <= 0) {
            console.log(`You died! Killed by ${comand}.`);
            console.log(`Best room: ${counter}`);
            break;
        } else if (health > 100) {
            health = 100;
        } else {
            true;
        }
    }
    if (health > 0) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}

gameRoom(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
gameRoom(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);