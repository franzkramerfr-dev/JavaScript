const input = require ('readline-sync');

let operadores = [];

for (let i = 0; i < 5; i++){
    const nome_operador = input.question(`Informe o nome do operador ${i}: `)
    operadores.push(nome_operador);
}

console.log("--- OPERADORES CADASTRADOS ---")

for (let i = 0; i < operadores.length; i++) {
    console.log(`${i + 1} - ${operadores[i]}`);
}