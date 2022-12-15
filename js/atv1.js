/*Desenvolva um algoritmo para percorrer um vetor de 15 elementos inteiros já preenchido e imprima todos os valores pares.*/

function numerosPares() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for (let i = 0; i < numeros.length; i ++) {
        if(numeros[i] % 2 == 0){
            console.log(numeros[i])
        }
    }
}

numerosPares();