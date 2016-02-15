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
      ),
      React.createElement(
        'p',
        null,
        this.state.position
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
var userPosition = require('./geoLocation');

module.exports = flux.createStore({
  times: [],
  actions: [actions.calculateTime],

  calculateTime: function calculateTime(address) {
    console.log(userPosition);
  },

  citymapperRequest: function citymapperRequest(startCoord, endCoord, time) {
    return $.getJSON(apiUrl + startCoord + '&endCoord=' + endcoord + 'time=' + time + 'time_type=arrival&key=' + apiKey).then(function (data) {
      return data;
    });
  },

  exports: {
    getTimes: function getTimes() {
      return this.times;
    }
  }
});

},{"./actions.js":"/home/chweeks/Desktop/projects/lie-in/app/actions.js","./geoLocation":"/home/chweeks/Desktop/projects/lie-in/app/geoLocation.js","flux-react":"flux-react","jquery":"jquery"}],"/home/chweeks/Desktop/projects/lie-in/app/actions.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');

module.exports = flux.createActions(['calculateTime']);

},{"flux-react":"flux-react"}],"/home/chweeks/Desktop/projects/lie-in/app/geoLocation.js":[function(require,module,exports){
"use strict";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

module.exports = getLocation();

},{}],"/home/chweeks/Desktop/projects/lie-in/app/main.js":[function(require,module,exports){
'use strict';

var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.getElementById("content"));

},{"./App.js":"/home/chweeks/Desktop/projects/lie-in/app/App.js","react":"react"}]},{},["/home/chweeks/Desktop/projects/lie-in/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9BcHAuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9TdG9yZS5qcyIsIi9ob21lL2Nod2Vla3MvRGVza3RvcC9wcm9qZWN0cy9saWUtaW4vYXBwL2FjdGlvbnMuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9nZW9Mb2NhdGlvbi5qcyIsIi9ob21lL2Nod2Vla3MvRGVza3RvcC9wcm9qZWN0cy9saWUtaW4vYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDMUIsaUJBQWUsRUFBRSwyQkFBWTtBQUMzQixXQUFPO0FBQ0wsV0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDdkIsZ0JBQVUsRUFBRSxFQUFFO0tBQ2YsQ0FBQztHQUNIO0FBQ0Qsb0JBQWtCLEVBQUUsOEJBQVk7QUFDOUIsU0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUMzQztBQUNELHNCQUFvQixFQUFFLGdDQUFZO0FBQ2hDLFNBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDOUM7QUFDRCxhQUFXLEVBQUUsdUJBQVk7QUFDdkIsUUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLFdBQUssRUFB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QUMsUUFBUSxFQUFFO0FBQzlCLFNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QyxTQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Q0FDeEM7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUUsQ0FBQzs7Ozs7QUNiL0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN0b3JlID0gcmVxdWlyZSgnLi9TdG9yZS5qcycpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVzOiBTdG9yZS5nZXRUaW1lcygpLFxuICAgICAgbmV3QWRkcmVzczogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWVzOiBTdG9yZS5nZXRUaW1lcygpXG4gICAgfSk7XG4gIH0sXG4gIGNhbGN1bGF0ZVRpbWU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLm5ld0FkZHJlc3M7XG4gICAgYWN0aW9ucy5jYWxjdWxhdGVUaW1lKGlucHV0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0FkZHJlc3M6ICcnXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZU5ld0FkZHJlc3M6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3QWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmNhbGN1bGF0ZVRpbWV9PlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJuZXdBZGRyZXNzXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdBZGRyZXNzfSBvbkNoYW5nZT17dGhpcy51cGRhdGVOZXdBZGRyZXNzfS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHA+e3RoaXMuc3RhdGUucG9zaXRpb259PC9wPlxuICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCJ2YXIgZmx1eCA9IHJlcXVpcmUoJ2ZsdXgtcmVhY3QnKTtcbnZhciBhY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zLmpzJyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGFwaVVybCA9ICdodHRwczovL2RldmVsb3Blci5jaXR5bWFwcGVyLmNvbS9hcGkvMS90cmF2ZWx0aW1lLz9zdGFydGNvb3JkPSc7XG52YXIgYXBpS2V5ID0gJ2QzZTczYzRkNGE5ODM0NzNhZWMyOTczNTY2NWRhNGVlJztcbnZhciB1c2VyUG9zaXRpb24gPSByZXF1aXJlKCcuL2dlb0xvY2F0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmx1eC5jcmVhdGVTdG9yZSh7XG4gIHRpbWVzOiBbXSxcbiAgYWN0aW9uczogW1xuICAgIGFjdGlvbnMuY2FsY3VsYXRlVGltZVxuICBdLFxuXG4gIGNhbGN1bGF0ZVRpbWU6IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgY29uc29sZS5sb2codXNlclBvc2l0aW9uKTtcbiAgfSxcblxuICBjaXR5bWFwcGVyUmVxdWVzdDogZnVuY3Rpb24gKHN0YXJ0Q29vcmQsIGVuZENvb3JkLCB0aW1lKSB7XG4gICAgcmV0dXJuICQuZ2V0SlNPTihhcGlVcmwrc3RhcnRDb29yZCsnJmVuZENvb3JkPScrZW5kY29vcmQrJ3RpbWU9Jyt0aW1lKyd0aW1lX3R5cGU9YXJyaXZhbCZrZXk9JythcGlLZXkpXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH0sXG5cbiAgZXhwb3J0czoge1xuICAgIGdldFRpbWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aW1lcztcbiAgICB9XG4gIH1cbn0pO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ2NhbGN1bGF0ZVRpbWUnXG5dKTtcbiIsImZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93UG9zaXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQb3NpdGlvbihwb3NpdGlvbikge1xuICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpO1xuICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMb2NhdGlvbigpO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpO1xuUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpKTtcbiJdfQ==
