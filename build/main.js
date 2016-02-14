(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/chweeks/Desktop/projects/lie-in/app/App.js":[function(require,module,exports){
'use strict';

var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      times: Store.getTimes(),
      newAddress: ''
    };
  },
  componentWillMount: function componentWillMount() {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function componentWillUnmount() {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function changeState() {
    this.setState({
      times: Store.getTimes()
    });
  },
  calculateTime: function calculateTime(event) {
    event.preventDefault();
    var input = this.refs.newAddress;
    actions.calculateTime(input.value);
    this.setState({
      newAddress: ''
    });
  },
  updateNewAddress: function updateNewAddress(event) {
    this.setState({
      newAddress: event.target.value
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { onSubmit: this.calculateTime },
        React.createElement('input', { ref: 'newAddress', type: 'text', value: this.state.newAddress, onChange: this.updateNewAddress })
      )
    );
  }

});

module.exports = App;

},{"./Store.js":"/home/chweeks/Desktop/projects/lie-in/app/Store.js","./actions.js":"/home/chweeks/Desktop/projects/lie-in/app/actions.js","react":"react"}],"/home/chweeks/Desktop/projects/lie-in/app/Store.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');
var actions = require('./actions.js');
var $ = require('jquery');
var apiUrl = 'https://developer.citymapper.com/api/1/traveltime/?startcoord=';
var apiKey = 'd3e73c4d4a983473aec29735665da4ee';

module.exports = flux.createStore({
  times: [],
  actions: [actions.calculateTime],

  calculateTime: function calculateTime(address) {},

  citymapperRequest: function citymapperRequest(startCoord, endCoord, time) {
    return $.getJSON(apiUrl + startCoord + '&endCoord=' + endcoord + 'time=' + time + 'time_type=arrival&key=' + apiKey).then(function (data) {
      return data;
    });
  },

  currentLocation: function currentLocation() {
    self = this;
    navigator.geolocation.getCurrentPosition(GetLocation);
    function GetLocation(location) {
      self.position = location.coords.latitude.toString() + '&2C' + location.coords.longitude.toString();
    }
    return self.position;
  },

  exports: {
    getTimes: function getTimes() {
      return this.times;
    }
  }
});

},{"./actions.js":"/home/chweeks/Desktop/projects/lie-in/app/actions.js","flux-react":"flux-react","jquery":"jquery"}],"/home/chweeks/Desktop/projects/lie-in/app/actions.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');

module.exports = flux.createActions(['calculateTime']);

},{"flux-react":"flux-react"}],"/home/chweeks/Desktop/projects/lie-in/app/main.js":[function(require,module,exports){
'use strict';

var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.getElementById("content"));

},{"./App.js":"/home/chweeks/Desktop/projects/lie-in/app/App.js","react":"react"}]},{},["/home/chweeks/Desktop/projects/lie-in/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9BcHAuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9TdG9yZS5qcyIsIi9ob21lL2Nod2Vla3MvRGVza3RvcC9wcm9qZWN0cy9saWUtaW4vYXBwL2FjdGlvbnMuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzFCLGlCQUFlLEVBQUUsMkJBQVk7QUFDM0IsV0FBTztBQUNMLFdBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7R0FDSDtBQUNELG9CQUFrQixFQUFFLDhCQUFZO0FBQzlCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDM0M7QUFDRCxzQkFBb0IsRUFBRSxnQ0FBWTtBQUNoQyxTQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzlDO0FBQ0QsYUFBVyxFQUFFLHVCQUFZO0FBQ3ZCLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixXQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtLQUN4QixDQUFDLENBQUM7R0FDSjtBQUNELGVBQWEsRUFBRSx1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LEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUuanMnKTtcbnZhciBhY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zLmpzJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lczogU3RvcmUuZ2V0VGltZXMoKSxcbiAgICAgIG5ld0FkZHJlc3M6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgU3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jaGFuZ2VTdGF0ZSk7XG4gIH0sXG4gIGNoYW5nZVN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lczogU3RvcmUuZ2V0VGltZXMoKVxuICAgIH0pO1xuICB9LFxuICBjYWxjdWxhdGVUaW1lOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5uZXdBZGRyZXNzO1xuICAgIGFjdGlvbnMuY2FsY3VsYXRlVGltZShpbnB1dC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdBZGRyZXNzOiAnJ1xuICAgIH0pO1xuICB9LFxuICB1cGRhdGVOZXdBZGRyZXNzOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0FkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5jYWxjdWxhdGVUaW1lfT5cbiAgICAgICAgICA8aW5wdXQgcmVmPVwibmV3QWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmV3QWRkcmVzc30gb25DaGFuZ2U9e3RoaXMudXBkYXRlTmV3QWRkcmVzc30vPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgYXBpVXJsID0gJ2h0dHBzOi8vZGV2ZWxvcGVyLmNpdHltYXBwZXIuY29tL2FwaS8xL3RyYXZlbHRpbWUvP3N0YXJ0Y29vcmQ9JztcbnZhciBhcGlLZXkgPSAnZDNlNzNjNGQ0YTk4MzQ3M2FlYzI5NzM1NjY1ZGE0ZWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlU3RvcmUoe1xuICB0aW1lczogW10sXG4gIGFjdGlvbnM6IFtcbiAgICBhY3Rpb25zLmNhbGN1bGF0ZVRpbWVcbiAgXSxcblxuICBjYWxjdWxhdGVUaW1lOiBmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgIFxuICB9LFxuXG4gIGNpdHltYXBwZXJSZXF1ZXN0OiBmdW5jdGlvbiAoc3RhcnRDb29yZCwgZW5kQ29vcmQsIHRpbWUpIHtcbiAgICByZXR1cm4gJC5nZXRKU09OKGFwaVVybCtzdGFydENvb3JkKycmZW5kQ29vcmQ9JytlbmRjb29yZCsndGltZT0nK3RpbWUrJ3RpbWVfdHlwZT1hcnJpdmFsJmtleT0nK2FwaUtleSlcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfSxcblxuICBjdXJyZW50TG9jYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmID0gdGhpcztcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKEdldExvY2F0aW9uKTtcbiAgICBmdW5jdGlvbiBHZXRMb2NhdGlvbihsb2NhdGlvbikge1xuICAgICAgc2VsZi5wb3NpdGlvbiA9IChsb2NhdGlvbi5jb29yZHMubGF0aXR1ZGUpLnRvU3RyaW5nKCkrJyYyQycrKGxvY2F0aW9uLmNvb3Jkcy5sb25naXR1ZGUpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBzZWxmLnBvc2l0aW9uO1xuICB9LFxuXG4gIGV4cG9ydHM6IHtcbiAgICBnZXRUaW1lczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGltZXM7XG4gICAgfVxuICB9XG59KTtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdjYWxjdWxhdGVUaW1lJ1xuXSk7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyk7XG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikpO1xuIl19
