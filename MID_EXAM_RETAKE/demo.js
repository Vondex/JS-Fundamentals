function solve(input){
    let numbers = input.shift().split(' ');
    let line = input.shift()
    
    while (line != 'END'){
        let tokens = line.split(' ');
        let com1 = tokens[0];
        let com2 = tokens[1];
        let com3 = tokens[2];
    
        if (com1 == 'add' && com2 == 'to' && com3 == 'start'){
           tokens.splice(0, 3)
           numbers.unshift(tokens);
            
        } else if (com1 == 'add' && com2 == 'to' && com3 == 'end'){
            tokens.splice(0, 3)
            numbers.push(tokens);
    
        } else if (com1 == 'remove' && com2 == 'lower' && com3 == 'than'){
            let value = tokens[3];
            for (let i = 0; i < numbers.length; i++){
                if (value > numbers[i]){
                    let toRemove = numbers.indexOf(numbers[i]);
                    numbers.splice(toRemove, 1);
    
                }
    
            }
           
        } else if (com1 == 'remove' && com2 == 'greater' && com3 == 'than') {
            let value = Number(tokens[3]);
            for (let i = 0; i < numbers.length; i++){
                if (value < Number(numbers[i])){
                    let toRemove = numbers.indexOf(numbers[i]);
                    numbers.splice(toRemove, 1);
    
                }
    
            }
        } else if (com1 == 'remove' && com2 == 'at' && com3 == 'index'){
            let value = Number(tokens[3]);
            if (value >=0 && value < numbers.length){
                numbers.splice(value, 1);
    
    
            }
        } else if (com1 == 'find' && com2 == 'even'){
            findEven(numbers);
        } else if (com1 == 'find' && com2 == 'odd'){
            findOdd(numbers);
        }
    
    line = input.shift();
    }
    console.log(numbers.join(', '))
    
    
    
    function findOdd(list){
        let odd = [];
        for (let i = 0; i < list.length; i++){
            if (list[i] % 2 != 0){
                odd.push(list[i]);
                console.log(odd.join(' '));
            }
    
        }
    }
    function findEven(list){
        let even = [];
        for (let i = 0; i < list.length; i++){
            if (list[i] % 2 === 0){
                even.push(list[i]);
                console.log(even.join(' '));
            }
    
        }
    }
    
    }