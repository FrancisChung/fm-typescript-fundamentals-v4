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

if isCarLike(maybeCar) {
    maybeCar
}