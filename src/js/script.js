function startRotation(element) {
    element.style.transition = 'transform 1s ease-in-out'; // Establece una transición suave
    element.style.transform = 'rotate(360deg)'; // Aplica la rotación
}

function stopRotation(element) {
    element.style.transform = ''; // Reinicia la rotación
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
    const rotate_elements = document.querySelectorAll('.rotate');
    const disc_info_elements = document.querySelectorAll('.intro-text');
    
    rotate_elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            startRotation(element);
        });
        element.addEventListener('mouseleave', () => {
            stopRotation(element);
        });
    });

    disc_info_elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            makeDivBlack(element);
        });
        element.addEventListener('mouseleave', () => {
            makeDivNormal(element);
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

document.querySelector('.video-container').addEventListener('click', function() {
    this.innerHTML = '<iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/-O5TxWQkfr0?si=nHm8sRNYgBIfSsYh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
});