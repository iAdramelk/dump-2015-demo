var React = require('react');

var Categories = React.createClass({
  render: function() {

    var items = this.props.items.map(function (item) {
      return (
        <Categories.Item href={item.href} text={item.text} level={item.level} current={item.current} key={item.text} />
      );
    });

    return (
      <div className="categories">
        <div className="categories__title">Категории</div>
        {items}
      </div>
    );

  }
});

Categories.Item = React.createClass({
  linkElement: function () {
    if (this.props.current) {
      return <span className="categories__link is-current">{this.props.text}</span>;
    }
    else {
      return <a href={this.props.href} className="categories__link">{this.props.text}</a>;
    }
  },
  render: function() {
    return (
      <div className={"categories__item categories__item_level_" + this.props.level}>
        {this.linkElement()}
      </div>
    );
  }
});

module.exports = Categories;
