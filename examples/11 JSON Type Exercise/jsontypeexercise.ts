type JSONObject = any
type JSONArray = any
type JSONValue = any

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON("hello")
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: "hello" })
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, "foo"] } })

// NEGATIVE test cases (must fail)
// @ts-expect-error
Unused '@ts-expect-error' directive.
isJSON(() => "")
// @ts-expect-error
Unused '@ts-expect-error' directive.
isJSON(class {})
// @ts-expect-error
Unused '@ts-expect-error' directive.
isJSON(undefined)
// @ts-expect-error
isJSON(BigInt(143))
// @ts-expect-error
Unused '@ts-expect-error' directive.
isJSON(isJSON)