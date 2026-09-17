const entrada = require('readline-sync');
const funcao = require('./funcoes')

const nomeMaterial = entrada.question("Informe o nome do material: ");

const qtdAdquirida = entrada.questionInt("Informe a quantidade do material: ");

const precoUnidade = entrada.questionFloat("Informe o preco da unidade: ")

const total = funcao(qtdAdquirida, precoUnidade)

console.log("\n=== RELATORIO DE COMPRA ===")
console.log(`Material: ${nomeMaterial}`);
console.log(`Quantidade Adquirida: ${qtdAdquirida} unidades`)
console.log(`Preço por Unidade:R$ ${precoUnidade}`)
console.log("Valor total:", total);

