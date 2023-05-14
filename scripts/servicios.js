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
    let div = document.createElement("div");
    div.classList.add("service");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let nombre = document.createTextNode(serv.s[i].nombre);
    let info = document.createTextNode(serv.s[i].info);
    div.appendChild(h3);
    div.appendChild(p);
    h3.appendChild(nombre);
    p.appendChild(info);
    document.querySelector('#lista_servicios').appendChild(div);
}
