// Callables

interface TwoNumberCalculation {
    (x: number, y:number) : number
}
// imterface use a colom
// type alias use a fat arrow

type TwoNumberCalc = (x: number, y:number) => number

const add: TwoNumberCalculation = (a, b) => a+b
const subtract: TwoNumberCalc = (x: number, y: number) => x-y

