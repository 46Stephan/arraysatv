/*Crie uma função que recebe um vetor de inteiros e um número inteiro e retorne verdadeiro se o número faz parte do vetor ou falso se não faz parte.*/

let numeros = [1, 2, 3, 4, 5, 46, 69, 21, 9, 687];
let numeroEncontrar = 0;

function encontrarNumero(lista, numero) {

    for (i = 0; i < lista.length; i++) {
        console.log(lista[i])
        if (numero === lista[i]) {
            return true
        }
    }
    return false;
}

const taNaLista = encontrarNumero(numeros, numeroEncontrar);

if (taNaLista) {
    alert(`O número ${numeroEncontrar} está na lista!`);
} else {
    alert(`O número ${numeroEncontrar} não está na lista.`);
}