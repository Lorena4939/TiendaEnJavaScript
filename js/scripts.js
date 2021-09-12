(function() {
    var actualizarHora = function() {
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        //-------Agregando vaiables, para acceder a los elementos en html, para guardar su valor en una variable
        var parrafoHoras = document.getElementById('horas'),
            parrafoAMPM = document.getElementById('ampm'),
            parrafoMinutos = document.getElementById('minutos'),
            parrafoSegundos = document.getElementById('segundos'),
            parrafoDiaSemana = document.getElementById('diaSemana'),
            parrafoDia = document.getElementById('dia'),
            parrafoMes = document.getElementById('mes'),
            parrafoYear = document.getElementById('year');

        //-------Mostrando información en pantalla de la FECHA-------------------------
        /*Dia de la semana*/
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        parrafoDiaSemana.textContent = semana[diaSemana];

        /*Dia del mes*/
        parrafoDia.textContent = dia;

        /*Mes*/
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        parrafoMes.textContent = meses[mes];

        /*Año*/
        parrafoYear.textContent = year;

        //-------CONDICIONAL DE LA HORA, PARA POSTERIORMENTE VISUALIZAR-------------------------

        /*Realizando condicional, para cambiar la hora de 24 hrs. a 12 hrs. */
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (horas == 0) {
            horas = 12;
        };

        //-------VISUALIZANDO HORA EN PANTALLA-------------------------

        /*Hora*/
        parrafoHoras.textContent = horas;

        /*AMPM*/
        parrafoAMPM.textContent = ampm;

        /*Minutos*/ //Condicional para que muestre ambos valores en los minutos p.e= 01
        if (minutos < 10) { minutos = "0" + minutos };
        parrafoMinutos.textContent = minutos;

        /*Segundos*/ //Condicional para que muestre ambos valores en los segundos p.e= 01
        if (segundos < 10) { segundos = "0" + segundos };
        parrafoSegundos.textContent = segundos;
    };
    actualizarHora(); //Llamando funcion actualizarHora

    /*EJECUTANDO FUNCION CADA SEGUNDO*/
    var intervalo = setInterval(actualizarHora, 1000)
}());