var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="header__subtitle">интернет-магазин одежды</div>
        <div className="header__actions">
          <div className="header__action header__action_signin">
            <a href="#" className="header__link">Войти</a>
          </div>
          <div className="header__action header__action_signup">
            <a href="#" className="header__link">Зарегистрироваться</a>
          </div>
          <div className="header__action header__action_basket">
            <a href="#" className="header__link">Корзина</a>
          </div>
        </div>
        <div className="header__title">Золушка</div>
        <div className="header__search">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Header;
