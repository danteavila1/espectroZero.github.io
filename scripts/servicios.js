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
            
            // Convertir json a variables
            let nombre = document.createTextNode(serv[i].nombre);
            let nombreOption = document.createTextNode(serv[i].nombre);
            let info = document.createTextNode(serv[i].info);
            let precio = document.createTextNode(serv[i].precio);
            let imagen = serv[i].imagen;
            
            // Adjuntar elementos a variables
            h3.appendChild(nombre);
            pinfo.appendChild(info);
            ppre.appendChild(precio);
            div.style.backgroundImage = 'url(' + imagen + ')';
        
            // Capacidades del botón
            div.addEventListener("click", masinfo.bind(null, i), false);
        
            // Imprimir lista de elementos por nombre
            div.appendChild(h3);
            document.querySelector('#lista_servicios').appendChild(div);

            // Completar form
            let option = document.createElement("option");
            option.appendChild(nombreOption);
            option.value = serv[i].id;
            document.querySelector('#servForm').appendChild(option);
        }
        let otroOption = document.createElement("option");
        let otroOptiontxt = document.createTextNode("Otro");
        otroOption.appendChild(otroOptiontxt);
        otroOption.value = "otro";
        document.querySelector('#servForm').appendChild(otroOption);
        
        function masinfo(id) {
            // Convertir json a variables
            let serv_array = [serv[id].nombre, serv[id].info, "Precio: $" + serv[id].precio];
        
            // Recargar modal con los elementos correctos
            let modal = document.querySelector("#modal_servicios");
            let modalelements = modal.querySelectorAll(".modser");
            let span = modal.querySelector(".close");
            let button = modal.querySelector("#contratar");
            const llenarFormEvLi = () => llenarForm(id);
            
        
            for (n = 0; n < modalelements.length; n++) {
                modalelements[n].innerHTML = serv_array[n];
            }

            modal.style.display = 'block';
            
            span.onclick = function() {
                modal.style.display = 'none';
                button.removeEventListener('click', llenarFormEvLi);
            }
            
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    button.removeEventListener('click', llenarFormEvLi);
                    return;
                }
            }
            button.addEventListener('click', llenarFormEvLi);
            function llenarForm(id) {
                modal.style.display = 'none';
                let contactoDiv = document.querySelector('form');
                contactoDiv.scrollIntoView({behavior: 'smooth'});
                let servicioSelect = document.querySelector('#servForm');
                servicioSelect.selectedIndex = id;
            }
            
        }
    })
    .catch(error => {
        console.error('Error: ', error);
    })

