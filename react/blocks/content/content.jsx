var React = require('react');

var Content = React.createClass({
  render: function() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Content;
