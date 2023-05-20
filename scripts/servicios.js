let serv;

fetch('./scripts/servicios.json')
    .then(response => response.json())
    .then(data => {
        serv = data;

        for (i in serv) {
            // Creacción de los elementos
            let div = document.createElement("div");
            div.classList.add("service");
            let h3 = document.createElement("h3");
            let pinfo = document.createElement("p");
            let ppre = document.createElement("p");
            let img = document.createElement("img");
            let button = document.createElement("button");
            
            // Convertir json a variables
            let nombre = document.createTextNode(serv[i].nombre);
            let info = document.createTextNode(serv[i].info);
            let precio = document.createTextNode(serv[i].precio);
            let imagen = serv[i].imagen;
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
            let serv_array = [serv[id].nombre, serv[id].info, serv[id].precio];
        
            // Recargar modal con los elementos correctos
            let modal = document.querySelector("#modal_servicios");
            let modalelements = modal.querySelectorAll(".modser");
            let span = modal.querySelector(".close");
        
            for (n = 0; n < modalelements.length; n++) {
                modalelements[n].innerHTML = serv_array[n];
            }
            modal.querySelector("img").src = "./images/" + serv[id].imagen;

            modal.style.display = 'block';
            
            span.onclick = function() {
                modal.style.display = 'none';
            }
            
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = 'none';
                }
            }
        }
    })
    .catch(error => {
        console.error('Error: ', error);
    })
