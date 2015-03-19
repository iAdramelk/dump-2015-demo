var React = require('react');

var Help = React.createClass({
  render: function() {

    var items = this.props.items.map(function (item) {
      return (
        <Help.Item href={item.href} text={item.text} key={item.text} />
      );
    });

    return (
      <div className="help">
        <div className="help__title">{this.props.title}</div>
        {items}
      </div>
    );

  }
});

Help.Item = React.createClass({
  render: function() {
    return (
      <div className="help__item">
        <a href={this.props.href} className="help__link">{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Help;
