let myChart;
let type = "bar";
let graphData;

// determines chart type
$(".chartBtn").on("click", function (event) {
  type = event.currentTarget.id;
  setType(type); 
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

  const bodyData = {
    name: tableName,
    xVal: xAxis,
    yVal: yAxis
  };
  console.log(bodyData);

  let data = await fetch("/api/graph/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData)
  });

  const json = await data.json();
  console.log(json);
};

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

function setType(type) {

  $(".chartBtn").each(function () {
    const _type = this.id; 
    if (_type === type) {
      $(this).addClass('blue'); 
    } else {
      $(this).removeClass('blue'); 
    }
  }); 
}