<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Iniciar Sesión</h1>

    <form>
        <label>Usuario:</label>
        <input type="text" id="usuario"><br><br>

        <label>Contraseña:</label>
        <input type="password" id="password"><br><br>

        <button type="button" onclick="login()">Ingresar</button>
    </form>

    <p id="resultado"></p>

    <script>
        function login() {
            let user = document.getElementById("usuario").value;
            let pass = document.getElementById("password").value;

            if (user === "admin" && pass === "1234") {
                document.getElementById("resultado").innerText = "Login exitoso";
            } else {
                document.getElementById("resultado").innerText = "Datos incorrectos";
            }
        }
    </script>

    <br>
    <a href="index.html">Volver al inicio</a>
</body>
</html>
