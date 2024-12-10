const phones : {
    mobile:  {
        country: string
        area: string
        number: string
    }
    [k: string ]: {
        country: string
        area: string
        number: string
    }}  = {
    home: {country: "+1",  area: "211", number: "1234-543-5232"},
    work: {country: "+1",  area: "211", number: "1234-543-5232"},
    fax: {country: "+1",  area: "211", number: "1234-543-5232"},
    mobile: {country: "+1",  area: "211", number: "1234-543-5232"}
}

console.log(phones.home.country)
console.log(phones.custom_1)

const x : {[k:string] : string} = {}
x.foo = "bar"


// const phones : {
//     [k: string ]: {
//         country: string
//         area: string
//         number: string
//     }
// } = {}