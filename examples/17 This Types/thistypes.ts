// Constructables

interface DateConstructor {
    new(value: number): Date
}

let myDateConstructor : DateConstructor = Date
const d = new myDateConstructor(1697923072611)

type FormSubmitHandler = (data : FormData) => void
type MessageHandler = (event : MessageEvent) => void

function handleMainEvent (
    elem : HTMLFormElement,
    handler : FormSubmitHandler
) : void

function handleMainEvent (
    elem : HTMLIFrameElement,
    handler : MessageHandler
) : void

function handleMainEvent (
    elem : HTMLFormElement | HTMLIFrameElement,
    handler : FormSubmitHandler | MessageHandler
) : void {}

const myFrame = document.getElementsByTagName("iframe")[0]

handleMainEvent(myFrame, (val ) => {

})

// This Type example

const myButton = document.getElementsByTagName("button")[0]
const boundHandler = myClickHandler.bind(myButton)

function myClickHandler(this: HTMLButtonElement, event: Event) {
    this.disabled = true
}

boundHandler(new Event("click")) //bound version Ok
myClickHandler.call(myButton, new Event("click"))

//myClickHandler.call(new Event("click")) //doesnt work