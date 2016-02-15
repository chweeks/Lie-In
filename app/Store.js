var flux = require('flux-react');
var actions = require('./actions.js');
var $ = require('jquery');
var apiUrl = 'https://developer.citymapper.com/api/1/traveltime/?startcoord=';
var apiKey = 'd3e73c4d4a983473aec29735665da4ee';
var userPosition = require('./geoLocation');

module.exports = flux.createStore({
  times: [],
  actions: [
    actions.calculateTime
  ],

  calculateTime: function (address) {
    console.log(userPosition);
  },

  citymapperRequest: function (startCoord, endCoord, time) {
    return $.getJSON(apiUrl+startCoord+'&endCoord='+endcoord+'time='+time+'time_type=arrival&key='+apiKey)
    .then(function(data) {
      return data;
    });
  },

  exports: {
    getTimes: function () {
      return this.times;
    }
  }
});
