function solve(input){
    let products = input.shift().split(', ');
    
    let line = input.shift();
    
    while (line != 'Craft!'){
        let [command, item, newItem] = line.split(' - ');
    
        switch (command) {
            case 'Collect':
                collect(products, item)
                break;
            case 'Drop':
                drop(products, item)
                break;
            case 'Combine Items':
                combine(products, pair)
                break;
            case 'Renew':
                renew(products, item)
                break;
        }

    
        line = input.shift();
    }
    
    console.log(products.join(', '));

    function collect(list, item){
        if (list.includes(item) == false){
            list.push(item);
        
        }
        }
        function drop(list, item){
            if (list.includes(item) == true){
               let index = list.indexOf(item);
               list.splice(index, 1)
            
            }
        
        }
        function combine(list, pair){
            let items = pair.splice(':')
            let firstItem = items[0];
            let newItem = items[1];

            if (list.includes(firstItem) == true){
                let index = list.indexOf(firstItem);
                list.splice(index,0,newItem);
                
        
            }
        
        }
        function renew(list, item){
        
            if (list.includes(item) == true){
                let index = list.indexOf(item);
                list.splice(index, 1)
                list.push(item);
                
        
            }
        }
}
    
    // "Collect - {item}" – Receiving this command, you should add the given item in your inventory. If the item already exists, you should skip this line.
    // "Drop - {item}" – You should remove the item from your inventory, if it exists.
    // "Combine Items - {oldItem}:{newItem}" – You should check if the old item exists, if so, add the new item after the old one. Otherwise, ignore the command.
    // "Renew – {item}" – If the given item exists, you should change its position and put it last in your inventory.
    
    solve([ 'Iron, Wood, Sword', 
            'Collect - Gold', 
            'Drop - Wood', 
            'Craft!' ])
    solve([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
      ]
      )