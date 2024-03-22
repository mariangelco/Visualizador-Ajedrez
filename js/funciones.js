var contadorPaso = 0;
var turno=true;
var i=0;
var j=0;

//Coloca las piezas en su lugar
function iniciar(){
    var celdas = document.getElementById("Tablero");
  celdas.rows[2].cells[1].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[2].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[3].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[4].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[5].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[6].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[7].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[8].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";

  celdas.rows[7].cells[1].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[2].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[3].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[4].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[5].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[6].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[7].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[8].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";

  celdas.rows[8].cells[3].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReyB.png); background-size:cover;";
  celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[5].style =
    "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/ReinaN.png); background-size:cover;";
}

//Regresa las partidas almacenadas
function cargarPartida() {
    var selectBox = document.getElementById("Combo");
    var selectedValue = selectBox.value;

    if (selectedValue !== "0") {
        var rutaArchivo;
        switch (selectedValue) {
            case "1":
                rutaArchivo = "files/partida1.txt";
                break;
            case "2":
                rutaArchivo = "files/partida2.txt";
                break;
            case "3":
                rutaArchivo = "files/partida3.txt";
                break;
            default:
                console.error("Opción no válida seleccionada.");
                return;
        }
        fetch('./' + rutaArchivo)
            .then(response => response.text())
            .then(data => {
                var textarea = document.getElementById("texto");
                textarea.value = data;
            })
            .catch(error => console.error('Error al cargar la partida:', error));
    }
}

function tieneMayusculas(cadena) {
    return /[A-Z]/.test(cadena);
  }
  function convertirLetraNumero(letra) {
    switch (letra) {
      case "a":
        return 0;
        break;
  
      case "b":
        return 1;
        break;
  
      case "c":
        return 2;
        break;
  
      case "d":
        return 3;
        break;
  
      case "e":
        return 4;
        break;
  
      case "f":
        return 5;
        break;
  
      case "g":
        return 6;
        break;
  
      case "h":
        return 7;
        break;
    }
  }
  async function test() {
    var salida = "";
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      salida += i + "<br>";
      document.getElementById("out").innerHTML = salida;
    }
  }
  function analizarMovimiento(movimiento) {
    // Objeto para almacenar la información del movimiento
    var infoMovimiento = {
        pieza: '',
        origen: '',
        destino: ''
    };

    // Analizar el tipo de pieza
    if (movimiento[0] === 'N') {
        infoMovimiento.pieza = 'Caballo';
    } else if (movimiento[0] === 'B') {
        infoMovimiento.pieza = 'Alfil';
    } else if (movimiento[0] === 'R') {
        infoMovimiento.pieza = 'Torre';
    } else if (movimiento[0] === 'Q') {
        infoMovimiento.pieza = 'Reina';
    } else if (movimiento[0] === 'K') {
        infoMovimiento.pieza = 'Rey';
    } else {
        infoMovimiento.pieza = 'Peón';
    }

    // Analizar el destino del movimiento
    if (movimiento === 'O-O#' || movimiento === 'O-O-O#') {
        infoMovimiento.destino = 'jaque mate';
        return infoMovimiento;
    } else {
        infoMovimiento.destino = movimiento.slice(-2);
    }

    // Si el movimiento es un enroque, retornar directamente la información
    if (movimiento === 'O-O' || movimiento === 'O-O-O') {
        return infoMovimiento;
    }

    // Eliminar el tipo de pieza del movimiento para facilitar el análisis
    var movSinPieza = movimiento.slice(1);

    // Analizar el origen del movimiento
    if (movSinPieza.includes('x')) {
        // Movimiento con captura
        var indexX = movSinPieza.indexOf('x');
        infoMovimiento.origen = movSinPieza.slice(indexX - 2, indexX);
    } else {
        // Movimiento sin captura
        if (movSinPieza.length === 3) {
            // Movimiento con especificación de columna
            infoMovimiento.origen = movSinPieza[0];
        } else {
            // Movimiento sin especificación de columna (ambiguo)
            infoMovimiento.origen = ' ';
        }
    }

    return infoMovimiento;
}

  