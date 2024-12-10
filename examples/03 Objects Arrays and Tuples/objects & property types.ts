

const myCar = {
    make : "Toytota",
    model : "Corolla",
    year : 2024
}

let car : {
    make: string
    model: string
    year: number
} = myCar

function printCar( car : {
    make : string
    model : string
    year : number
    chargeVoltage ?: number
}) {
    let str = "${car.make}, ${car.model}, ${car.year}"
    if (typeof(car.chargeVoltage) === "number")
        str += ` ${car.chargeVoltage} `
}

printCar(car)
printCar({
        make : "Toytota",
        model : "Corolla",
        year : 2024,
        chargeVoltage : 220
    }
)

const x : { [key: string]: number } = {}
