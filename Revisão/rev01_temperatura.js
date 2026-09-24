const input = require ('readline-sync');

console.log("--- SENSOR INDUSTRIAL ---")

const temp = input.questionFloat ("Informe a temperatura atual do forno: ")

if (temp <= 60) {
    console.log(`Temperatura atual: ${temp}°C`)
    console.log("Estado: NORMAL")
} else if (temp <=80) {
    console.log(`Temperatura atual: ${temp}°C`)
    console.log("Estado: ATENCAO")
} else {
    console.log(`Temperatura atual: ${temp}°C`)
    console.log("Estado: CRITICA")
}