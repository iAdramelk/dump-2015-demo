var React = require("react");

var Breadcrumbs = React.createClass({
  render: function() {
    return (
      <div className="breadcrumbs">
        {this.props.children}
      </div>
    );
  }
});

Breadcrumbs.Item = React.createClass({
  render: function() {
    return (
      <div className="breadcrumbs__item">
        <a href={this.props.href} className="breadcrumbs__link">{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Breadcrumbs;
