let listaAlunos = ["Daniel", "Marina", "Pedro", "Gustavo", "Henrique", "Juliane", "Joao"];
let numeroAlunos = listaAlunos.length - 1;
let contador = 0;

for (let i = 0; i <= numeroAlunos; i++) {
    if (contador == 0) {
        console.log(contador + ": Zero: " + listaAlunos[contador]);
        contador++;
    }
    else {
        if ((contador % 2) == 0) {
            console.log(contador + ": Par: " + listaAlunos[contador]);
        }
        else {
            console.log(contador + ": Impar: " + listaAlunos[contador]);
        }
        contador++;
    }
}

