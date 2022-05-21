function solve(input){
    let result = input.shift();


    while (input[0] != 'Registration'){
        let tokens = input.shift().split(' ')
        let command = tokens[0];
        if (command == 'Letters'){
            let element = tokens[1]
            if (element == 'Upper'){
                result = result.toUpperCase();
                console.log(result);
            } else {
                result = result.toLowerCase();
                console.log(result);
            }

        } else if (command == 'Replace'){
            let el = tokens[1];
            result = result.replace(el, '-')
            console.log(result);


        } else if (command == 'IsValid'){
            let char = tokens[1];
            if (result.includes(char)){
                console.log('Valid username.')
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        } else if (command == 'Reverse'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (validate(startIndex) && validate(endIndex)){
                
                let newSub = result.substring(startIndex, endIndex + 1);
                console.log (newSub.split("").reverse().join(""));
                
                
            }
        } else if (command == 'Substring'){
            let char = tokens[1];
            if (result.includes(char)){
                
                result = result.replace(char, '');
                console.log(result);

            } else {
                console.log(`The username ${result} doesn't contain ${char}.`);
            }
        }

    }
    
    function validate(index){
        return (index >= 0) && (index < result.length);
    }
}
solve(["John",
"Letters Lower",
"Substring SA",
"IsValid @",
"Registration"])
solve(["ThisIsSoftUni",
"Reverse 1 3",
"Replace S",
"Substring hi",
"Registration"])

