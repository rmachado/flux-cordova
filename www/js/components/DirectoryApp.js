var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var DirectoryApp = React.createClass({
    /*componentDidMount: function() {
        router.addRoute('', function() {
            this.setState({page: <HomePage searchKey={this.state.searchKey} searchHandler={this.searchHandler} employees={this.state.employees}/>});
        }.bind(this));
        router.addRoute('employees/:id', function(id) {
            this.setState({page: <EmployeePage employeeId={id} service={employeeService}/>});
        }.bind(this));
        router.start();
    },*/
    render: function() {
      return (
        <RouteHandler/>
      );
    }
});

module.exports = DirectoryApp;
