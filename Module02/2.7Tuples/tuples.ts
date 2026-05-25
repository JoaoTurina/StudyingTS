
//Exemplo 01

let pessoa: [string, string, number];
pessoa = ['João', 'Estudante', 20];

console.log(pessoa);

//Exemplo 02

let pessoa2: [string, string, number];
pessoa2 = ['João', 'Estudante', 20];

console.log(pessoa[0]);

//Exemplo 03 - Labels

let animais: [nome: string, especie: string, idade: number];
animais = ['Rex', 'Cachorro', 5];

console.log(animais);

//Exemplo 04 - Spread Operator

let frutas: [string, ...string[]] = ['Frutas', 'Maçã', 'Banana', 'Laranja'];
console.log(frutas);
console.log(...frutas);

