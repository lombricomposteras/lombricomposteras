for (i = 0; i < window.cantidad_widgets; i++) {
    if ((window.tipo_widgets[i] == "Grafico_linea") || (window.tipo_widgets[i] == "Registrador")) {
        window.myChart[window.id_widgets[i]] = new Chart(window.ctx[window.id_widgets[i]], window.propiedad_chart[window.id_widgets[i]]);
    }
}