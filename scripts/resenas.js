let resenas;

fetch('./scripts/resenas.json')
    .then(response => response.json())
    .then(data => {
        resenas = data;
        for (i in resenas) {
            // Creación de nodes por cada elemento HTML
            let caja = document.createElement("div");
            caja.classList.add("testimonios_caja");
            let caja_top = document.createElement("div");
            caja_top.classList.add("caja_top");
            let perfil = document.createElement("div");
            perfil.classList.add("perfil");
            let perfil_img = document.createElement("div");
            perfil_img.classList.add("perfil_img");
            let img = document.createElement("img");
            let name_user = document.createElement("div");
            name_user.classList.add("name_user")
            let usuario = document.createElement("strong");
            let spanRes = document.createElement("span");
            let starsBox = document.createElement("div");
            starsBox.classList.add("resenas");
            let commentBox = document.createElement("div");
            commentBox.classList.add("comentarios_clientes");
            let comentario = document.createElement("p");
        
            // Json a variables
            let ppic = resenas[i].profile.photo;
            let names = document.createTextNode(resenas[i].profile.name);
            let user = document.createTextNode(resenas[i].profile.user);
            let stars = resenas[i].stars;
            let comment = document.createTextNode(resenas[i].comment);

            // Crear i por cantidad de estrellas
            let estrellas = [];
            for (i = 0; i < stars; i++) {
                estrellas[i] = document.createElement("i");
                estrellas[i].classList.add("fa","fa-star");
            }
            

            // Adjuntar variables a elementos
            img.src = ppic;
            usuario.appendChild(names);
            spanRes.appendChild(user);
            comentario.appendChild(comment);

            // Combinar divs
            caja.appendChild(caja_top);
            caja_top.appendChild(perfil);
            perfil.appendChild(perfil_img);
            perfil_img.appendChild(img);

            perfil.appendChild(name_user);
            name_user.appendChild(usuario);
            name_user.appendChild(spanRes);
            
            caja_top.appendChild(starsBox);
            for (i = 0; i < stars; i++) {
                starsBox.appendChild(estrellas[i]);
            }

            caja.appendChild(commentBox);
            commentBox.appendChild(comentario);
            document.querySelector('.testimonios_contenedor').appendChild(caja);
        }
    })