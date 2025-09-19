let auxlstamiwis;
let listamiwis=[];
let ganador;

function agregarAmigo(){

    if(document.getElementById("nuevoamigo").value == ""){
        document.getElementById("nuevoamigo").value = "";
        return alert( "error, no has escrito nada")
    }
    else if(/[^a-zA-Z\s]/.test(document.getElementById("nuevoamigo").value)){
        document.getElementById("nuevoamigo").value = "";
        alert ("no se permiten numeros ni simbolos")
    }else{
        auxlstamiwis = document.getElementById("listaAmigos").textContent;
        document.getElementById("listaAmigos").innerHTML = listamiwis.length==0? document.getElementById("nuevoamigo").value : auxlstamiwis+", "+document.getElementById("nuevoamigo").value ;
        listamiwis.push(document.getElementById("nuevoamigo").value);
        document.getElementById("nuevoamigo").value = "";
        return;
    }
}

function sortearAmigo(){
    ganador = listamiwis[Math.floor(Math.random() * listamiwis.length + 1)];
    console.log(ganador);
    document.getElementById("resultado").innerHTML = ganador;
    document.getElementById("titulo").innerHTML = "Felicidades!<br> el amigo secreto es :";
}