function palindrome(listOfNums){
 for(let number of listOfNums){
     let numAsString = number.toString( );
     let reversedNumAsString = numAsString.split('').reverse().join('');
    

     if (numAsString === reversedNumAsString){
         console.log(true);
     } else {
         console.log(false);
     }
 }
}
palindrome([123,323,421,121])