type NestedNumbers = number | NestedNumbers[]

const val : NestedNumbers = [3,4, [5,6, [7], 59], 221]

// proof that NestedNumbers work

if (typeof val !== "number") {
    val.push(41)
    val.push([[41,32], 11])
    val.push([[]])
    //val.push("this will not work!")
}