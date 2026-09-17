const entrada  = require('readline-sync');

const qtdHora = entrada.questionInt("Digite a quantidade de peca produzida por hora: ");

const horasTurno = entrada.questionInt("Digite as horas trabalhadas por turno: ");

const prodTotal = qtdHora * horasTurno;

console.log("\n=== RELATORIO DE PRODUÇAO ===");
console.log(`Pecas produzidas por hora: ${qtdHora}`);
console.log(`Horas do turno:${horasTurno}`);
console.log(`Total Produzido: ${prodTotal} pecas`);