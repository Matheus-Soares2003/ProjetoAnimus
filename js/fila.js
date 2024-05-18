var divsFila = document.querySelectorAll("div.quadr-fila")
var fila = Array.from(divsFila)

function enqueue(){
    
    var numFila = document.querySelector("input#inptNumFilas").value

    if (fila[4].innerHTML != ""){
        alert("FILA CHEIA!")
    } else {

        var adicionou = false
        fila.forEach(div => {
            if (div.innerHTML == "" && !adicionou){
                div.innerHTML = numFila
                adicionou = true
            }
        })

    }

}

function dequeue(){

    if (fila[0].innerHTML == ""){
        alert("FILA VAZIA!")
    } else {

        var retirou = false
        for (var i = 4; i >= 0; i--){
            if (fila[i].innerHTML != "" && !retirou){
                fila[i].innerHTML = ""
                retirou = true
            }
        }

    }

}