$(document).ready(function() {
  (function($) {
    $(function() {
      $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        locale: {
          format: 'DD/MM/YYYY',
          applyLabel: "Seleccionar",
          cancelLabel: "Cancelar",
          fromLabel: "Desde",
          toLabel: "Hasta",
          daysOfWeek: [
            "Do",
            "Lu",
            "Ma",
            "Mi",
            "Ju",
            "Vi",
            "Sa"


          ],
          monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
          ],firstDay: 1
        }, "startDate": "09/09/2019",
        "endDate": "15/09/2019"
      });
    });

  }(jQuery));
});
