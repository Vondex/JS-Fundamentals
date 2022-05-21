function maxNums(list){
    let topIntegers = [];
    
    for (let i = 0; i < list.length; i++){
        let current = list[i];
        let isTop = true;

        for (let j = i + 1; j < list.length; j++){
            let rightNum = list[j];

            if(rightNum >= current) {
                isTop = false;
                break;
            } 
        }
        if (isTop){
            topIntegers.push(current);
        }
        
    }
 console.log(topIntegers.join(' '));
}
maxNums([1, 4, 3, 2])