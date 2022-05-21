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
            case 'Combine Items ':
                combine(products, item, newItem)
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
        function combine(list, item, newItem){
            if (list.includes(item)){
                list.splice(list.indexOf(item) + 1,0,newItem);
                
        
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
solve([ 'Iron, Wood, Sword', 
'Collect - Gold', 
'Drop - Wood', 
'Craft!' ])