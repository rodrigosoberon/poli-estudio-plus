let traducciones;
fetch("./scripts/traducciones.json")
  .then((response) => response.json())
  .then((data) => {
    traducciones = data;
  })
  .then(()=>traducir())

function traducir() {
  for (let i = 0; i < document.getElementsByClassName("traducir").length; i++) {
    document.getElementsByClassName("traducir")[i].innerText =
      traducciones[document.getElementsByClassName("traducir")[i].id][
        idiomaElegido
      ];
  }
}

let idiomaElegido = localStorage.getItem("language") || "es"
let botonIdioma = document.getElementById("bandera");
botonIdioma.src = "./images/icons/" + idiomaElegido + ".png";
botonIdioma.addEventListener("click", seleccionarIdioma);


async function seleccionarIdioma() {
  const { value: idioma } = await Swal.fire({
    confirmButtonColor: '#212529',
    title: traducciones["selectLanguage"][idiomaElegido],
    input: "select",
    inputOptions: traducciones.input,
  });
  if (idioma) {
    idiomaElegido = idioma;
    localStorage.setItem("language", idiomaElegido)
    document.getElementById("bandera").src =
      "./images/icons/" + idiomaElegido + ".png";
    traducir();
  }
}
