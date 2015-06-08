var React = require('react');
var Header = require('./Header');
var SearchBar = require('./SearchBar');
var EmployeeList = require('./EmployeeList');

var Store = require('../stores/HomeStore');

var HomePage = React.createClass({

    getInitialState: function() {
        return Store.getState();
    },

    componentDidMount: function() {
      Store.addSearchListener(this._onChange);
    },

    componentWillUnmount: function() {
      Store.removeSearchListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <Header text="Employee Directory" back="false"/>
                <SearchBar searchKey={this.state.searchKey} />
                <div className="content">
                    <EmployeeList employees={this.state.employees}/>
                </div>
            </div>
        );
    },

    _onChange: function() {
      this.setState(Store.getState());
    }
});

module.exports = HomePage;
