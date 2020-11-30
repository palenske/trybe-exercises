console.log('#1 -  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.\n');

let n = 8;
let row = '';

for (i = 0; i < n; i += 1){
    for (j = 0; j < n; j += 1){
        row += '*';  
    }
console.log(row);
row = '';
}

console.log('\n#2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.\n')
for (i = 0; i < n; i += 1){
    row += '*';
    console.log(row);
}
row = '';

console.log('\n#3 - Agora inverta o lado do triângulo.\n');
for (i = 1; i <= n; i += 1){
    for (j = 0; j < n; j += 1){
        if ((n - i) <= j){
            row += '*';
        }
        else {
            row += ' ';
        }  
    }
console.log(row);
row = '';
}

console.log('\n#4 - Depois, faça uma pirâmide com n asteriscos de base.\n');
for (linha = (n/2+0.5); linha <= n; linha += 1){
    for (coluna = 1; coluna <= n; coluna += 1){
        if (coluna > linha || coluna <= (n-linha)){
            row += ' ';
        }
        else {
            row += '*';
        }
    }
console.log(row);
row = '';
}

console.log('\n#5 Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.\n')
if (n%2 === 0){
    console.log('Valor de n é par');
    n += 1;
    console.log('n receberá +1\n');
}
for (linha = (n/2+0.5); linha <= n; linha += 1){
    for (coluna = 1; coluna <= n; coluna += 1){
        if (coluna == linha || coluna == ((n+1)-linha)){
            row += '*';
        }
        else if (linha == n) {
            row += '*';
        }
        else {
            row += ' ';
        }
    } 
console.log(row);
row = '';
}
