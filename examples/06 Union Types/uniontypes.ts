type OneThroughFive = 1 | 2 | 3 | 4 | 5
let lowNumber : OneThroughFive = 3
lowNumber = 8 // invalid

type Evens = 2 | 4 | 6| 8
let evenNumber : Evens = 2
evenNumber = 5 // 5 is not part of set

//let evenOrLowNumber = 5 as Evens | OneThroughFive

function printEven(even : Evens) {}
function printLowNumber(lowNumber : OneThroughFive) {}
function printEvenNumberUnder5(num : 2 | 4) : void {}
function printNumber (num : Number) : void {}

let evenOrLowNumber : Evens | OneThroughFive
// evenOrLowNumber =6
// evenOrLowNumber = 3
// evenOrLowNumber = 4
let x = 5 as Evens | OneThroughFive

printEven(x)        // 1 is not assignable to type Evens
printLowNumber(x)   // 8 is not assignable to OneThroughFive
printEvenNumberUnder5(x)    // Type 1 is not assignable to 2 | 4
printNumber (x) // Ok