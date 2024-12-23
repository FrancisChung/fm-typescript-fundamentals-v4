// void

function printFormmatedJSON(obj: string[]) {
    console.log(JSON.stringify(obj, null, 2))
}

// void accepts undefined
const xy : void = undefined

const sz : null = null

const xx: void = printFormmatedJSON(["Hello", "World"])

const x = printFormmatedJSON(["Hello", "World"])

