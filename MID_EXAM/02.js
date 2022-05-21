function solve(input){
    let products = input.shift().split(', ');
    let index =  0;
    
    for (let line of input){
        if (line == 'No More Money'){
            break;
        }
        let offset = Number(line.split(" ")[1]);
        index += offset;
        let [command, item, newItem] = line.split(' ');

    switch (command) {
        case 'Urgent':
            outOfStock(products, item)
            break;
        case 'Unnecessary':
            required(products, item)
            break;
        case 'Correct':
            last(products, item, newItem)
            break;
        
    }

    line = input.shift();
    }
    console.log(products.join(' '));

function outOfStock(list, item){
    if (list.includes(item) == true){
        item = '';
        
    
    }
    }
    
    function required(list, item, i){
        if (index >= 0 && index<products.length){
            list[i] = item
    
        }
    
    }
    function last(list, item){
    
        
            let ind = list.indexOf(item);
            list.splice(ind, 1)
            list.push(item);
            
    
        
    }
}
solve([(["Vanilla, Chocolate, Raspberry, Chocolate ",
"OutOfStock Chocolate",
"Required BBB 3",
"No More Money"])
])