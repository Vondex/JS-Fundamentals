function solve(firstList, secondList){
  for (let i=0; i<firstList.length; i++) {
      let firstListElement = firstList[i];

      for (let j=0; j < secondList.length; j++){
          let secondListElement = secondList[j];

          if (firstListElement === secondListElement){
              console.log(firstListElement);
          }
      }
  } 
}
solve (['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)