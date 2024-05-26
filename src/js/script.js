function startRotation(element) {
    element.style.transition = 'transform 1s ease-in-out'; // Establece una transición suave
    element.style.transform = 'rotate(360deg)'; // Aplica la rotación
}

function stopRotation(element) {
    element.style.transform = ''; // Reinicia la rotación
}

function startLogoAnimation(element) {
    element.style.transition = 'transform 0.5s ease-in-out'; // Establece una transición suave para la animación
    element.style.transform = 'scale(1.1)'; // Aplica un efecto de escala cuando el cursor está sobre la imagen
}

function stopLogoAnimation(element) {
    element.style.transition = 'transform 0.5s ease-in-out'; // Establece una transición suave para la animación
    element.style.transform = 'scale(1)'; // Devuelve la imagen a su tamaño original cuando el cursor se retira
}

function makeDivBlack(introText) {
    introText.style.backgroundColor = 'rgba(0, 0, 0, .5)'; //Oscurecer el fondo al pasar el cursor sobre él
    introText.style.borderRadius = '5%'; // Hace que el borde del texto sea redondeado
}

function makeDivNormal(introText) {
    introText.style.backgroundColor = 'transparent'; // Devuelve el fondo a su color original cuando el cursor se quita de encima
}

//Fuente: https://codepen.io/joshuacba08-the-encoder/pen/WNoNVOq
//Fuente: https://stackoverflow.com/questions/72855185/javascript-typing-effect-function

document.addEventListener("mouseenter", function() {
    const elements = document.querySelectorAll('.rotate');
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            startRotation(element);
        });
        element.addEventListener('mouseleave', () => {
            stopRotation(element);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function typeWriterEffect(elementClass, speed = 120) {
      const textElement = document.querySelector(`.${elementClass}`);
      if (!textElement) return;
  
      const textContent = textElement.innerHTML;
      textElement.innerHTML = "";
  
      let index = 0;
      function typeWriter() {
        if (index < textContent.length) {
          textElement.innerHTML += textContent.charAt(index);
          index++;
          setTimeout(typeWriter, speed);
        }
      }
      setTimeout(typeWriter, speed);
    }
    typeWriterEffect("animate-text", 120);
});