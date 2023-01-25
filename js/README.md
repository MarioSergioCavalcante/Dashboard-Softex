# Código em JavaScript
O código desenvolvido em Javascript é basicamente separado em 2 partes: A primeira parte é responsável por criar as variáveis que serão utilizadas para criar e manipular os gráficos. A segunda parte é responsável por modificar os valores dos gráficos e criar os <i> event listeners</i> que serão responsáveis por modificar alguns elementos visuais da página.

## Código de criação dos gráficos: 
```javascript
// Criação dos gráficos
const chart_Resposta = new Chart(document.getElementById("myChart"), {
  type: "line",
  data: {
    labels: labelsX,
    datasets: [
      {
        data: dataSetpoint,
        label: "Setpoint",
        borderColor: "#3e95cd",
        fill: false,
      },
      {
        data: dataTanque1,
        label: "Tanque 1",
        borderColor: "#8e5ea2",
        fill: false,
      },
      {
        data: dataTanque2,
        label: "Tanque 2",
        borderColor: "#3cba9f",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          pointStyle: "line",
          usePointStyle: true,
          color: color,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Resposta do Sistema",
        align: "center",
        color: color,
        position: "top",
        font: {
          size: 16,
        },
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Tempo (s)",
          color: color,
        },
        // <-- axis is not array anymore, unlike before in v2.x: '[{'
        grid: {
          color: color,
          lineWidth: 0.2,
        },
        ticks: {
          color: "#ABABAB",
          fontSize: 14,
        },
      },

      y: {
        type: "linear",
        title: {
          display: true,
          text: "Level (cm)",
          color: color,
        },
        suggestedMax: 30,
        // <-- axis is not array anymore, unlike before in v2.x: '[{'
        grid: {
          color: color,
          lineWidth: 0.2,
          tickBorderDash: [10, 20],
        },
        ticks: {
          stepSize: 5,
          color: "#ABABAB",
        },
      },
    },
  },
});
```

