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

