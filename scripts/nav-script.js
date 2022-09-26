function openNav() {
  document.getElementById("mySidenav").style.width = "250px"; //? Ancho del navbar
  document.getElementById("icono-menu").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("icono-menu").style.display = "block";
}