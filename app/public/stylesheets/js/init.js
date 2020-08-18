const graphArea = $("#graphArea");
const graphForm = $("#graphForm");
const xAxisLabel = $("#xAxisLabel");
const yAxisLabel = $("#yAxisLabel");

const keys = $("#xAxis")
const values = $("#yAxis")
let type = "bar";

$(document).on("ready", init)

function init() {
  $(".chartBtn").click(setType(), function(event) {
    console.log(event.currentTarget.id);
    type = event.currentTarget.id;
  });
};

graphForm.on("click", function() {
  event.preventDefault();
  console.log(keys[0].value);
});

function getGraph(e) {
  if (e) {
    e.preventDefault()
  }

  var labels = []
  console.log(keys);
  keys.each(function () {
    const val = $(this).val()
    labels.push(val)
  })

  var datavals = []
  values.each(function () {
    const val = $(this).val()
    datavals.push(val)
  })

  const baseQuery = "https://quickchart.io/chart?c="
  const data = {
    type,                                // Show a bar chart
    data: {
      labels,   // Set X-axis labels
      datasets: [{
        label: 'Users',                         // Create the 'Users' dataset
        data: datavals         // Add data to the chart
      }]
    },
    options: {
      scales: {
        xAxis: [{
          scaleLabel: {
            display: true,
            labelString: xAxisLabel.val()
          }
        }],
        yAxis: [{
          scaleLabel: {
            display: true,
            labelString: yAxisLabel.val()
          }
        }]
      }
    }
  }
  const chartString = JSON.stringify(data)

  graphArea.attr("src", baseQuery + chartString)
}

function setType() {
  getGraph()

  $(".select-type").each(function () {
    const _type = $(this).data("type")
    if (_type === type) {
      $(this).addClass('blue')
    } else {
      $(this).removeClass('blue')
    }
  })
}