"use strict";
const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi registrado com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n 3 - Inabitável\n4 - Inexplorado");
        switch (situationInput) {
            case "1":
                situation = "habitado";
                validSituation = true;
                return situation;
            case "2":
                situation = "habitável";
                validSituation = true;
                return situation;
            case "3":
                situation = "inabitavel";
                validSituation = true;
                return situation;
            case "4":
                situation = "inexplorado";
                validSituation = true;
                return situation;
            default:
                alert('Situação inválida!');
                break;
        }
    }
}
