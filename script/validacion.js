document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío automático del formulario

    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Obtener las credenciales almacenadas en localStorage
    const storedUsuario = localStorage.getItem('usuario');
    const storedPassword = localStorage.getItem('password');

    if (usuario === 'admin' && password === 'admin') {
        window.location.href = 'ok.html';  // Cambia esta ruta por la que desees
    } 
    // Validar las credenciales
    if (usuario === storedUsuario && password === storedPassword) {
        window.location.href = '/pages/ok.html';  // Cambia esta ruta por la que desees
    } else {
        alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
});
