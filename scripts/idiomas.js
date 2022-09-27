//TODO agregar local storage para guardar el idioma elegido


let traducciones;
fetch("./scripts/traducciones.json")
  .then((response) => response.json())
  .then((data) => {
    traducciones = data;
  });

let idiomaElegido = "es";

let botonIdioma = document.getElementById("bandera");
botonIdioma.addEventListener("click", seleccionarIdioma);

function cambiarIdioma() {
  for (let i = 0; i < document.getElementsByClassName("traducir").length; i++) {
    document.getElementsByClassName("traducir")[i].innerText =
      traducciones[document.getElementsByClassName("traducir")[i].id][
        idiomaElegido
      ];
  }
}

async function seleccionarIdioma() {
  const { value: idioma } = await Swal.fire({
    //FIXME Cambiar el color del boton del sweetalert
    title: traducciones["selectLanguage"][idiomaElegido],
    input: "select",
    inputOptions: traducciones.input,
  });
  if (idioma) {
    idiomaElegido = idioma;
    document.getElementById("bandera").src =
      "./images/icons/" + idiomaElegido + ".png";
    cambiarIdioma();
  }
}
