function solve(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let people = Number(input[3]);
    
    let efficiency = first + second + third;
    
    let hour = 0;
    
    while(people>0){
    hour++;
    
    if(hour % 4 != 0){
        people -= efficiency;
    
    }
    }
    console.log(`Time needed: ${hour}h. `);
    }
solve((["5",
"6",
"4",
"20"])
)