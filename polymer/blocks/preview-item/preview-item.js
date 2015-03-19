Polymer({
  ready: function() {
    this.formattedPrice = this.formatPrice();
  },
  formatPrice: function() {
    return parseInt(this.price, 10).toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0
    });
  }
});
