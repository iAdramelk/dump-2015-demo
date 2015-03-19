var React = require('react');

var Price = React.createClass({

  render: function() {
    return (
      <div className="price">
        <div className="price__range">
          <div className="price__group price__group_from">
            <label className="price__title">От:</label>
            <input type="text" className="price__field" placeholder={this.props.min} value={this.props.from} />
          </div>
          <div className="price__group price__group_to">
            <label className="price__title">До:</label>
            <input type="text" className="price__field" placeholder={this.props.max} value={this.props.to} />
          </div>
        </div>
        <div className="price__show">Показать</div>
      </div>
    );
  }
});

module.exports = Price;
