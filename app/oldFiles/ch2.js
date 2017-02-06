import * as d3 from 'd3';
import _ from 'lodash';

import './style/style.less';

var log = (x) => {
  console.log(x);
};

var data = [132,71,337,93,78,43,20,16,30,8,17,21];

var dataGreaterThan100 = data.filter((entry) => {
  return entry > 100;
});

var minValue = d3.min(data);
// console.log(minValue);
log(minValue);
var maxValue = d3.max(data);
log(maxValue);

var lowHi = d3.extent(data);
log(lowHi);


var donuts = [
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

var donutsGreat = donuts.filter((donut) => {
  return donut.value > 100;
})

var betterDonuts = donuts.map((entry) => {
  return {
    donut: entry.key,
    quantity: entry.value
  }
});

var donutsMinVal = d3.min(donuts, (d) => {
  return d.value;
});

var donutsLowHi = d3.extent(donuts, (item) => {
  return item.value;
});
log(donutsLowHi);

// betterDonuts.forEach(item => console.log(item));

// console.log('# - ', betterDonuts);