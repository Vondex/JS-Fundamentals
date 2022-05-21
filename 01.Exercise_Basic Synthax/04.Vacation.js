function solve(people, type, dayOfWeek){


    if (dayOfWeek === 'Friday'){
        switch(type){
            case 'Students':
                
                if (people >= 30){
                    total = 0.85*(8.45 * people);
                    
                } else {
                    total = 8.45 * people;
                }
                console.log(`Total price: ${total.toFixed(2)}`)
                break;
            case 'Business':
                if (people >= 100){
                    total = 10.90 * (people-10);
                } else {
                    total = 10.90 * people;
                }
                console.log(`Total price: ${total.toFixed(2)}`)
                break;
            case 'Regular':
            
                
                if (people >= 10 && people <= 20){
                    total = 0.95*(15 * people);
        
                } else {
                    total = 15 * people;
                } 
                console.log(`Total price: ${total.toFixed(2)}`)
                break;

        }
    } else if (dayOfWeek === 'Saturday'){
        switch(type){
            case 'Students':
                
                if (people >= 30){
                    total = 0.85*(9.80 * people);
                    
                } else {
                    total = 9.80 * people;
                }
                console.log(`Total price: ${total.toFixed(2)}`)
                break;
            case 'Business':
                if (people >= 100){
                    total = 15.60 * (people-10);
                } else {
                    total = 15.60 * people;
                }
                console.log(`Total price: ${total.toFixed(2)}`)
                break;
            case 'Regular':
            
                
                if (people >= 10 && people <= 20){
                    total = 0.95*(20 * people);
        
                } else {
                    total = 20 * people;
                } 
                console.log(`Total price: ${total.toFixed(2)}`)
                break;

        }
    } else if (dayOfWeek === 'Sunday'){
        switch(type){
            case 'Students':
                
                if (people >= 30){
                    total = 0.85*(10.46 * people);
                    
                } else {
                    total = 10.46 * people;
                }
                console.log(`Total price: ${total.toFixed(2)}`)
                    break;
            case 'Business':
                if (people >= 100){
                    total = 16 * (people-10);
                } else {
                    total = 16 * people;
                }
                console.log(`Total price: ${total.toFixed(2)}`)
                break;
            case 'Regular':
            
                
                if (people >= 10 && people <= 20){
                    total = 0.95*(22.50 * people);
        
                } else {
                    total = 22.50 * people;
                } 
                console.log(`Total price: ${total.toFixed(2)}`)
                break;

        }
    }
    
}
solve(30,
    "Students",
    "Sunday"
    );
solve(40,
    "Regular",
    "Saturday"
    )
