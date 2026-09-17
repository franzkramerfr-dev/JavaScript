const entrada = require ('readline-sync');

let soma = 0;

for (let i = 1; i <=5; i++) {
    const medicao =  entrada.questionFloat(`Informe o valor da medicao ${i}: `);
    soma += medicao
}

const media = soma / 5

console.log(`Soma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);



