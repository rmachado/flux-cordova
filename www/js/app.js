var React = require('react');
var Router = require('react-router');
var DirectoryApp = require('./components/DirectoryApp');
var HomePage = require('./components/HomePage');
var EmployeePage = require('./components/EmployeePage');

var Route = Router.Route;

var routes = (
  <Route handler={DirectoryApp}>
    <Route path="" handler={HomePage} />
    <Route path="employees/:id" handler={EmployeePage} />
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

//React.render(<DirectoryApp/>, document.body);
