function lista(){
    var nada = document.getElementById("nadanada").style;
    if(nada.width == "0px" || nada.width == 0){
        nada.width = "590px";
        console.log(nada.width);
    }else if(nada.width == "590px"){
        nada.width = "0px";
        console.log(nada.width);
    }
}