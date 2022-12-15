/* Desenvolva um algoritmo que preenche um vetor com os 4 primeiros números perfeitos. */


const array = []

for(let num = 1; array.length < 4; num++){
    perfeito(num)
}

function perfeito(num) {

    let soma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
        soma += i
        }
    }
    if (soma == num) {                
        array.push(num)
    }
        
}

for(let index = 0; index < array.length; index++){
    console.log(array[index])
}