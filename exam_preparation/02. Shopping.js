function solve(input){
let products = input.shift().split('!');

let line = input.shift();

while (line != 'Go Shopping!'){
    let [command, item, newItem] = line.split(' ');

    switch (command) {
        case 'Urgent':
            urgent(products, item)
            break;
        case 'Unnecessary':
            unnecessary(products, item)
            break;
        case 'Correct':
            correct(products, item, newItem)
            break;
        case 'Rearrange':
            rearrange(products, item)
            break;
    }

    line = input.shift();
}

console.log(products.join(', '));
function urgent(list, item){
    if (list.includes(item) == false){
        list.unshift(item);
    
    }
    }
    function unnecessary(list, item){
        if (list.includes(item) == true){
           let index = list.indexOf(item);
           list.splice(index, 1)
        
        }
    
    }
    function correct(list, item, newItem){
        if (list.includes(item) == true){
            let index = list.indexOf(item);
            list[index] = newItem
    
        }
    
    }
    function rearrange(list, item){
    
        if (list.includes(item) == true){
            let index = list.indexOf(item);
            list.splice(index, 1)
            list.push(item);
            
    
        }
    }
}



solve(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'])