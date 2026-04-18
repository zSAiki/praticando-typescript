type Planet = "Mercúrio" | "Vênus" | ""

type GreetingCallback = (name: string) => void

function greet(callbackfn: GreetingCallback){
    let name = "leo"

    callbackfn(name)
}