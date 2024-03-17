function generateSeed() {
    return Math.floor(Math.random() * 100000);
}

// Selecciona el botón
const buttonRandom = document.querySelector('.randomAvatarButton');

// Añade el event listener
buttonRandom.addEventListener('click', function() {
    // Genera un valor único para el parámetro seed
    const seed = generateSeed();

    // Realiza la petición a la API de avatars con el valor único para seed
    fetch(`https://api.dicebear.com/8.x/pixel-art/svg?seed=${seed}`)
    .then(response => response.text()) // Maneja la respuesta como texto
    .then(data => {
        // Actualiza la imagen del avatar con el SVG obtenido
        const avatarImage = document.getElementById('avatarImage');
        avatarImage.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);
    })
    .catch(error => {
        console.error('Error fetching random avatar:', error);
    });
});