import * as d3 from 'd3';
import _ from 'lodash';

import './style/style.less';

var log = (x) => {
  console.log(x);
};

var w = 800;
var h = 450;
var data = [132,71,337,93,78,43,20,16,30,8,17,21];

// scaling function so data takes up entire screen
  // scale width -> input domain range from 0 to highest data point, output range is from 0 to width of display
console.log('d3 - ', d3);
var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, w]);

var y = d3.scaleLinear()
        .domain([0, data.length])
        .range([0,h]);

var svg = d3.select("body").append("svg")
  .attr("id", "chart")
  .attr("width", w)
  .attr("height", h);

// preparing d3 to bind data to elements classed as "bar"
  // appending a rect element for each piece of data
  // enter phase -> bind data to everything that follows
svg.selectAll(".bar")
  .data(data)
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
      return x(d);
    })
    .attr("height", (d, i) => {
      return y(1) - 1;
    })
