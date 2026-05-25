
// Variáveis
let nome:string = "João";
console.log(nome);

//Arrays
let animais: string[] = ['Elefante', 'Cachorro', 'Panda'];
console.log(animais);

//Obejetos 
let carro: {
    nome: string,
    ano: number,
    marca:string
};

carro = {nome: 'Fusca', ano: 1991, marca: 'Volkswagen'};
console.log(carro);

//Funções
function soma(num1: number, num2: number) {
    return num1 + num2;
}

console.log(soma(25,10));
