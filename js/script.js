const color = "#FFFFFF";
let dataSetpoint = [15, 15, 15, 15, 15, 10, 10, 10, 10, 10];
let dataTanque1 = [0, 5, 5, 5, 5, 10, 10, 14, 15, 15];
let dataTanque2 = [0, 0, 0, 5, 20, 20, 20, 15, 15, 14];
let labelsX = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
let SinalControle = [-1, -1, 0, 0, 1, 1, 2, 2, 3, 3];
let fonte = "Montserrat, sans-serif";


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
            family: fonte,
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

// This code is setting up two event listeners which will trigger functions when the conditions are met. The first event listener is listening for a click on the element with the id of "menu--sanduba", and when the click occurs, it will toggle the class "hidden" on the element with the class name "menu-Sand". The second event listener is listening for a click anywhere on the element with the class of "dashboard", and when the click occurs, it will remove the class "hidden" from the element with the class name "menu-Sand". The code then sets up a function called "addData" which includes a for loop to generate and add data to two chart objects. Finally, the function adds 0.1 to the variable "tempo" and sets it to a precision of one decimal place.

const dashboard = document.querySelector(".dashboard");
const menu = document.getElementById("menu--sanduba");
const menuItens = document.querySelector(".menu-Sand");
menu.addEventListener("click", () => {
  menuItens.classList.toggle("hidden");
});

dashboard.addEventListener("click", () => {
  menuItens.classList.remove("hidden");
});

let tempo = 1;
function addData() {
  var x = [
    Math.floor(Math.random() * 30),
    Math.floor(Math.random() * 30),
    Math.floor(Math.random() * 30),
  ];
  var i = 0;

  chart_Resposta.data.labels.push(tempo);

  chart_Resposta.data.datasets.forEach((dataset) => {
    dataset.data.push(x[i]);
    i++;
  });
  /*  chart_Controle.data.labels.push(tempo);*/
  chart_Controle.data.datasets.forEach((dataset) => {
    dataset.data.push(Math.floor(Math.random() * 6 - 3));
    i++;
  });

  chart_Resposta.update();
  chart_Controle.update();
  tempo = Number((tempo + 0.1).toFixed(1));
}
setInterval(addData, 1000);