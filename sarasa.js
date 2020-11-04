Los botones de Easy y Hard, tienen un event listener similar solo que lo q cambia es que uno muestra tres y otro 6 colores.para mejorar esto vamos a sacarles el id, y vamos hacer que ambos compartan la misma clase.Comenta las dos funciones de nuestros botones.Ahora seleccionemos los botones y agreguemos un event listener que haga lo siguiente:
    Vamos a darle al botón que clickeamos la clase selected.
Ahora pensemos como actualizar numSquare.Para eso haremos una condicional donde dependiendo el textContent del botón que clickeamos, el valor de numSquare será 3 o 6. Podemos hacerlo usando un operador ternario para ahorrar líneas de código.
Ahora lo que deberíamos hacer es generar nuevos colores en nuestro arreglo, elegir un color ganador, y actualizar el display de la página correctamente.Esto lo estuvimos repitiendo varias veces en nuestro código.Vamos a meterlo directamente en una función reset para simplificar líneas y no repetir siempre lo mismo.
Nuestra función reset debería considerar el mismo
if statement, donde dependiendo si hay un color mostramos el color, y si no hay lo escondemos.Esto funcionaría bien en easy y hard mode, te podés imaginar porque ?
    Ahora sigamos limpiando nuestro código : ahora que tenemos una función reset podemos borrar un poco nuestro código, por ejemplo cuando clickeamos el botón# reset, directamente podemos llamar a esa función.
También podemos usar nuestra función reset cuando recién carga la página, y esta podría estar en una nueva función init, donde pondríamos todo lo que necesita hacer cuando se carga la página, como el evento para nuestros botones de modo y el event listener de los cuadrados.
Ahora como nuestras variables, colors y pickedColor las va a definir reset, solo las deberíamos dejar definidas sin un valor.
Solo faltaría ejecutar init.
Como un último detalle si quiseramos dejar init bien prolijo, podríamos hacer dos funciones para los dos listeners que agregamos, y así init solo sería una función que ejecuta tres funciones.
