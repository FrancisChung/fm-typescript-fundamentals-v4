// Callables

interface TwoNumberCalculation {
    (x: number, y:number) : number
}
// imterface use a colom
// type alias use a fat arrow

type TwoNumberCalc = (x: number, y:number) => number

const add: TwoNumberCalculation = (a, b) => a+b
const subtract: TwoNumberCalc = (x: number, y: number) => x-y

function invokeInFourSeconds(callback:() => undefined) {
    setTimeout(callback, 4000)
}

function invokeInFiveSeconds(callback:() => void) {
    setTimeout(callback, 5000)
}

const values: number[] = []
// invokeInFourSeconds(()=> values.push(4)) // Error : number is not assignable to type undefined
invokeInFiveSeconds(()=> values.push(4))