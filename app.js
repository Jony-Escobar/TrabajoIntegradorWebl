const 
btn_izq=document.querySelector(".boton-left"),
btn_der=document.querySelector(".boton-right"),
slider=document.querySelector("#slider"),
carrousel=document.querySelectorAll(".carrusel-section"),
final=document.querySelector(".final");
let op=0, tamaño=100 / carrousel.length, cont=0, contador2, contador3;

if (btn_der) {
    btn_der.addEventListener("click",()=> derecha());
}
if (btn_izq) {
    btn_izq.addEventListener("click",()=> izquierda());
}

function derecha() {
    if (cont >=carrousel.length-1) {
        cont=0;
        op=0;
        slider.style.transform = `translate(-${op}%)`;
        slider.style.transition="all ease .8s"
    }else{
        cont++;
        op=op+tamaño
    slider.style.transform = `translate(-${op}%)`;
    slider.style.transition="all ease .8s"
    }
}
function izquierda() {
    cont--;
    if (cont <0) {
        cont=carrousel.length-1;
        op=tamaño*(carrousel.length-1);
        slider.style.transform = `translate(-${op}%)`;
        slider.style.transition="all ease .8s"
    }else{
        op=op-tamaño
        slider.style.transform = `translate(-${op}%)`;
        slider.style.transition="all ease .8s"
    }
}

function validar(){
    let
        nombre=document.getElementById("nombres"),
        apellido=document.getElementById("apellido"),
        email=document.getElementById("correo"),
        consulta=document.getElementById("consulta"),
        error=document.getElementById("result"),
        Enviado=document.getElementById("result_enviado");
    let error2,datos;
        nombre.classList.remove("error")
        apellido.classList.remove("error")
        consulta.classList.remove("error")
        email.classList.remove("error")
        Enviado.innerHTML="";
        error.innerHTML="";
    if (nombre.value=="" ||nombre.value.length>20) {
        error2=document.createElement("p");
        error.appendChild(error2);
        error2.innerHTML="Error. Nombre incorrecto";
        nombre.classList.add("error")
     }
    if (apellido.value=="" ||nombre.value.length>20) {
        error2=document.createElement("p");
        error.appendChild(error2);
        error2.innerHTML="Error. Apellido incorrecto";
        apellido.classList.add("error")
    }
    if (consulta.value=="" ||nombre.value.length>200) {
        error2=document.createElement("p");
        error.appendChild(error2);
        error2.innerHTML="Error. Consulta incorrecta";
        consulta.classList.add("error")
    }
    if (email.value=="") {
        error2=document.createElement("p");
        error.appendChild(error2);
        error2.innerHTML="Error. Email incorrecto";
        email.classList.add("error")
    }
    if (nombre.value.length>=1 &&
        apellido.value.length>=1 &&
        consulta.value.length>=1 &&
        email.value.length>=1) {
        error2=document.createElement("p");
        error.appendChild(error2);
        error2.innerHTML="Consulta enviada correctamente";
        contador3=true;
    }else{
        contador3=false;
    }    
    if (contador3) {
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Su nombre: "+nombre.value;
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Su apellido: "+apellido.value;
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Su email: "+email.value;
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Su consulta: "+consulta.value; 
    }
    return false;
}