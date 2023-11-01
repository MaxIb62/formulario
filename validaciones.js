function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var contraseña = document.getElementById("contraseña").value;

    var nombreRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    var telefonoRegex = /^\d{10}$/;
    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    var errores = "";

    if (!nombre.match(nombreRegex)) {
        errores += "Nombre no válido. Debe contener solo letras y espacios.\n";
    }

    if (!email.match(emailRegex)) {
        errores += "Correo electrónico no válido.\n";
    }

    if (!telefono.match(telefonoRegex)) {
        errores += "Número de teléfono no válido. Debe contener 10 dígitos.\n";
    }

    if (!contraseña.match(contraseñaRegex)) {
        errores += "Contraseña no válida. Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un dígito.\n";
    }

    if (errores !== "") {
        alert("Errores:\n" + errores);
        return false;
    }

    // Aquí puedes agregar el código para enviar los datos al servidor
}
