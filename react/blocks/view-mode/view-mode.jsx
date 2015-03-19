var React = require('react');

var ViewMode = React.createClass({
  render: function() {
    return (
      <div className="view-mode">
        {this.props.children}
      </div>
    );
  }
});

ViewMode.Item = React.createClass({
  linkElement: function () {
    if (this.props.current) {
      return <span className="view-mode__link is-current">{this.props.text}</span>;
    }
    else {
      return <a href={this.props.href} className="view-mode__link">{this.props.text}</a>;
    }
  },
  render: function() {
    return (
      <div className="view-mode__item">
        {this.linkElement()}
      </div>
    );
  }
});

module.exports = ViewMode;
