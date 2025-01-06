// Explicit Return Types

export async function getData(url:string) : Promise<{properties: string[]}> {
    const resp = await fetch(url)

    const data = (await resp.json()) as {
        properties: string[]
    }

    return data
}

function loaddata() {
    getData("https://example.com").then((result) => {
        console.log(result.properties.join(", "))
    })
}

export default {}