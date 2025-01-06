// Class fields and methods

class Car {
    make: string
    model: string
    year: number
    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }

    honk(duration: number) {
        return `h${'o'.repeat(duration)}nk`
    }
}

let sedan = new Car("Honda", "Accord", 2017)
// new  Car(2017, "Honda", "Accord")    // Not Safe - Type mismatch
// sedan.callNonExistantMethod("Left") //Not safe - method doest exist

let newcar = new Car("Honda", "Accord", 2017)
newcar.honk(5)