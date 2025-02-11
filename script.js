document.getElementById('envelopeImg').addEventListener('click', function() {
    const envelopeImg = document.getElementById('envelopeImg');
    const birthdayImage = document.getElementById('birthdayImage');
    const birthdayMessage = document.getElementById('birthdayMessage');

    // Cambia la imagen del sobre cerrado a abierto
    envelopeImg.src = 'abierto.png';

    // Muestra la imagen del mensaje de cumpleaños
    birthdayImage.style.display = 'block';

    // Muestra el mensaje de texto
    birthdayMessage.classList.remove('hidden');
});

