var React = require('react');

var Sorting = React.createClass({
  render: function() {
    return (
      <div className="sorting">
        <div className="sorting__title">Сортировать:</div>
        {this.props.children}
      </div>
    );
  }
});

Sorting.Item = React.createClass({
  linkElement: function () {
    if (this.props.current) {
      return <span className="sorting__link is-current">{this.props.text}</span>;
    }
    else {
      return <a href={this.props.href} className="sorting__link">{this.props.text}</a>;
    }
  },
  render: function() {
    return (
      <div className="sorting__item">
        {this.linkElement()}
      </div>
    );
  }
});

module.exports = Sorting;
