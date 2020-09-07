var ctx = document.getElementById('myChart').getContext('2d');
function barChart(name, xAxis, yAxis) {
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xAxis,
        datasets: [{
            label: name,
            data: yAxis,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  return myChart;
}

function lineChart(name, xAxis, yAxis) {
  let lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: xAxis,
      datasets: [
        {
          label: name,
          backgroundColor: "red",
          borderColor: "red",
          data: yAxis,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });
  return lineChart;
}

function pieChart(name, xAxis, yAxis) {
  let pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: xAxis,
      datasets: [
        {
          label: name,
          backgroundColor: colors,
          data: yAxis
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: name
      }
    }
  });
  return pieChart;
}