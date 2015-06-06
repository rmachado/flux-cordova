var React = require('react');
var Header = require('./Header');
var SearchBar = require('./SearchBar');
var EmployeeList = require('./EmployeeList');

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Employee Directory" back="false"/>
                <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
                <div className="content">
                    <EmployeeList employees={this.props.employees}/>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;
