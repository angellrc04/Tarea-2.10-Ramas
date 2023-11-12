/*************************************************************************
 * 
 * Dado el index.html el cual NO SE PUEDE MODIFICAR crea un archivo javascript 
 * con la siguiente funcionalidad:
 * Al hacer click sobre el boton "Descender a Segunda División"
 * el primer equipo de la lista de Primera División deberá pasar al final  
 * la lista de Segunda División.
 * 
 * Para la lista de segunda división se realizará la misma operación pero pasando
 * los equipos a la lista de Primera División. 
 * 
 * Ya sea haciendo clic en el botón "Descender a Segunda División" como haciendo clic
 * en el botón de "Ascender a Primera División" si no hay equipos en la lista para
 * ascender o descender deberá saltar un Alert que diga "NO HAY MÁS EQUIPOS". 
 * 
 * Ayuda: El primer hijo de cualquier elemento del DOM es la propiedad 
 * firstElementChild de dicho elemento.
 *
 *******************************************************************************/

{
    let iniciar = function () {
        const listaPrimera = document.getElementById("ulprimera");
        const listaSegunda = document.getElementById("ulsegunda");
        const btnAscender = document.getElementById("btnasc");
        const btnDescender = document.getElementById("btndesc");
        btnAscender.addEventListener("click", ascender);
        btnDescender.addEventListener("click", descender);

        function agregarManejadoresDeEventos() {
            for (let item of listaPrimera.children) {
                item.addEventListener("mouseover", mostrarInformacion);
                item.addEventListener("mouseout", ocultarInformacion);
            }

            for (let item of listaSegunda.children) {
                item.addEventListener("mouseover", mostrarInformacion);
                item.addEventListener("mouseout", ocultarInformacion);
            }
        }

        function ascender() {
            if (listaPrimera.firstElementChild) {
                let elemento = document.createElement("li");
                elemento.setAttribute("class", "list-group-item");
                elemento.textContent = listaPrimera.firstElementChild.textContent;
                listaPrimera.firstElementChild.remove();
                listaSegunda.appendChild(elemento);
                agregarManejadoresDeEventos();
            } else {
                alert("😩¡QUE NO HAY MÁS EQUIPOS DE PRIMERA!");
            }
        }

        function descender() {
            if (listaSegunda.firstElementChild) {
                let elemento = document.createElement("li");
                elemento.setAttribute("class", "list-group-item");
                elemento.textContent = listaSegunda.firstElementChild.textContent;
                listaSegunda.firstElementChild.remove();
                listaPrimera.appendChild(elemento);
                agregarManejadoresDeEventos();
            } else {
                alert("😩¡QUE NO HAY MÁS EQUIPOS DE SEGUNDA!");
            }
        }

        function mostrarInformacion(event) {
            const informacionEquipos = {
                "Real Madrid": {
                    escudo: "./imagenes/real_madrid.png",
                    presidente: "Florentino Perez",
                    delanteros: "Vinícius Júnior",
                },
                "FC Barcelona": {
                    escudo: "./imagenes/fc_barcelona.png",
                    presidente: "Joan Laporta",
                    delanteros: "Lewandowski",
                },
                "Atlético de Madrid": {
                    escudo: "./imagenes/atletico_madrid.png",
                    presidente: "Enrique Cerezo",
                    delanteros: "Antoine Griezmann",
                },
                "Espanyol": {
                    escudo: "./imagenes/espanyol.png",
                    presidente: "Antonio Ubeda",
                    delanteros: "Julian Mendez",
                },
                "Alcoyano FC": {
                    escudo: "./imagenes/alcoyano.png",
                    presidente: "Cheng Huan",
                    delanteros: "Daniel Sanchez",
                },
                "Écija FC": {
                    escudo: "./imagenes/ecija.png",
                    presidente: "Fernando Gajete",
                    delanteros: "Manuel Romero Martinez",
                },
                "Espeleño FC": {
                    escudo: "./imagenes/espelenio.png",
                    presidente: "Jose luis",
                    delanteros: "Pedro Ramirez",
                },
                "Girona": {
                    escudo: "./imagenes/girona.png",
                    presidente: "Sergio Perez",
                    delanteros: "Manuel Jordan",
                },
            };

            const equipo = event.currentTarget;
            const nombreEquipo = equipo.textContent.trim();

            if (nombreEquipo in informacionEquipos) {
                const info = informacionEquipos[nombreEquipo];
                const infoDiv = document.createElement("div");
                const escudoImg = document.createElement("img");
                escudoImg.setAttribute("src", info.escudo);
                escudoImg.setAttribute("alt", "Escudo del equipo");
                const presidenteP = document.createElement("p");
                presidenteP.textContent = `Presidente: ${info.presidente}`;
                const delanterosP = document.createElement("p");
                delanterosP.textContent = `Delanteros: ${info.delanteros}`;
                infoDiv.appendChild(escudoImg);
                infoDiv.appendChild(presidenteP);
                infoDiv.appendChild(delanterosP);
                equipo.appendChild(infoDiv);
            }
        }

        function ocultarInformacion(event) {
            const equipo = event.currentTarget;
            const infoDiv = equipo.querySelector("div");
            if (infoDiv) {
                equipo.removeChild(infoDiv);
            }
        }

        agregarManejadoresDeEventos();
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}

