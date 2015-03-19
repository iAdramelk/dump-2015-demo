var React = require('react');

var Search = React.createClass({
  render: function() {
    return (
      <form action={this.props.action} className="search">
        <input type="search" placeholder="платье бальное" className="search__query" defaultValue={this.props.query} />
        <input type="submit" value="Найти" className="search__submit" />
      </form>
    );
  }
});

module.exports = Search;
