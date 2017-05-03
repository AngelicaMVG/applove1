// var btnmenu = document.getElementsByClassName('btn-menu');
// var menuBar = document.getElementById('menu');
// var contador = 1;
// function menu (){
//   if(contador== 1){
//     menuBar.getAttribute('left','100%');
//   } else {
//
//   }
// };


var modal = document.getElementById('myModal');
var img = document.getElementsByClassName('img-func');

for(var i = 0; i < img.length; i++){
  img[i].addEventListener('click', mostrarImagen);
};

function mostrarImagen(){
  var modal =document.getElementById('myModal');
  var modalImg = document.getElementById('img01');
  modal.style.display = 'block';
  modalImg.src = this.src;
};

var span = document.getElementById('close');

function cerrar (){
  modal.style.display = 'none';
};

span.addEventListener('click', cerrar);
