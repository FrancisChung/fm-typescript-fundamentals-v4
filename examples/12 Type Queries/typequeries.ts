type DatePropertyNames = keyof Date

type DateStringPropertyNames = keyof DatePropertyNames & string
type DateSymbolPropertyNames = keyof DatePropertyNames & symbol

// typeof

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
