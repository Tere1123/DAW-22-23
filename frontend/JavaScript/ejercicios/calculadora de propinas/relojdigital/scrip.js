// Queremos tomar la hora actual y para ello nos vamos
//  a servir del opjeto fecha(date)
// date es un objeto presdefinido en JS y que contine todos 
// los datos de fecha y hora actualizados, de este objeto podemos
//  obtener la hora actual y dia de cualquier zona horaria

// creamos una copia del objeto Date 

// obtenemos la hora actual

function clock() {
    
let fecha = new Date();

let hora = fecha.getHours(); // esto nos dara un resultado de 0 a 23
let minutos = fecha.getMinutes(); // 0-59
let segundos = fecha.getSeconds();
let contexto = "AM";

let reloj = document.getElementById('pantallaReloj');

// damos formayo a los numeros
if (hora > 12) {
    hora = hora - 12; //si la hora es 13 cambiara a 1
    contexto = "PM";
}

if (hora < 10) {
    hora = "0" + hora;  
}
if (minutos < 10) {
    minutos = "0" + minutos;  
}
if (segundos < 10) {
    segundos = "0" + segundos;  
}

let texto = hora + ":"+ minutos +":" + segundos + " " + contexto;

reloj.innerHTML = texto;

// se reinicia la funcion y le damos la posibilidad de que se reinicie en bucle

setTimeout(clock,1000)
// el setTimeout ejecuta la funcion indicada ,despues de una pausa de los 
// milisegundos, creando un bucle. 

}

clock();

function getfecha() {
    let fecha = new Date();
    let diaSemana = fecha.getDay();
    let diaMes = fecha.getDate();
    let mes = fecha.getMonth();
    let year = fecha.getFullYear();
    let fecha1 = document.getElementById('fechaGet');

    let texto = dias[diaSemana]  +" , "+ diaMes + " " + meses[mes] + ' ' + year;
    fecha1.innerHTML = texto;
    
    const dias = [
        'domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'
    ]
    const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ]


   
}

getFecha();
