/*clientes carousel*/
// Obtener los elementos del carrusel
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel__item');
const leftBtn = document.querySelector('.carousel__btn--left');
const rightBtn = document.querySelector('.carousel__btn--right');

// Inicializar el índice del que va a ser el elemento activo
let aIndex = 0;

// Agregar un event listener al botón de la izquierda
leftBtn.addEventListener('click', () => {
  // Actualizar el índice del elemento activo
  aIndex--;

  // Si el índice es menor que cero, establecerlo como el último elemento
  if (aIndex < 0) {
    andex = carouselItems.length - 1;
  }

  // Cambiar la clase "active" del elemento activo
  carouselItems.forEach(item => {
    item.classList.remove('active');
  });
  carouselItems[aIndex].classList.add('active');
});

// Agregar un event listener al botón de la derecha
rightBtn.addEventListener('click', () => {
  // Actualizar el índice del elemento activo
  aIndex++;

  // Si el índice es mayor que el número de elementos, establecerlo como el primer elemento
  if (aIndex >= carouselItems.length) {
    aIndex = 0;
  }

  // Cambiar la clase "active" del elemento activo
  carouselItems.forEach(item => {
    item.classList.remove('active');
  });
  carouselItems[aIndex].classList.add('active');
});

// Validacion formulario
(function(){
  var formulario = document.getElementsByName("formulario")[0],
      elementos = formulario.elements,
      boton = document.getElementById("boton");

  var validarNombre = function(e){
    if (formulario.nombre.value == 0) {
      alert("completa el campo nombre");
      e.preventDefault();
    }
  };  
  var validarEmail = function(e){
    if (formulario.email.value == 0) {
      alert("completa el campo email");
      e.preventDefault();
    }
  }; 
  var validarAsunto = function(e){
    if (formulario.asunto.value == 0) {
      alert("completa el campo asunto");
      e.preventDefault();
    }
  }; 
  var validarComentarios = function(e){
    if (formulario.comentarios.value == 0) {
      alert("completa el campo comentarios");
      e.preventDefault();
    }
  };

  var validar = function(e){
      validarNombre(e);
      validarEmail(e);
      validarAsunto(e);
      validarComentarios(e);
  };    
      formulario.addEventListener("submit", validar);
}())
