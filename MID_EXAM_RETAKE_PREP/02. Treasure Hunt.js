function solve(input) {
 
    let chestContent = input.shift().split('|');
    let sum = 0;
    let result = 0;
 
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');
        let task = line.shift();
 
        if (task != 'Yohoho!') {
 
            switch (task) {
                case 'Loot':
                    for (let i = 0; i < line.length; i++) {
                        let item = line[i];
                        if (chestContent.includes(item) === false) {
                            chestContent.unshift(item);
                        } else {
                            continue;
                        }
                    }
                    break;
                case 'Drop':
                    let index = Number(line[0]);
                    if (index >= 0 && index < chestContent.length) {
                        let removed = chestContent.splice(index, 1);
                        chestContent.push(removed.join(' '));
                    }
                    break;
                case 'Steal':
                    let number = Number(line[0]);
                    let startIndex = Math.max(0, chestContent.length - number);
                    let removed = chestContent.splice(startIndex, chestContent.length);
                    console.log(removed.join(', '))
                    break;
            }
 
        }
    }
    if (chestContent.length <= 0) {
        console.log('Failed treasure hunt.')
    } else {
        for (let i = 0; i < chestContent.length; i++) {
            let item = chestContent[i];
            let itemCount = item.length;
            sum += itemCount;
            result = sum / chestContent.length;
        }
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    }
 
}

solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
