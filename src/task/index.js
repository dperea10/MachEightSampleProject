const findsPairsOfIntegerFromList = (listOrArrayValues, sumValue) =>
{

    let result = []
    let setForHasTable = new Set()
 
    for (let indexLoop = 0; indexLoop <= listOrArrayValues.length; ++indexLoop)
      {
        const sumTemp = sumValue - listOrArrayValues[indexLoop]
 
        if(setForHasTable.has(sumTemp)){
            result.push({firstValue: sumTemp}, {secondValue: listOrArrayValues[indexLoop]}, {sumValue: sumValue})
        }
        setForHasTable.add(listOrArrayValues[indexLoop])
        
      }
      console.log(result)
      return result
}

module.exports = {findsPairsOfIntegerFromList}
