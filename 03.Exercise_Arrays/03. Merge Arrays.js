function solve(firstList, secondList){
    let resultList = [];
 for (let i = 0; i < firstList.length; i++){
     let firstElement = firstList[i];
     let secondElement = secondList[i];

    if (i % 2 === 0){
        let sum = Number(firstElement) + Number(secondElement);
        resultList.push(sum);
    } else {
        let result = firstElement + secondElement;
        resultList.push(result);
    }
   
 }
 let resultListAsString = resultList.join(' - ');
 console.log(resultListAsString);
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
