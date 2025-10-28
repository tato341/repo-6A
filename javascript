<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 5 - Variables</title>
</head>
<body>
  <h1>Ejercicio 5: Variables en JavaScript</h1>

  <p>Este ejercicio muestra cómo declarar e inicializar variables con JavaScript.</p>

  <button onclick="mostrarVariables()">Mostrar Variables</button>

  <p id="resultado"></p>

  <a href="index.html">⬅ Volver al índice</a>

  <script type="text/javascript">
    function mostrarVariables() {
      // Declaración de variables
      var name = "Ali";
      var money;
      // Inicialización posterior
      money = 2000.50;

      // Mostrar resultados
      var mensaje = "Nombre: " + name + "<br>Dinero: $" + money;
      document.getElementById("resultado").innerHTML = mensaje;
    }
  </script>
</body>
</html>
