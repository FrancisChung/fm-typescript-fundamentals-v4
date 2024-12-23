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
