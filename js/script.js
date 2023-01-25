const color = "#FFFFFF";
let dataSetpoint = [15, 15, 15, 15, 15, 10, 10, 10, 10, 10];
let dataTanque1 = [0, 5, 5, 5, 5, 10, 10, 14, 15, 15];
let dataTanque2 = [0, 0, 0, 5, 20, 20, 20, 15, 15, 14];
let labelsX = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9];
let SinalControle = [-1, -1, 0, 0, 1, 1, 2, 2, 3, 3];
let fonte = 'Montserrat, sans-serif';
const chart = new Chart(document.getElementById("myChart"), {
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
let tempo = 1;
function addData() {
  var x = [
    Math.floor(Math.random() * 30),
    Math.floor(Math.random() * 30),
    Math.floor(Math.random() * 30),
  ];
  var i = 0;

  chart.data.labels.push(tempo);

  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(x[i]);
    i++;
  });
  /*  chart_Controle.data.labels.push(tempo);*/
  chart_Controle.data.datasets.forEach((dataset) => {
    dataset.data.push(Math.floor(Math.random() * 6 - 3));
    i++;
  });

  chart.update();
  chart_Controle.update();
  tempo = Number((tempo + 0.1).toFixed(1));
}
const chart_Controle = new Chart(document.getElementById("SinalDeControle"), {
  type: "line",
  data: {
    labels: labelsX,
    datasets: [
      {
        data: SinalControle,
        label: "Sinal de Controle",
        borderColor: "#880000",
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
            family:fonte,
          },
        },
      },
      title: {
        display: true,
        text: "Sinal de Controle",
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
        Max: 10,

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
          text: "Tensão (V)",
          color: color,
        },
        suggestedMax: 3,
        suggestedMin: -3,
        // <-- axis is not array anymore, unlike before in v2.x: '[{'
        grid: {
          color: color,
          lineWidth: 0.2,
       
        },
        ticks: {
          stepSize: 1,
          color: "#ABABAB",
        },
      },
    },
  },
});
const body = document.querySelector('.dashboard');
const menu=document.getElementById('menu--sanduba');
const menuItens=document.querySelector('.menu-Sand');
menu.addEventListener('click',()=>{
  menuItens.classList.toggle('hidden');

});

body.addEventListener('click',()=>{
  menuItens.classList.toggle('hidden');
});
