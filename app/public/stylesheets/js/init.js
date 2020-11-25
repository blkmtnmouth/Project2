let myChart;
let type = "bar"; // default type
let chartData;

// determines chart type
$(".chartBtn").on("click", function (event) {
  type = event.currentTarget.id;
  setType(type); 
});

// changes color of 'type' button when clicked
function setType(type) {

  $(".chartBtn").each(function () {
    const _type = this.id; 
    if (_type === type) {
      $(this).addClass('blue'); 
    } else {
      $(this).removeClass('blue'); 
    }
  }); 
};

// search button
$('#searchBtn').on('click', function(event) {
  event.preventDefault();
  let value = $('#search-input')[0].value
  console.log(value);
  window.location.href = '/api/graph/' + value;
});

// generate chart button
$("#generateBtn").on("click", async function (event) {
  event.preventDefault();
  getChartData();
  getGraph();
});

// reset chart button
$("#resetBtn").on("click", async function (event) {
  event.preventDefault();
  resetChart(); 
});

function resetChart(){

    if (myChart) {
      myChart.destroy();
    }
  
    const ctx = document.getElementById("my-chart").getContext("2d");
  
    myChart = new Chart(ctx, {
      type: type,
      data: {}
    });

  // sets values from input area to blank
  $("#xAxis")[0].value = null;
  $("#yAxis")[0].value = null;
  $("#tableName")[0].value = null;

};

async function getChartData() {
  // gets current values from input area
  xAxisVal = $("#xAxis")[0].value;
  yAxisVal = $("#yAxis")[0].value;
  tableName = $("#tableName").val();

  // creates an array of those values without spaces or commas
  xAxis = xAxisVal.split(", ");
  yAxis = yAxisVal.split(", ");

  chartData = {
    name: tableName,
    xVal: xAxis,
    yVal: yAxis
  };
  console.log(chartData);

  let data = await fetch("/api/graph/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chartData)
  });

  const json = await data.json();
  console.log(json);
};

// creates graph visual
async function getGraph() {
  const ctx = document.getElementById("my-chart").getContext("2d");
  let name = await chartData.name;
  let xAxis = await chartData.xVal;
  let yAxis = await chartData.yVal;

  if (myChart) {
    myChart.destroy();
  };

  if (type === 'bar') {
    myChart = new Chart(ctx, {
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
  }
  else if (type === 'line') {
    myChart = new Chart(ctx, {
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
  }
  else {
    myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: xAxis,
        datasets: [
          {
            label: name,
            backgroundColor: [
              "#a05195",
              "#d45087",
              "#f95d6a",
              "#ff7c43",
              "ffa600",
              "#003f5c",
              "#2f4b7c",
              "#665191"
            ],
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
  }
};