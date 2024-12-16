// Type Aliases

type Amount = {
    currency: string
    value: number
}

function printAmount(amt: Amount) {
    console.log(amt)

    const {currency, value} = amt
    console.log(`${currency} ${value}`)
}

function flipCoin() {
    if (Math.random() > 0.5) return "heads"
    return "tails"
}

const success = ['success', {name: 'Francis', email: 'francis@example.com'}] as const
const fail = ["error", new Error("Something went wrong")] as const

type UserInfoSuccess =  readonly ["success", {name:string, email:string}]
type UserInfoError = readonly ["error", Error]

export function maybeGetUserInfo():
    | UserInfoSuccess
    | UserInfoError {
    if (flipCoin() == "heads") {
        return success
    } else {
        return fail
    }
}