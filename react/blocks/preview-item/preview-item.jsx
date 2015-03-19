var React = require("react");

var PreviewItem = React.createClass({
  formattedPrice: function() {
    return this.props.price.toLocaleString("ru-RU", {style: "currency", currency: "RUR", minimumFractionDigits: 0});
  },

  render: function() {
    return (
      <div className="preview-item">
        <a href={this.props.href} className="preview-item__link">
          <img src={this.props.image} className="preview-item__image" />
          <div className="preview-item__meta">
            <div className="preview-item__title">{this.props.title}</div>
            <div className="preview-item__price">{this.formattedPrice()}</div>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = PreviewItem;
