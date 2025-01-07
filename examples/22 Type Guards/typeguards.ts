// type guards

interface CarLike {
    make: string
    model: string
    year: number
}

let maybeCar : any

if (
    maybeCar &&
    typeof maybeCar == "object" &&
    "make" in maybeCar &&
    typeof maybeCar["make"] == "string" &&
    "model" in maybeCar &&
    typeof maybeCar["model"] == "string" &&
    "year" in maybeCar &&
    typeof maybeCar["year"] == "number"
) {
    maybeCar
}


function isCarLike(valueToTest: any) : valueToTest is CarLike {
  return (
      valueToTest &&
      typeof valueToTest == "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] == "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] == "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] == "number"
  )
}

// if isCarLike(maybeCar) {
//     maybeCar
// }

function assertsIsCarLike(valueToTest: any) : asserts valueToTest is CarLike {
    if  (!(
        valueToTest &&
        typeof valueToTest == "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] == "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] == "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] == "number"
        )
    )
        throw new Error(
            `Value does not appear to be a CarLike${valueToTest}`
        )
}

assertsIsCarLike(maybeCar)
maybeCar

class Car {
    static #nextSerialNumber : number
    static #generateSerialNumber() { return this.#nextSerialNumber++ }

    #serialNumber : number = Car.#generateSerialNumber()

    static isCar(other: any): other is Car {
        if (other && // is it truthy
            typeof other == "object" &&
            #serialNumber in other) {
            other
            return true
        }

    }
}

let val: any
if (Car.isCar(val)) {
    val
}