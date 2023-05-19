let serv =
{
    "s": [
        { 
            "id": 0,    
            "nombre": "Inspección por videollamada",
            "info": "Con nuestros tecnología de última generación, tenemos la posibilidad de evaluar la existencia de amenazas sobrenaturales de forma remota y determinar el nivel de riesgo fantasmagórico. Si contrata este servicio, además recibirá un talismán virtual de protección en formato JPG. Nuestros expertos pueden ofrecer asistencia en cualquier parte del mundo y en español, tagalog y vietnamita.",
            "precio": 5000,
            "imagen": "logo-simple.png"
        },
        {
            "id": 1,
            "nombre": "Departamentos, negocios y casas no antiguas",
            "info": "¿Últimamente siente que le están observando? ¿Hay cosas siempre encuentra fuera de lugar? ¿Ve sombras moverse de noche? ¡Es posible que tu hogar se encuentre embrujado! Nuestro equipo puede viajar a cualquier parte del país y eliminar la fuente de sus problemas. (Siempre y cuando sea un fantasma y no un stalker)",
            "precio": 20000,
            "imagen": "logo-simple.png"
        },
        {
            "id": 2,
            "nombre": "Edificios modernos y lugares públicos",
            "info": "Lo crea o no, los fantasmas no solo buscan lugares abandonados, algunos prefieren la compañía de la gente y ver las últimas la televisión, y pueden parecer inocentes, pero son un peligro cuando borran los excels de las rendiciones de cuentas o asustan a tu equipo de futbol local favorito. ¡Nuestro equipo termina con estas amenazas antes del final de temporada!",
            "precio": 40000,
            "imagen": "logo-simple.png"
        },
        {
            "id": 3,
            "nombre": "Hospitales y edificios abandonados",
            "info": "Ambos tipos de lugares atráen muchas energías negativas y los espectros que los rodean suelen alimentarse de ellas, para eliminarlos, nuestros profesionales podrán capturarlos en contenedores especiales, y además decorar todas las habitaciones con globos y adornos, ¡auyentarán hasta al fantasma más emo que los vea!",
            "precio": 50000,
            "imagen": "logo-simple.png"
        },
        {
            "id": 4,
            "nombre": "Prisiones y estaciones de policía antiguas",
            "info": "Estos lugares no solo generan muchas energías negativas sino que además los espíritus que habitan sus pasillos suelen ser violentos. ¡Nuestros profesionales para enfrentar estas amenazas necesitan usar su astucia y han entrenado en el jujitsu espiritual y el kickboxing fantasmagórico para asegurarse de no perder en el ring contra ningún maleante! (El precio es más que nada para cubrirles el seguro).",
            "precio": 70000,
            "imagen": "logo-simple.png"
        },
        {
            "id": 5,
            "nombre": "Mansiones abandonadas, cementerios antiguos y altares prohibidos",
            "info": "Si usted vive en uno de estos lugares, su vida corre mucho peligro, ¡pero no tema! ¡Nuestros profesionales podrán ponerle en contacto en instantes con una inmoviliaria para conseguirle un nuevo lugar donde vivir! Nuestros profesionales se rehusan a ir.",
            "precio": 5000,
            "imagen": "logo-simple.png"
        },
    ]
};

let modalchild = false;

for (i in serv.s) {
    // Creacción de los elementos
    let div = document.createElement("div");
    div.classList.add("service");
    let h3 = document.createElement("h3");
    let pinfo = document.createElement("p");
    let ppre = document.createElement("p");
    let img = document.createElement("img");
    let button = document.createElement("button");
    
    // Convertir json a variables
    let nombre = document.createTextNode(serv.s[i].nombre);
    let info = document.createTextNode(serv.s[i].info);
    let precio = document.createTextNode(serv.s[i].precio);
    let imagen = serv.s[i].imagen;
    let sabermas = document.createTextNode("Más información");
    
    // Adjuntar elementos a variables
    h3.appendChild(nombre);
    pinfo.appendChild(info);
    ppre.appendChild(precio);
    img.src = 'images/' + imagen;
    img.alt = "Logo";

    // Capacidades del botón
    button.addEventListener("click", masinfo.bind(null, i), false);

    // Imprimir lista de elementos por nombre
    div.appendChild(h3);
    div.appendChild(button);
    div.appendChild(img);
    button.appendChild(sabermas);
    document.querySelector('#lista_servicios').appendChild(div);
}

function masinfo(id) {
    // Convertir json a variables
    let serv_array = [serv.s[id].nombre, serv.s[id].info, serv.s[id].precio];

    // Recargar modal con los elementos correctos
    let modal = document.querySelector("#modal_servicios");
    let modalelements = modal.querySelectorAll(".modser");

    for (n = 0; n < modalelements.length; n++) {
        modalelements[n].innerHTML = serv_array[n];
    }
    modal.querySelector("img").src = "./images/" + serv.s[id].imagen;
}

function hide() {
    this.classList.add(hide);
}