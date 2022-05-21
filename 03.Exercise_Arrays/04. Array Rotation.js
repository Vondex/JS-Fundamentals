function solve(list, nRotation){
    for (let i = 0; i < nRotation; i++){
        let firstElement = list[0];
        for (let j=0; j < list.length; j++){
            list[j] = list[j + 1]
        }
        let latsIndex = list.length - 1;
        list[latsIndex] = firstElement;
    }
    console.log(list.join(' '))
}
solve([51, 47, 32, 61, 21], 2)