type OneThroughFive = 1 | 2 | 3 | 4 | 5
let lowNumber : OneThroughFive = 3
lowNumber = 8 // invalid

type Evens = 2 | 4 | 6| 8
let evenNumber : Evens = 2
evenNumber = 5 // 5 is not part of set

let evenOrLowNumber = 5 as Evens | OneThroughFive
