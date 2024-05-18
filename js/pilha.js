var divsPilha = document.querySelectorAll("div.quadr-pilha")
var pilha = Array.from(divsPilha)

function empilhar(){
    
    var numPilha = document.querySelector("input#inptNumPilhas").value

    if (pilha[4].innerHTML != ""){
        alert("PILHA CHEIA!")
    } else {

        var adicionou = false
        pilha.forEach(div => {
            if (div.innerHTML == "" && !adicionou){
                div.innerHTML = numPilha
                adicionou = true
            }
        })

    }

}

function desempilhar(){

    if (pilha[0].innerHTML == ""){
        alert("PILHA VAZIA!")
    } else {

        var retirou = false
        for (var i = 4; i >= 0; i--){
            if (pilha[i].innerHTML != "" && !retirou){
                pilha[i].innerHTML = ""
                retirou = true
            }
        }

    }

}