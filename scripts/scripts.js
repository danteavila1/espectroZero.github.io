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


// Servicios
class servicios {
  constructor(nombre, info, precio) {
    this.nombre = nombre;
    this.info = info;
    this.precio = precio;
  }
} 

let videollamada = new servicios(
  'Inspección por videollamada',
  'Con nuestros tecnología de última generación, tenemos la posibilidad de evaluar la existencia de amenazas sobrenaturales de forma remota y determinar el nivel de riesgo fantasmagórico. Si contrata este servicio, además recibirá un talismán virtual de protección en formato JPG. Nuestros expertos pueden ofrecer asistencia en cualquier parte del mundo y en español, tagalog y vietnamita.',
  5000);

  let servs[5] = 

console.log(videollamada.info);

// let  = {
//   nombre: "Inspección por videollamada",
//   info: "Con nuestros tecnología de última generación, tenemos la posibilidad de evaluar la existencia de amenazas sobrenaturales de forma remota y determinar el nivel de riesgo fantasmagórico. Si contrata este servicio, además recibirá un talismán virtual de protección en formato JPG. Nuestros expertos pueden ofrecer asistencia en cualquier parte del mundo y en español, tagalog y vietnamita.",
//   precio: 5000,
// }