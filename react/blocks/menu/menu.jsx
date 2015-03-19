var React = require('react');

var Menu = React.createClass({
  render: function() {
    var items = this.props.items.map(function (item) {
      return (
        <Menu.Item href={item.href} text={item.text} current={item.current} key={item.text} />
      );
    });

    return (
      <div className="menu">
        <div className="menu__content">
          {items}
        </div>
      </div>
    );
  }
});

Menu.Item = React.createClass({
  mod: function () {
    return "menu__link" + (this.props.current ? ' is-current' : '');
  },

  render: function() {
    return (
      <div className="menu__item">
        <a href={this.props.href} className={this.mod()}>{this.props.text}</a>
      </div>
    );
  }
});

module.exports = Menu;
