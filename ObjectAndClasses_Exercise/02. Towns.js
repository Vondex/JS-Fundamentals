function solve(input){
for (let townInfo of input){
    let [town, latitude, longitude] = townInfo.split(' | ')

    let townData = {
        town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    };

    console.log(townData)
}
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)