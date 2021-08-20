window.onload = reload, horario;
function lista(){
    var load = document.getElementById("load").style;
    var nada = document.getElementById("nadanada").style;
    if(nada.width == "0px" || nada.width == 0){
        nada.width = "590px";
        load.display = "block";
        console.log(nada.width);
    }else if(nada.width == "590px"){
        nada.width = "0px";
        load.display = "none";
        console.log(nada.width);
    }
}

function reload(){
    var barraTxt = document.getElementById("barra").style;
    setTimeout(() => {
        if(barraTxt.display == "none"){
            barraTxt.display = "inline";
        }else if(barraTxt.display == "inline"){
            barraTxt.display = "none";
        }else{
            barraTxt.display = "none";
        }
        reload();
        
    }, 1000);
        
}
// function horario(){

//     setTimeout(() => {
//         if(document.getElementById("data").innerHTML != Date()){
//             document.getElementById("data").innerHTML = Date().toString;
//         }else{
//             document.getElementById("data").innerHTML = Date().toString;
//         }
//     },1000);

//     horario();
// }