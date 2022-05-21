function solve(input) {    
    let n = Number(input.shift());    
    for (let index = 0; index < n; index++) {
        let string = input.shift();
        let pattern = /(@\#+)(?<bar>[A-Z][a-zA-Z\d]{4,}[A-Z])@\#+/;
        let match = pattern.exec(string);
        let productGroup = []
        if(match == null){
            console.log("Invalid barcode");
        }else{        
            productGroup = match.groups.bar.split('').map(Number).filter(x => x >= 0);
            if (productGroup.length == 0){
                productGroup = [0,0]
            };
            console.log(`Product group: ${productGroup.join('')}`);
        }                     
    }    
}
solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

