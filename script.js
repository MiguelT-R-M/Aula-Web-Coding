// // tipos no javascript
// // number
// // string
// // boolean
// // undefined
// // object
// // function
// //declaração de variável
// // ecma6
// var nome1 = 'String';
// var nome2 = "String";
// var nome3 = `String`;
// console.log(typeof nome2);

// //
// let numero;
// let numero2 = 30;
// let numro3 = 30.5;
// console.log(typeof numero);

// // toda constante tem que ter valor, e não pode ser modificada
// const pi = 3.14;

// //

// let flag = false;

// //função

// function metodo(){

//     console.log("oi")

// }

// metodo();

// //objeto

// let user = {

//     nome: "carlos",
//     idade: 39,
//     endereço: {

//         rua: 3,
//         cidade: "cabo"

//     }

// }

// // crase

// let a = "nome";
// let b = 'nome';
// let c = `no
// me`;

// console.log(`O seu nome é ${nome}`);

// //

// function imprime(){

//     let guardanome = document.getElementById("nome").value;
//     console.log(`O seu nome é ${guardanome}`);
//     document.getElementById("imprime").innerHTML = ` O seu nome é ${guardanome}`;
//     document.getElementById("nome").value = "";

// }

// //

// function mudaCor(){

//     let guardacor = document.getElementById("cor").value;
//     console.log(guardacor);
//     document.body.style.background = guardacor;

// }

// let div = document.getElementById("quadrado");


// function aumenta(){

    
//     div.style.transform = 'scale(2)'
//     div.style.transition = 'all 1s'

// }
// function diminui(){

//     div.style.transform = "scale(1)"
//     div.style.transition = "all 0.1s"

// 2
// let nomeaf = false;
// let senhaaf = false;

// function caracteresNome(){

//     let nome = document.getElementById("nome").value;
//     if(nome.length >= 3){

//         document.getElementById("aviso1").innerHTML = "";
//         nomeaf = true;
//     }
//     else{

//         document.getElementById("aviso1").innerHTML = "Mínimo de 3 caracteres";
//         nomeaf= false;
//     }

// }

// function senhaRegras(){

//     let senha = document.getElementById("senha").value

//     if(senha.includes("1") == true || senha.includes("2") == true || senha.includes("3") == true || senha.includes("4") == true || senha.includes("5") == true || senha.includes("6") == true || senha.includes("7") == true || senha.includes("8") == true || senha.includes("9") == true){

//         document.getElementById("aviso2").innerHTML = "";
//         senhaaf = true;
//         if(senha.length >= 6){

//                 document.getElementById("aviso2").innerHTML = "";
//                 senhaaf = true;

//             }
//             else{

//                 document.getElementById("aviso2").innerHTML = document.getElementById("aviso2").innerHTML + " a senha deve ter 6 ou mais caracteres";
//                 senhaaf = false;

//             }
//     }
//     else{

//         document.getElementById("aviso2").innerHTML = "a senha deve conter números";
//         senhaaf = false;

//     }
    
//     console.log(senha);

// }

// function redireciona(){

//     if(nomeaf == true & senhaaf == true){

//         location.href = "pagina 2.html"

//     }

// }

let nomeaf = false;
let senhaaf = false

function a1(){

    let nome = document.getElementById("nome").value;

    if(nome.length>=8){

        document.getElementById("aviso1").innerHTML = "";
        nomeaf = true;

    }
    else{

        document.getElementById("aviso1").innerHTML = "O nome deve ter 8 ou mais caracteres";
        nomeaf = false;

    }


}

function a2(){

    let senha = document.getElementById("senha").value;

    if(senha.length>=6){

        document.getElementById("aviso2").innerHTML = "";
        senhaaf = true;
        
        if(senha.includes("1") == true || senha.includes("2") == true || senha.includes("3") == true || senha.includes("4") == true || senha.includes("5") == true || senha.includes("6") == true || senha.includes("7") == true || senha.includes("8") == true || senha.includes("9") == true){

            document.getElementById("aviso2").innerHTML = "";
            senhaaf = true;
            
    
        }
        else{
    
            document.getElementById("aviso2").innerHTML = "a senha deve conter números";
            senhaaf = false;
    
        } 

    }
    else{

        document.getElementById("aviso2").innerHTML = "a senha deve ter 6 ou mais caracteres";
        senhaaf = false;

    }

}

function redireciona(){

    if(nomeaf == true & senhaaf == true){

        location.href = "pagina 2.html";

    }

}





