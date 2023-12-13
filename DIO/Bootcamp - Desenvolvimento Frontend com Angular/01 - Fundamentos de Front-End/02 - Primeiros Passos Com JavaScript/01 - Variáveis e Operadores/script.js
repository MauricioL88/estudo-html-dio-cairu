// Declarar variáveis no js
let nome = "Mauricio"

console.log(nome)

// Operadores aritméticos no js: + (somar) - (subtrair) * (multiplicar) / (dividir)

/*  Desafio 01 - Faça uma programa para calcular uma valor de uma viagem.

    Você terá 3 variáveis, sendo elas:
        1 - Preço do combustível em litros;
        2 - Gasto médio de combustível do carro por KM;
        3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

// Resolução:
const vlrCombustivel = 6.68;
const consumoMed = 8.5;
const distanciaKM = 100.00;

const consumoFinal = (distanciaKM / consumoMed) * vlrCombustivel;

console.log(`Consumo de R$ ${consumoFinal.toFixed(2)} reais.`); // Arrendondando 

