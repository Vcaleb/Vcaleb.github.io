var ids = ["presentacion","formacion","aptitudes","experiencia","contacto"];
var idsnav = ["navPresentacion","navFormacion","navAptitudes","navExperiencia","navContacto"];
var nav = document.getElementById("nav")
var pantalla = window.matchMedia("(max-width:600px)")

function reconocerMedia(x){
    if(x.matches){
        return false
    }else{
        return true
    }
}

function mostrar(){
    document.getElementById("barraLateral").style.width = "300px";
    var aux = reconocerMedia(pantalla)
    console.log (aux)
    if (aux){
        document.getElementById("main").style.marginLeft = "300px"
    }
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}
function ocultar(){
    document.getElementById("barraLateral").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

const onClick = (event) => {
    var id = event.srcElement.id;
    event.preventDefault;
    scroll(id);
}
nav.addEventListener("click",onClick);

function scroll(texto){
    for (var i = 0 ; i<idsnav.length ; i++){
        if (idsnav[i] == texto){
        var aux = i;
        var idaux = ids[i];
        }
    }
    var elemento = document.getElementById(idaux);
    elemento.scrollIntoView(true);
    }
