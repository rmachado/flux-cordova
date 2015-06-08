var React = require('react');
var Actions = require('../actions/Actions');

var SearchBar = React.createClass({
    _onChange: function() {
      Actions.search(this.refs.searchKey.getDOMNode().value);
    },

    render: function () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" onChange={this._onChange} value={this.props.searchKey}/>
            </div>

        );
    }
});

module.exports = SearchBar;
