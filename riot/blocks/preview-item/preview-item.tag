<x-preview-item>
  <div class="preview-item">
    <a href={opts.href} class="preview-item__link">
      <img src={opts.image} class="preview-item__image" />
      <div class="preview-item__meta">
        <div class="preview-item__title">{opts.title}</div>
        <div class="preview-item__price">{formattedPrice}</div>
      </div>
    </a>
  </div>

  this.formattedPrice = this.opts.price.toLocaleString("ru-RU", {style: "currency", currency: "RUB", minimumFractionDigits: 0});
</x-preview-item>
