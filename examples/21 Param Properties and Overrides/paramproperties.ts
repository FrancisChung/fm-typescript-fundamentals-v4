// param properties

class Base {}

class Car2 extends Base {
    foo = console.log("Class field initializer")
    constructor (public make: string) {
        super()
        console.log("Constructor stuff")
    }
}