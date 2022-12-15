/*Crie uma função que recebe 2 vetores de 10 elementos inteiros e que retorne a união dos dois em um novo vetor. */


let conjunto1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let conjunto2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function uniaoConjuntos(ar1, ar2){

    let conjunto3 = conjunto1.concat(conjunto2);

    console.log(conjunto3);

}
uniaoConjuntos(conjunto1, conjunto2)