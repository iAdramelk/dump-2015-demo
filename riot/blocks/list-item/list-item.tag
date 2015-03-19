<x-list-item>
  <div class="list-item">
    <a href={opts.href}><img src={opts.image} class="list-item__image" /></a>
    <div class="list-item__meta">
      <div class="list-item__price">{formattedPrice}</div>
      <div class="list-item__title"><a href={opts.href}>{opts.title}</a></div>
      <div class="list-item__description">
        {opts.description}
      </div>
    </div>
  </div>

  this.formattedPrice = this.opts.price.toLocaleString("ru-RU", {style: "currency", currency: "RUB", minimumFractionDigits: 0});
</x-list-item>
