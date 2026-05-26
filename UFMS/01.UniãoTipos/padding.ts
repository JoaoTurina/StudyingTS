
// O tipo any poderia ser utilizado, porém o usuário poderia passar por exemplo o tipo boolean, o que não é desejado
function padLeft(value: string, padding: string | number) {

    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === "string") {
        return padding + value;
    }

    throw new Error(`Expected string or number: '${padding}'.`);

}

let r = padLeft('Texto...', 22);
console.log(r);

r = padLeft('Texto2...', 'Dois');
console.log(r);
