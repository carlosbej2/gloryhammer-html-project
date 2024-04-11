function startRotation(element) {
    element.style.transition = 'transform 1s ease-in-out'; // Establece una transición suave
    element.style.transform = 'rotate(360deg)'; // Aplica la rotación
}

function stopRotation(element) {
    element.style.transform = ''; // Reinicia la rotación
}
