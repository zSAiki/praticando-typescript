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

function secondMenuOption(){
    promptValidPlanet(planet => {
        const situation = promptValidSituation()
        if (situation){
            updateSituation(situation, planet)
        }
    })
}

function thirdMenuOption (){
    promptValidPlanet(planet => {
        const satellite = prompt("Informe o nome do satélite a ser adicionado:")
        if (satellite){
            addSatellite(satellite, planet)
        }
    })
}

function fourthMenuOption(){
    promptValidPlanet(planet => {
            const satellite = prompt("Informe o nome do satélite a ser removido:")
            if (satellite){
                removeSatellite(satellite, planet)
            }
        })
}

function fifthMenuOption(){
    let list = "Planetas:\n"

    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates

        list +=`
        Nome: ${planet.name}
        Coordenadas: ${planet.coordinates}
        Situação: ${planet.situation}
        Satélites: ${planet.satellites.length}
        `

        planet.satellites.forEach(satellite =>{
            list +=`    - ${satellite}\n`
        })
    })

    alert(list)
}

let userOption: number | null;

do {
  const menu = `Menu
1 - Registrar um novo planeta
2 - Atualizar situação do planeta
3 - Adicionar um satélite ao planeta
4 - Remover um satélite do planeta
5 - Lista de todos os planetas
6 - Sair`;

  const input = prompt(menu);

  // 👇 Tratamento de cancelamento
  if (input === null) {
    alert("Operação cancelada.");
    break;
  }

  userOption = Number(input);

  // 👇 Validação de número
  if (Number.isNaN(userOption) || userOption < 1 || userOption > 6) {
    alert("Opção inválida! Retornando ao painel principal...");
    continue;
  }

  switch (userOption) {
    case 1:
      firtMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      fifthMenuOption();
      break;
    case 6:
      alert("Encerrando o sistema...");
      break;
  }

} while (userOption !== 6);