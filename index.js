
let readlineSync = require('readline-sync'); // usar modulo readline-sync para entrada de dados console
let nomePeca;
let listaPecas = [];
let limiteLista = 10; //diminuir o valor para testar

while ((listaPecas.length < limiteLista) && (nomePeca != "sair")) {
    let nomePecaIn = readlineSync.question('Informe o nome da peca, ou "sair" para fechar ');
    nomePeca = nomePecaIn.replace(/\s/g, ''); // retirar espaços da entrada
    if (nomePeca != "sair") {
        if (nomePeca.length > 3) {
            let pesoPeca = readlineSync.question('Informe o peso da peca(em gramas) ');
            if (pesoPeca > 100) {
                listaPecas.push(nomePeca);
                console.log("Lista de pecas = " + listaPecas);
            }
            else {
                console.log("Peso invalido");
            }

        }
        else {
            console.log("Nome invalido");
        }
    }
    else {
    }

}
if (listaPecas.length == limiteLista) {
    console.log("Limite da lista de pecas atingido");
}
else {
    console.log("Saiu do aplicativo");
}


