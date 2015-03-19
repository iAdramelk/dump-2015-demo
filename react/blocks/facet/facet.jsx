var React = require('react');

var Facet = React.createClass({

  mod: function () {
    return "facet" + (this.props.closed ? ' is-closed' : '');
  },


  render: function() {
    return (
      <div className={this.mod()}>
        <div className="facet__title">{this.props.title}</div>
        <div className="facet__content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Facet;
