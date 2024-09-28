document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío automático del formulario

    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Validar si los campos están vacíos
    if (usuario === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return;  // Detener la ejecución si hay un error
    }

    // Almacenar las credenciales en localStorage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('password', password);
    
    // Redirigir a la página de inicio de sesión
    window.location.href = '/index.html';  // Cambia esta ruta por la que desees
});
