document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío automático del formulario

    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Validar si los campos están vacíos
    if (usuario === 'admin' && password === 'admin') {
        location.href = '/pages/ok.html';   // Detener la ejecución si hay un error
    }

    // Si la validación es exitosa, redirigir a otra página
     // Cambia esta ruta por la que desees
});
