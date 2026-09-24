const input = require ('readline-sync');

let materiais = []
console.log("--- CADASTRO DE MATERIAIS ---")

for (let i = 0; i <4; i++) {
    const nome = input.question(`Informe o nome do material ${i+1}: `)

    const qtd = input.questionInt(`Informe a quantidade atual do material ${i+1}: `);

    const estoqueMinimo = input.questionInt(`Informe o estoque minimo do material ${i+1}: `)

    materiais.push(nome, qtd, estoqueMinimo);
}

for (let i = 0, i < estoque)
if (quantidade < estoqueMinimo) {
    return 'REPOR ESTOQUE'
    } else {
    return 'ESTOQUE OK'
    }
    
    




