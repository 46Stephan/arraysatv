/*Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou.
Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson */


let nomes = [];
let nome = '';

function addNome(nome) {
    nomes.push(nome);
}

while (nomes.length < 5) {
    nome = prompt("Digite um nome: ");
    addNome(nome);
}
console.log(nomes);
console.log(nomes.reverse)