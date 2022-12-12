let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");

function expand(img){
  modal.style.display = "block";
  modalImg.src = img.src;
  // captionText.innerHTML = img.alt;
}

let botonCerrar = document.getElementsByClassName("closeModal")[0];

botonCerrar.onclick = function() { 
  modal.style.display = "none";
}