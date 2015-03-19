var React = require('react');

var ArticleLead = React.createClass({
  render: function() {
    return (
      <div className="article-lead">
        {this.props.text} <a href={this.props.href} className="article-lead__link">Читать далее →</a>
      </div>
    );
  }
});

module.exports = ArticleLead;
