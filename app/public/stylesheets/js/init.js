const graphArea = $("#graphArea");
const graphForm = $("#graphForm");
const xAxisLabel = $("#xAxisLabel");
const yAxisLabel = $("#yAxisLabel");
const chartBtns = $(".chartBtn");


const xvalEl = $("#xvalues")
const addxbtn = $("#addxvalue")

addxbtn.click(addXInputEl)

function addXInputEl() {
  var parent = $("<div>").addClass('xset')
  var key = $("<input>").addClass('xkey')
  var value = $("<input>").addClass('xvalue')
  parent.append(key, value)
  xvalEl.append(parent)
}

const keys = $("#xAxis")
const values = $("#yAxis")
let type = "bar";

$(document).on("ready", init)

function init() {
   getGraph()
};

chartBtns.click(setType)

graphForm.click(getGraph);

function getGraph() {
  var labels = [], data = []

  $(".xset").each(function(){
    var label = $(this).find('.xkey').val()
    var value = $(this).find('.xvalue').val()
    labels.push(label)
    data.push(value)
  })

  const baseQuery = "https://quickchart.io/chart?c="
  const CHART = {
    type,                                // Show a bar chart
    data: {
      labels,   // Set X-axis labels
      //labels: [2012, 2013, 2014, 2015, 2016],   // Set X-axis labels
      datasets: [{
        label: 'Users',                         // Create the 'Users' dataset
        data          // Add data to the chart
        //data: [120, 60, 50, 180, 120]           // Add data to the chart
      }]
    }
  }
  const chartString = JSON.stringify(CHART)

  graphArea.attr("src", baseQuery + chartString)
}

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