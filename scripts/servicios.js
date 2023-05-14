let serv =
{
    "s": [
        { 
            "id": 0,    
            "nombre": "Inspección por videollamada",
            "info": "Con nuestros tecnología de última generación, tenemos la posibilidad de evaluar la existencia de amenazas sobrenaturales de forma remota y determinar el nivel de riesgo fantasmagórico. Si contrata este servicio, además recibirá un talismán virtual de protección en formato JPG. Nuestros expertos pueden ofrecer asistencia en cualquier parte del mundo y en español, tagalog y vietnamita.",
            "precio": 5000
        },
        {
            "id": 1,
            "nombre": "Departamentos, negocios y casas no antiguas",
            "info": "¿Últimamente siente que le están observando? ¿Hay cosas siempre encuentra fuera de lugar? ¿Ve sombras moverse de noche? ¡Es posible que tu hogar se encuentre embrujado! Nuestro equipo puede viajar a cualquier parte del país y eliminar la fuente de sus problemas. (Siempre y cuando sea un fantasma y no un stalker)",
            "precio": 20000
        }
    ]
};

console.log(serv.s[0].info);
for (i in serv.s) {
    // Creacción de los elementos
    let div = document.createElement("div");
    div.classList.add("service");
    let h3 = document.createElement("h3");
    let pinfo = document.createElement("p");
    let ppre = document.createElement("p");
    let button = document.createElement("button");
    
    // Convertir json a variables
    let nombre = document.createTextNode(serv.s[i].nombre);
    let info = document.createTextNode(serv.s[i].info);
    let precio = document.createTextNode(serv.s[i].precio);
    let sabermas = document.createTextNode("Más información");
    
    // Adjuntar elementos a variables
    h3.appendChild(nombre);
    pinfo.appendChild(info);
    ppre.appendChild(precio);

    // Capacidades del botón
    button.addEventListener("click", test);

    // Imprimir lista de elementos por nombre
    div.appendChild(h3);
    div.appendChild(button);
    button.appendChild(sabermas);
    document.querySelector('#lista_servicios').appendChild(div);
}

function test() {
    console.log("test");
}