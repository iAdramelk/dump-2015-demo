var React = require('react');

var CheckboxList = React.createClass({

  mod: function () {
    return "checkbox-list" + (this.props.compact ? ' is-compact' : '');
  },

  render: function() {

    var shown = this.props.limit ? this.props.limit : this.props.items.length;

    var items = this.props.items.slice(0, shown).map(function (item) {
      return (
        <CheckboxList.Item href={item.href} text={item.text} selected={item.selected} key={item.text} />
      );
    });

    return (
      <div className={this.mod()}>
        <div className="checkbox-list__list">
          {items}
        </div>
        {this.props.limit < this.props.items.length ? <CheckboxList.More counter={this.props.items.length - this.props.limit} /> : ''}
      </div>
    );
  }
});

CheckboxList.Item = React.createClass({
  mod: function () {
    return "checkbox-list__link" + (this.props.selected ? ' is-selected' : '');
  },

  render: function() {
    return (
      <div className="checkbox-list__item">
        <a href={this.props.href} className={this.mod()}>{this.props.text}</a>
      </div>
    );
  }
});

CheckboxList.More = React.createClass({
  render: function() {
    return (
      <div className="checkbox-list__more">{"Еще " + this.props.counter + "…"}</div>
    );
  }
});

module.exports = CheckboxList;
