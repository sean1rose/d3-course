import * as d3 from 'd3';
import _ from 'lodash';

import './style/style.less';

var log = (x) => {
  console.log(x);
};

var w = 800;
var h = 450;
var margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;
// var data = [132,71,337,93,78,43,20,16,30,8,17,21];

var data = [
	{key: "Glazed",		value: 132},
	{key: "Jelly",		value: 71},
	{key: "Holes",		value: 337},
	{key: "Sprinkles",	value: 93},
	{key: "Crumb",		value: 78},
	{key: "Chocolate",	value: 43},
	{key: "Coconut", 	value: 20},
	{key: "Cream",		value: 16},
	{key: "Cruller", 	value: 30},
	{key: "Éclair", 	value: 8},
	{key: "Fritter", 	value: 17},
	{key: "Bearclaw", 	value: 21}
];

// scaling function so data takes up entire screen
  // scale width -> input domain range from 0 to highest data point, output range is from 0 to width of display
console.log('d3 - ', d3);
var x = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => {
          return d.value;
        })])
        .range([0, width]);

var y = d3.scaleLinear()
        .domain([0, data.length])
        .range([0,height]);

var svg = d3.select("body").append("svg")
  .attr("id", "chart")
  .attr("width", w)
  .attr("height", h);

var chart = svg.append("g")
            .classed("display", true)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var plot = function(params) {
  // preparing d3 to bind data to elements classed as "bar"
    // appending a rect element for each piece of data
    // enter phase -> bind data to everything that follows
  console.log(this, svg);
  chart.selectAll(".bar")
    .data(params.data)
    .enter()
      .append("rect")
      .classed("bar", true)
      .classed("foo", true)
      .attr("x", 0)
      .attr("y", (d, i) => {
        // return i * 25;
        return y(i);
        // b/w 25 and 19 => staggering bars so there's space b/w them
      })
      .attr("width", (d, i) => {
        // literal width -> whatever the width of the data
        // d == data bound to this element
        // i == index of the data
        return x(d.value);
      })
      .attr("height", (d, i) => {
        return y(1) - 1;
      });

  chart.selectAll(".bar-label")
    .data(params.data)
    .enter()
      .append("text")
      .classed("bar-label", true)
      .attr("x", (d,i) => {
        return x(d.value);
      })
      .attr("dx", -4)
      .attr("y", (d, i) => {
        // return i * 25;
        return y(i);
        // b/w 25 and 19 => staggering bars so there's space b/w them
      })
      .attr("dy", (d,i) => {
        // allows us to nudge the y value
        return y(1)/1.5 + 2;
      })
      .text((d, i) => {
        return d.value;
      });
};

plot({data});

// plot.call(svg, {
//   data,
// })

