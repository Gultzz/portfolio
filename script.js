function lista(){
    var nada = document.getElementById("nadanada").style;
    if(nada.width == "0px" || nada.width == 0){
        nada.width = "564px";
        console.log(nada.width);
    }else if(nada.width == "564px"){
        nada.width = "0px";
        console.log(nada.width);
    }
}