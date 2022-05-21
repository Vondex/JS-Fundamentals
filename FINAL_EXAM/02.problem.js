function solve(input){
    let n = Number(input.shift());    
    for (let index = 0; index < n; index++) {
        let string = input.shift();
        let pattern = /(.+)(>)(?<digits>\d+)\|(?<lower>[a-z]+)\|(?<upper>[A-Z]+)\|(?<symbols>[^<\/>]+)(<)\1$/g;
        let match = pattern.exec(string);
        let result = []
        if(match == null){
            console.log("Try another password!");
        }else{        
            result.push(match.groups.digits);
            result.push(match.groups.lower);
            result.push(match.groups.upper);
            result.push(match.groups.symbols);
            
           
            console.log(`Password: ${result.join('')}`);
        }                     
    }    
}       
            
        
solve(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
