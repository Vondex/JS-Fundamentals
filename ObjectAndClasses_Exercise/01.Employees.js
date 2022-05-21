function solve(list){
    for (let employee of list){
        let employeeData = {
            name: employee,
            persnalNum: employee.length
        };

        let employeeName = employeeData.name;
        let employeeNum = employeeData.persnalNum
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeNum}`)
    }
}