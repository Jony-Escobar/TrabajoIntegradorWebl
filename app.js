const 
boton_left=document.querySelector(".boton-left"),
boton_right=document.querySelector(".boton-right"),
slider=document.querySelector("#slider"),
carrusel_section=document.querySelectorAll(".carrusel-section"),
final=document.querySelector(".final")
final2=document.querySelector(".final2");
let op=0,
tamaño=100 / carrusel_section.length,
cont=0,
contador2,
contador3,
contacto_nombre=document.getElementById("nombres"),
contacto_apellido=document.getElementById("apellido"),
contacto_mail=document.getElementById("correo"),
boton_contacto=document.getElementById("botons"),
contacto_consulta=document.getElementById("consulta"),
errores=document.getElementById("result"),
Enviado=document.getElementById("result_enviado");
function validar(){
    let errores_1;
    contacto_nombre.classList.remove("error")
    contacto_apellido.classList.remove("error")
    contacto_consulta.classList.remove("error")
    contacto_mail.classList.remove("error")
    Enviado.innerHTML="";
    errores.innerHTML="";
    if (contacto_nombre.value=="" ||contacto_nombre.value.length>20) {
        errores_1=document.createElement("p");
        errores.appendChild(errores_1);
        errores_1.innerHTML="Nombre invalido";
        contacto_nombre.classList.add("error")
    }
    if (contacto_apellido.value=="" ||contacto_nombre.value.length>20) {
        errores_1=document.createElement("p");
        errores.appendChild(errores_1);
        errores_1.innerHTML="Apellido invalido";
        contacto_apellido.classList.add("error")
    }
    if (contacto_consulta.value=="" ||contacto_nombre.value.length>200) {
        errores_1=document.createElement("p");
        errores.appendChild(errores_1);
        errores_1.innerHTML="Consulta invalida";
        contacto_consulta.classList.add("error")
    }
    if (contacto_mail.value=="") {
        errores_1=document.createElement("p");
        errores.appendChild(errores_1);
        errores_1.innerHTML="Correo invalido";
        contacto_mail.classList.add("error")
    }
    if (contacto_nombre.value.length>=1 &&
        contacto_apellido.value.length>=1 &&
        contacto_consulta.value.length>=1 &&
        contacto_mail.value.length>=1) {
            errores_1=document.createElement("p");
            errores.appendChild(errores_1);
            errores_1.innerHTML="Enviado exitosamente";
            contador3=true;
    }else{
        contador3=false;
        console.log("error");
    }
    console.log(contador3)
    let datos
    if (contador3) {
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Nombre: "+contacto_nombre.value;
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Apellido: "+contacto_apellido.value;
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Correo: "+contacto_mail.value;
        datos=document.createElement("p");
        Enviado.appendChild(datos);
        datos.innerHTML="Consulta: "+contacto_consulta.value; 
    }
    contador2=true;
    if (contador2) {
        final.style.opacity="100%"
    }
    if (contador3) {
        final2.style.opacity="100%"
    }
    return false;
}


if (boton_right) {
    boton_right.addEventListener("click",e=> Right());
}
if (boton_left) {
    boton_left.addEventListener("click",e=> left());
}

function Right() {
    if (cont >=carrusel_section.length-1) {
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
function left() {
    cont--;
    if (cont <0) {
        cont=carrusel_section.length-1;
        op=tamaño*(carrusel_section.length-1);
        slider.style.transform = `translate(-${op}%)`;
        slider.style.transition="all ease .8s"
    }else{
        op=op-tamaño
        slider.style.transform = `translate(-${op}%)`;
        slider.style.transition="all ease .8s"
    }
}
function contacto() {
}

