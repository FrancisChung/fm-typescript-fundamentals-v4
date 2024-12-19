type DatePropertyNames = keyof Date

type DateStringPropertyNames = keyof DatePropertyNames & string
type DateSymbolPropertyNames = keyof DatePropertyNames & symbol

// keyof = Object.keys() for types
// typeof = "get me the type of this value:

async function main() {
    const apiResponse = await Promise.all([
            fetch("https://example.com"),
            Promise.resolve("Titanium White"),
        ])

    // if (typeof apiResponse !== 'undefined') {} . typeof is different when it's used to extract Type info and
    // assigning it like below

    type ApiResponseType = typeof apiResponse
}

const MyRule = CSSRule
CSSRule.STYLE_RULE
const fooRule = new MyRule()

type MyRuleType = typeof MyRule

// Indexed Access Types

interface Car {
    make: string
    model: string
    year: number
    color: {
        red: string
        green: string
        blue: string
    }
}

let carColor: Car["color"]
//let carSomething: Car["Not-in-the-car"]
let carColorRedComponent: Car["color"]["red"]
let carProperty: Car["color" | "year"]