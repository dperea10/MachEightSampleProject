const {findsPairsOfIntegerFromList} = require('../src/task')
const {constantArray} = require('../config/array.mock.js')

const asyncReadFile = async () => {
    
    let result = []
    try {

        let arr = constantArray

        for (let index = 0; index <= arr.length; index++) {
            const numberSumRandom = Math.floor(Math.random() * 15)
            const value = constantArray[index]
            result.push(findsPairsOfIntegerFromList(value, numberSumRandom))
        }
        
    } catch (error) {
        console.log(error)
    }
    return result
}

asyncReadFile()