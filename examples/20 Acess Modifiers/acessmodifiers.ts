// Class fields and methods

class Car {
    private static nextSerialNumber : number
    private static generateSerialNumber() { return this.nextSerialNumber++ }
    static () {
        fetch("https://api.example.com/vin_number_data")
            .then(response => response.json())
            .then(data => {
                Car.nextSerialNumber = data.mostRecentInvoiceId + 1
            })
    }

    make: string
    model: string
    year: number
    //serialNumber : number = Car.generateSerialNumber()
    private _serialNumber : number = Car.generateSerialNumber()
    protected get serialNumber (): number {
        return this._serialNumber
    }

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
// let num = newcar.serialNumber   // Access error
// newcar.serialNumber = -12323 //shouldn't be allowed to have negative serial numbers

// Access modifiers

