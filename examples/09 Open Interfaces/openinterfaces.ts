// Open Interfaces

// Implements Examples
interface AnimalLike {
    eat(food: string) : void
}

class LivingOrganism {
    isAlive() {
        return true
    }
}

function feed(animal : AnimalLike) : void    {
    if (animal.isAlive())
        animal.eat("food")
}

interface AnimalLike {
    isAlive(): boolean
}