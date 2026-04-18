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