function mudaCor(){

    let texto = document.getElementById("cor").value
    let texto2 = document.getElementById("corbloco").value

    document.body.style.background = texto
    
    let cards = document.querySelectorAll(".quadrado")

    cards.forEach(e =>{

        e.style.background = texto2

    })

}
