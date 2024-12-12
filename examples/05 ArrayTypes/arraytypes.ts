const fileExtensions = ["js","ts"]

// Tuples - Arrays of fixed length

let myCar2 = [
    2002,
    "Toyota",
    "Corolla"
]

const [year, make, model] = myCar2

 myCar2 = ["Toyota", "Corolla", 2017]

let myCar3: [number, string, string] = [
    2002,
    "Toyota",
    "Corolla"
]

// myCar3 = ["Honda", 2017, "Accord"]
// myCar3 = [2017, "Honda","Accord","Sedan"]

const numPair : readonly [number, number] = [4,5]
// const numTriple :  [number, number, number] = [4,5, 6]
const numTriple :  [number, number, number] = [7]

numPair.push(6)

const numPair2 : readonly [number, number] = [4,5]
numPair[1] = 77


// Tuples with readonly keyword