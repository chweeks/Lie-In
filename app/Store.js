var flux = require('flux-react');
var actions = require('./actions.js');


module.exports = flux.createStore({
  times: [],
  actions: [
    actions.calculatTime;
  ],

  exports: {
    calculateTime: function (address) {

    },

    getTimes: function () {
      return this.times;
    },
    citymapperRequest: function (address) {

    },
    currentLocation: function () {

    }
  }
});
