Polymer({
  ready: function () {
    var items = JSON.parse(this.items);
    var shown = this.limit ? this.limit : items.length;
    this.shownItems =  items.slice(0, shown);

    if (this.limit && (items.length - this.limit) > 0) {
      this.counter = items.length - this.limit;
      this.showMore = true;
    }
  }
});
