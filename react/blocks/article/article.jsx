var React = require('react');

var Article = React.createClass({
  render: function() {
    return (
      <div className="article" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
    );
  }
});

module.exports = Article;
