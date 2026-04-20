type PlanetSituation =  "habitado" | "habitável" | "inabitavel" | "inexplorado"
type PlanetCoordinates = [number, number, number, number]
type Planet = { 
    name: string,
    coordinates: PlanetCoordinates,
    situation: PlanetSituation,
    satellites : string[]
}

const planets : Planet[] = []

function addPlanet (name: string, coordinates: PlanetCoordinates, situation: PlanetSituation){
    planets.push({
        name,
        coordinates,
        situation,
        satellites:[]
    })
    alert(`O planeta ${name} foi registrado com sucesso.`)
}

function findPlanet(name:string){
    const planet = planets.find(planet=> planet.name === name)
    return planet ?? false
}

function updateSituation (situation:PlanetSituation, planet:Planet){
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`)
}

function addSatellite(name: string, planet: Planet){
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite(name: string, planet:Planet){
    planet.satellites = planet.satellites.filter(satellite => satellite !== name )

    alert(`O satélite ${name} foi removido do planeta ${planet.name}`)
}

function promptValidSituation() {
    let situation: PlanetSituation
    let validSituation = false 

    while(!validSituation){
        const situationInput = prompt("Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n 3 - Inabitável\n4 - Inexplorado")

        switch(situationInput){
            case "1":
                situation = "habitado"
                validSituation = true
                return situation
                
            case "2":
                situation = "habitável"
                validSituation = true
                return situation 
            case "3":
                situation = "inabitavel"
                validSituation = true
                return situation 
            case "4":
                situation = "inexplorado"
                validSituation = true
                return situation 
            default:
                alert('Situação inválida!')
                break
            }
        }
    }

    function promptValidPlanet(callbackfn: (planet: Planet) => void ){
        const planetName = String(prompt("Informe o nome do planeta:"))
        const planet = findPlanet(planetName)

        if (planet) {
            callbackfn(planet)
        } else{
            alert("Planeta não encontrado! Retornando ao menu...")
        }
    }

    function firtMenuOption (){
        const name = String(prompt('Informe o nome do planeta:'))
        const coorditateA = Number(prompt('Informe a primeira coordenada:'))
        const coorditateB = Number(prompt('Informe a segunda coordenada:'))
        const coorditateC = Number(prompt('Informe a terceira coordenada:'))
        const coorditateD = Number(prompt('Informe a quarta coordenada:'))

        const situation = promptValidSituation() 

        const confirmation = confirm (`Confirma o registo do planeta ${name}? 
            Coordenadas: (${coorditateA}, ${coorditateB}, ${coorditateC}, ${coorditateD})
            Situação: ${situation}`)

        if (confirmation) {
            if(situation){
                addPlanet(name, [coorditateA, coorditateB, coorditateC, coorditateD], situation)
            }
        }
    }