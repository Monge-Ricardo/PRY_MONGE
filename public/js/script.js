let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

let aprobados = 0;
let supletorios = 0;
let reprobados = 0;
let suma = 0;

notas.forEach(function(nota){
    suma += nota;

    if (nota >= 7 && nota <= 10) {
        aprobados++;
    } else if (nota >= 5 && nota <= 6) {
        supletorios++;
    } else {
        reprobados++;
    }
});

let promedio = (suma / notas.length);
let estadoCurso = ""

if(promedio >= 7){
    estadoCurso = "APROBADO"
}else{
    estadoCurso = "EN RIESGO";
}

function ocultarSecciones() {
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(event){
        event.classList.add('d-none');
    });
}

var btnAprobados   = document.getElementById('btnAprobados');
var btnSupletorios = document.getElementById('btnSupletorios');
var btnReprobados  = document.getElementById('btnReprobados');
var btnPromedio    = document.getElementById('btnPromedio');
var btnEstado      = document.getElementById('btnEstado');

btnAprobados.addEventListener('click', function(event){
    ocultarSecciones();
    document.getElementById('aprobados').classList.remove('d-none');
    document.getElementById('totalAprobados').textContent = aprobados;
});

btnSupletorios.addEventListener('click', function(event){
    ocultarSecciones();
    document.getElementById('supletorios').classList.remove('d-none');
    document.getElementById('totalSupletorios').textContent = supletorios;
});

btnReprobados.addEventListener('click', function(event){
    ocultarSecciones();
    document.getElementById('reprobados').classList.remove('d-none');
    document.getElementById('totalReprobados').textContent = reprobados;
});

btnPromedio.addEventListener('click', function(event){
    ocultarSecciones();
    document.getElementById('promedio').classList.remove('d-none');
    document.getElementById('promedioCurso').textContent = promedio.toFixed(2);
});

btnEstado.addEventListener('click', function(event){
    ocultarSecciones();
    document.getElementById('estado').classList.remove('d-none');
    document.getElementById('estadoCurso').textContent = estadoCurso;
});
