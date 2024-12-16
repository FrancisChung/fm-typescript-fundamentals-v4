interface IAmount {
    currency: string
    value: number
}

function printAmount(amt : IAmount) {
    console.log(`${amt.value} ${amt.currency}`)
}

// Interfaces to use for Inheritance

// Extends Examples
interface Animal {
    isAlive(): boolean
}

interface Mammal extends Animal {
    getFurOrHairColour(): string
}

interface Hamster extends Mammal {
    squeak(): string
}

function careForHamster(h: Hamster) {
    h.getFurOrHairColour()
    h.squeak()
}

// Implements Examples
interface AnimalLike {
    eat(food: string) : void
}

class LivingOrganism {
    isAlive() {
        return true
    }
}

interface CanBark {
    bark(): string
}

class Dog
    extends LivingOrganism
    implements Animal, AnimalLike, CanBark {
    eat(food: string) {
        return `Eating ${food}`
    }

    bark() {
        return "woof"
    }
}