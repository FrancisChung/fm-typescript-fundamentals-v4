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

interface DogLike extends Animal, AnimalLike, CanBark {}

class Dog
    extends LivingOrganism
    implements DogLike {
    eat(food: string) {
        return `Eating ${food}`
    }

    bark() {
        return "woof"
    }
}

// Implements sometimes works with type aliases

type CanJump = {
    jumpToHeight() : number | [number, number]
}

class Dog2 implements CanJump {
    jumpToHeight() {
        return 1.7
    }

    eat(food: string) {
        return `Eating ${food}`
    }
}

// type CanBark2 =
//     | number
//     | {
//     bark(): string
//     }

class Dog3 implements CanJump {
    jumpToHeight() {
        return 1.7
    }

    eat(food: string) {
        return `Eating ${food}`
    }
}
