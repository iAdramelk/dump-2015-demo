var React = require("react");

var ListItem = React.createClass({
  formattedPrice: function() {
    return this.props.price.toLocaleString("ru-RU", {style: "currency", currency: "RUR", minimumFractionDigits: 0});
  },

  render: function() {
    return (
      <div className="list-item">
        <a href={this.props.href}><img src={this.props.image} className="list-item__image" /></a>
        <div className="list-item__meta">
          <div className="list-item__price">{this.formattedPrice()}</div>
          <div className="list-item__title"><a href={this.props.href}>{this.props.title}</a></div>
          <div className="list-item__description">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
