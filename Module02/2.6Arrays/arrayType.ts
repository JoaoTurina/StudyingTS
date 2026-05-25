
//Exemplo 01 - Colchetes

let frutas: string[] = ['Maça', 'Banana', 'Limão', 'Laranja'];
console.log(frutas[2]);
console.log(frutas);

//Exemplo 02 - Array Object

let frutas1: Array<string> = ['Maça', 'Banana', 'Limão', 'Laranja'];
console.log(frutas[2]);

//Exemplo 03 - Método push

let animais: Array<string> = ['Cachorro', 'Gato', 'Elefante'];
console.log(animais);
animais.push('Panda');
console.log(animais);

//Exemplo 04 - Identificar o tamanho do array

let idiomas: Array<string> = ['Português', 'Inglês', 'Francês'];
console.log(idiomas.length);

//Exemplo 05 - Exemplo de array com Spread Operator

let listaNumeros: Array<number> = [1, 2, 3, 4];
listaNumeros = [...listaNumeros, 5, 6, 7];
console.log(listaNumeros);

//Exemplo 06 - Exemplo de Array com laço de iteração

let cores: Array<string> = ['Vermelho', 'Verde', 'Amarelo', 'Azul'];

function imprimirCores(cores:string[]): void {   
    for (let i = 0; i < cores.length; i++) {
        console.log(cores[i]);
    }
}

imprimirCores(cores);
