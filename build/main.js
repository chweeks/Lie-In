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

  calculateTime: function calculateTime(address) {
    console.log(this.currentPosition());
  },

  currentPosition: function currentPosition() {
    var self = this;
    navigator.geolocation.getCurrentPosition(GetLocation);
    function GetLocation(location) {
      self.position = location.coords.latitude.toString() + '&2C' + location.coords.longitude.toString();
    }
    return self.position;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9BcHAuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9TdG9yZS5qcyIsIi9ob21lL2Nod2Vla3MvRGVza3RvcC9wcm9qZWN0cy9saWUtaW4vYXBwL2FjdGlvbnMuanMiLCIvaG9tZS9jaHdlZWtzL0Rlc2t0b3AvcHJvamVjdHMvbGllLWluL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzFCLGlCQUFlLEVBQUUsMkJBQVk7QUFDM0IsV0FBTztBQUNMLFdBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUM7R0FDSDtBQUNELG9CQUFrQixFQUFFLDhCQUFZO0FBQzlCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDM0M7QUFDRCxzQkFBb0IsRUFBRSxnQ0FBWTtBQUNoQyxTQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzlDO0FBQ0QsYUFBVyxFQUFFLHVCQUFZO0FBQ3ZCLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixXQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtLQUN4QixDQUFDLENBQUM7R0FDSjtBQUNELGVBQWEsRUFBRSx1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QUM7Ozs7O0FDSkgsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN0b3JlID0gcmVxdWlyZSgnLi9TdG9yZS5qcycpO1xudmFyIGFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMuanMnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVzOiBTdG9yZS5nZXRUaW1lcygpLFxuICAgICAgbmV3QWRkcmVzczogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpbWVzOiBTdG9yZS5nZXRUaW1lcygpXG4gICAgfSk7XG4gIH0sXG4gIGNhbGN1bGF0ZVRpbWU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLm5ld0FkZHJlc3M7XG4gICAgYWN0aW9ucy5jYWxjdWxhdGVUaW1lKGlucHV0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld0FkZHJlc3M6ICcnXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZU5ld0FkZHJlc3M6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3QWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmNhbGN1bGF0ZVRpbWV9PlxuICAgICAgICAgIDxpbnB1dCByZWY9XCJuZXdBZGRyZXNzXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdBZGRyZXNzfSBvbkNoYW5nZT17dGhpcy51cGRhdGVOZXdBZGRyZXNzfS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qcycpO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBhcGlVcmwgPSAnaHR0cHM6Ly9kZXZlbG9wZXIuY2l0eW1hcHBlci5jb20vYXBpLzEvdHJhdmVsdGltZS8/c3RhcnRjb29yZD0nO1xudmFyIGFwaUtleSA9ICdkM2U3M2M0ZDRhOTgzNDczYWVjMjk3MzU2NjVkYTRlZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZmx1eC5jcmVhdGVTdG9yZSh7XG4gIHRpbWVzOiBbXSxcbiAgYWN0aW9uczogW1xuICAgIGFjdGlvbnMuY2FsY3VsYXRlVGltZVxuICBdLFxuXG4gIGNhbGN1bGF0ZVRpbWU6IGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UG9zaXRpb24oKSk7XG4gIH0sXG5cbiAgY3VycmVudFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oR2V0TG9jYXRpb24pO1xuICAgIGZ1bmN0aW9uIEdldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICBzZWxmLnBvc2l0aW9uID0gKGxvY2F0aW9uLmNvb3Jkcy5sYXRpdHVkZSkudG9TdHJpbmcoKSsnJjJDJysobG9jYXRpb24uY29vcmRzLmxvbmdpdHVkZSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGYucG9zaXRpb247XG4gIH0sXG5cblxuICBjaXR5bWFwcGVyUmVxdWVzdDogZnVuY3Rpb24gKHN0YXJ0Q29vcmQsIGVuZENvb3JkLCB0aW1lKSB7XG4gICAgcmV0dXJuICQuZ2V0SlNPTihhcGlVcmwrc3RhcnRDb29yZCsnJmVuZENvb3JkPScrZW5kY29vcmQrJ3RpbWU9Jyt0aW1lKyd0aW1lX3R5cGU9YXJyaXZhbCZrZXk9JythcGlLZXkpXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH0sXG5cbiAgZXhwb3J0czoge1xuICAgIGdldFRpbWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aW1lcztcbiAgICB9XG4gIH1cbn0pO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ2NhbGN1bGF0ZVRpbWUnXG5dKTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcblJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSk7XG4iXX0=
