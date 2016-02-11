var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var App = React.createClass({
  getInitialState: function () {
    return {
      times: Store.getTimes(),
      newAddress: ''
    };
  },
  componentWillMount: function () {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function () {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function () {
    this.setState({
      times: Store.getTimes()
    });
  },
  calculateTime: function (event) {
    event.preventDefault();
    var input = this.refs.newAddress.getDOMNode();
    actions.calculateTime(input.value);
    this.setState({
      newAddress: ''
    });
  },
  updateNewAddress: function (event) {
    this.setState({
      newAddress: event.target.value
    });
  },
	render: function() {
		return (
			<div>
        <form onSubmit={this.calculateTime}>
          <input ref="newMessage" type="text" value={this.state.newAddress} onChange={this.updateNewAddress}/>
        </form>
      </div>
		);
	}

});

module.exports = App;
