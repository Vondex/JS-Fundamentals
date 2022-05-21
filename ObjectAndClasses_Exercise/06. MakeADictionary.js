function createDictionary(terms) 
{
    let dictObject = {}
    let keysList=[]
    let valuesList=[]
    class Dictionary
    {
        constructor(term, definition)
        {
            this.term = term
            this.definition = definition
        }
    }
    for(term of terms)
    {
        let termObject = JSON.parse(term)
        Object.assign(dictObject, termObject)
    }
    let entries = Object.entries(dictObject)
    for([key,value] of entries)
    {
        keysList.push(key)
        valuesList.push(value)
    }
    keysList.sort()
    for(let i =0; i<keysList.length;i++)
    {
        console.log(`Term: ${keysList[i]} => Definition: ${dictObject[keysList[i]]}`)
    }
 
 
}