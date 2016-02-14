var flux = require('flux-react');
var actions = require('./actions.js');
var $ = require('jquery');
var apiUrl = 'https://developer.citymapper.com/api/1/traveltime/?startcoord=';
var apiKey = 'd3e73c4d4a983473aec29735665da4ee';

module.exports = flux.createStore({
  times: [],
  actions: [
    actions.calculateTime
  ],

  calculateTime: function (address) {
    
  },

  citymapperRequest: function (startCoord, endCoord, time) {
    return $.getJSON(apiUrl+startCoord+'&endCoord='+endcoord+'time='+time+'time_type=arrival&key='+apiKey)
    .then(function(data) {
      return data;
    });
  },

  currentLocation: function () {
    self = this;
    navigator.geolocation.getCurrentPosition(GetLocation);
    function GetLocation(location) {
      self.position = (location.coords.latitude).toString()+'&2C'+(location.coords.longitude).toString();
    }
    return self.position;
  },

  exports: {
    getTimes: function () {
      return this.times;
    }
  }
});
