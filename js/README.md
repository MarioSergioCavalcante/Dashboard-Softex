# Código em JavaScript
O código desenvolvido em Javascript é basicamente separado em 2 partes: A primeira parte é responsável por criar as variáveis que serão utilizadas para criar e manipular os gráficos. A segunda parte é responsável por modificar os valores dos gráficos e criar os <i> event listeners</i> que serão responsáveis por modificar alguns elementos visuais da página.

## Código de criação dos gráficos: 
- Esse código cria dois objetos charts usando a biblioteca Chart.js. O primeiro objeto é responsável por criar o gráfico de resposta do sistema. O segundo objeto é responsável por criar o gráfico de controle do sistema. 

- O primeiro argumento de cada objeto é o elemento HTML onde o gráfico será renderizado. O segundo argumento é o objeto de configuração. Esse objeto de configuração contém informações sobre o tipo de gráfico que será renderizado (linha), as labels para os eixos X e Y, a cor de cada linha, e também o estilo do gráfico. Isso inclui informações sobre o título, a legenda e a grade a ser exibida. Finalmente, ele também inclui o tamanho do passo para os eixos X,Y e o valor máximo sugerido para o eixo X,Y.

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

## Código de manipulação dos gráficos:
- O código cria uma função chamada "addData" que inclui um <i> loop </i> para gerar um novo valor para cada gráfico. O valor gerado é adicionado ao gráfico usando o método "addData" do objeto chart. Finalmente, o código adiciona 0,1 ao valor da variável "tempo" e define a precisão para 1 casa decimal.

```javascript
// Função para adicionar dados ao gráfico
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
```



### A ser retirado e modificado
- A função "addData" é chamada a cada 1 segundo usando o método "setInterval". Esse método deve ser alterado para 100ms para que o gráfico seja atualizado conforme o tempo de resposta do sistema.

- A função "addData" deve ser alterada para receber dois parâmetros o primeiro deve ser os valores do sensor e o segundo deve ser o valor do sinal de controle gerado pelo controlador PID.
