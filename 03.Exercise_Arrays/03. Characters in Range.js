function charactersInRange(first, sec){
let min = first.charCodeAt(0);
let max = sec.charCodeAt(0);

let firstAsNum = first.charCodeAt(0);
let secAsNum = sec.charCodeAt(0);

if (firstAsNum > secAsNum){
    min = sec.charCodeAt(0);
    max = first.charCodeAt(0);

}
 let result = '';
 for (let i = min + 1; i<max; i++){
     let character = String.fromCharCode(i);
     result += character + ' ';
 }
 return result;

 
}

let result = charactersInRange('a','d');
console.log(result);