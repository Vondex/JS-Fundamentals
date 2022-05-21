function solve(input){

        let studentsCount = Number(input.shift())
        let lecturesCount = Number(input.shift())
        let additionalBonus = Number(input.shift())
        let resultArray = [];
     
        for(let line of input) {
            let attendance = Number(line)
            let totalBonus = (attendance / lecturesCount) * (5 + additionalBonus)
            resultArray.push(totalBonus)
     
        }
     
        let biggest = 0;
        for(let i = 0; i < input.length; i++) {
            if(Number(input[i]) > biggest) {
                biggest = Number(input[i])
            }
        }
        
     
        let total = 0;
        for(let i = 0; i < resultArray.length; i++) {
            if(Number(resultArray[i]) > total) {
                total = Number(resultArray[i])
            }
        }
     
        console.log(`Max Bonus: ${Math.ceil(total)}.`);
        console.log(`The student has attended ${Math.ceil(biggest)} lectures.`);
    }
solve([
    '5',  
    '25', 
    '30',
    '12', 
    '19', 
    '24',
    '16', 
    '20'
  ]
  )

/*
  function bonusScoringSystem(input) {
    let studs = Number(input.shift());
    let lections = Number(input.shift());
    let bonus = Number(input.shift());
    let totalBonus = 0;
    let studAttendances = 0;
    let maxAttendances = Number.MIN_SAFE_INTEGER;
    let maxBonus = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < studs; i++) {
      studAttendances = Number(input[i]);
   
      if (studAttendances > maxAttendances) {
        maxAttendances = studAttendances;
      }
      totalBonus = Math.ceil((studAttendances / lections) * (5 + bonus));
      if (totalBonus > maxBonus) {
        maxBonus = totalBonus;
      }
    }
   
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
  }
  */