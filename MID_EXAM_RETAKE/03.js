function solve(input){
    let products = input.shift().split('|');
    
    let line = input.shift();
    
    while (line != 'Shop!'){
        let [command, item1, item2] = line.split('%');
    
        switch (command) {
            case 'Important':
                important(products, item1)
                break;
            case 'Remove':
                remove(products, item1)
                break;
            case 'Swap':
                swap(products, item1, item2)
                break;
            case 'Add':
                add(products, item1)
                break;
        }
    
        line = input.shift();
    }
    
    for (let char of products){
        let i = products.indexOf(char);
        console.log(`${i+1}. ${char}`);
    }


    function important(list, item){
        if (list.includes(item) == false){
            list.unshift(item);
        } else {
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.unshift(item)


        }
        }
        function add(list, item){
            if (list.includes(item) == false){
                list.push(item);
            } else {
                console.log('The product is already in the list.')
            }
        }
        function remove(list, item){
            if (list.includes(item) == true){
               let index = list.indexOf(item);
               list.splice(index, 1)
            
            } else {
                console.log(`Product ${item} isn't in the list.`)
            }
        
        }
        function swap(list, item1, item2){
            if (list.includes(item1) && list.includes(item2)){
                let index1 = list.indexOf(item1);
                let index2 = list.indexOf(item2);
                list[index1] = item2;
                list[index2] = item1;
        
            } else {
                if (list.includes(item1) == false){
                    console.log(`Product ${item1} missing!`)
                } else if (list.includes(item2) == false){
                    console.log(`Product ${item2} missing!`)
                }
            }
        
        }
    }
solve(["eggs|milk|bread|fish", 

"Important%bread", 

"Swap%eggs%tomato", 

"Shop!"]) 

solve(["apple|cheese|salt|bananas", 

"Remove%cheese", 

"Swap%salt%bananas", 

"Shop!"]) 
