
interface IPessoa {
    nome: string;
}

interface IAluno {
    escola: string;
}

function imprimeInfo( estudante: IPessoa & IAluno) {
    console.log(`Nome: ${estudante.nome} - Escola: ${estudante.escola}`);
}

let Joao = {
    nome: 'João',
    escola: 'UFMS'
};

imprimeInfo(Joao);