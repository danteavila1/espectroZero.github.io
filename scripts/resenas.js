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
            let usuario = document.createElement("strong");
            let spanRes = document.createElement("span");
            let starsBox = document.createElement("div");
            starsBox.classList.add("resenas");
            stars.classList.add("fas fa-star");
            let commentBox = document.createElement("div");
            commentBox.classList.add("comentarios_clientes");
            let comentario = documents.createElement("p");
        
            // Json a variables
            ppic = resenas[i].profile.photo;
            names = resenas[i].profile.name;
            user = resenas[i].profile.user;
            stars = resenas[i].stars;
            comment = resenas[i].comment;

            // Crear i por cantidad de estrellas
            let estrellas = [];
            for (i in stars) {
                estrellas.push(document.createElement("i"));
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

            caja_top.appendChild(name_user);
            name_user.appendChild(usuario);
            name_user.appendChild(spanRes);
            spanRes.appendChild(estrellas);

            caja.appendChild(commentBox);
            commentBox.appendChild(comentario);
            document.querySelector('testimonios_contenedor').appendChild(caja);
        }
    })