let xAxisVal;
let yAxisVal;
let xAxis;
let yAxis;
let myChart;
let type = "bar";

// determines chart type
$(".chartBtn").on("click", function(event) {
  type = event.currentTarget.id;
  getChartData();
  getGraph();
});

// generate chart button
$("#generateBtn").on("click", function(event) {
  event.preventDefault();
  getChartData();
  getGraph();
  // send data to database
});

function getChartData() {
  // gets current values from input area
  xAxisVal = $("#xAxis")[0].value;
  yAxisVal = $("#yAxis")[0].value;

  // creates an array of those values without spaces or commas
  xAxis = xAxisVal.split(", ");
  yAxis = yAxisVal.split(", ");
}

// displays graph using x and y values from user input
function getGraph() {
 
  if (myChart) {
    myChart.destroy();
  }

  const ctx = document.getElementById("my-chart").getContext("2d");

  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: xAxis,
      datasets: [
        {
          label: "Total Over Time",
          fill: true,
          backgroundColor: "#6666ff",
          data: yAxis
        }
      ]
    }
  });
};

function setType() {
  type = $(this).data('type')
  getGraph()

  chartBtns.each(function () {
    const _type = $(this).data("type")
    if (_type === type) {
      $(this).addClass('blue')
    } else {
      $(this).removeClass('blue')
    }
  })
}