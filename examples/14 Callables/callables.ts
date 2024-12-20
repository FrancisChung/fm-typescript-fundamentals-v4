// Callables

interface TwoNumberCalculation {
    (x: number, y:number) : number
}

type TwoNumberCalc = (x: number, y:number) => number

const add: TwoNumberCalculation = (a, b) => a+b
const subtract: TwoNumberCaclc = (x, y) => x-y

