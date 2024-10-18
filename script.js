// tipos no javascript
// number
// string
// boolean
// undefined
// object
// function
// declaração de variável
// ecma6
var nome = 'String';
var nome2 = "String";
var nome3 = `String`;
console.log(typeof nome2);

//
let numero;
let numero2 = 30;
let numro3 = 30.5;
console.log(typeof numero);

// toda constante tem que ter valor, e não pode ser modificada
const pi = 3.14;

//

let flag = false;

//função

function metodo(){

    console.log("oi")

}

metodo();

//objeto

let user = {

    nome: "carlos",
    idade: 39,
    endereço: {

        rua: 3,
        cidade: "cabo"

    }

}

// crase

let a = "nome";
let b = 'nome';
let c = `no
me`;

console.log(`O seu nome é ${nome}`);

//

function imprime(){

    let guardanome = document.getElementById("nome").value;
    console.log(`O seu nome é ${guardanome}`);
    document.getElementById("imprime").innerHTML = ` O seu nome é ${guardanome}`;
    document.getElementById("nome").value = "";

}

//

function mudaCor(){

    let guardacor = document.getElementById("cor").value;
    console.log(guardacor);
    document.body.style.background = guardacor;

}