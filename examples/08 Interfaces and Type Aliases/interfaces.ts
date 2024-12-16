interface IAmount {
    currency: string
    value: number
}

function printAmount(amt : IAmount) {
    console.log(`${amt.value} ${amt.currency}`)
}

// Interfaces to use for Inheritance

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