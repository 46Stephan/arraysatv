/*Crie uma função que recebe um vetor de inteiros e um número inteiro e retorne verdadeiro se o número faz parte do vetor ou falso se não faz parte.*/


let conjuntoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = parseInt(prompt('Informe um número para verificar se está no conjunto: ' , 'Digite aqui'));

function conjunto(){

    for (let i = 0; i < conjuntoNumeros.length; i++){
       
    if (conjuntoNumeros.includes(numero)){
        console.log(true);
    }else{
        return console.log(false)
     }  
    }
}

conjunto(numero);

