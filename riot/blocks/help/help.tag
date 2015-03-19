<x-help>
  <div class="help">
    <div class="help__title">{opts.title}</div>
    <div each="{opts.items}" class="help__item">
      <a href="{href}" class="help__link">{text}</a>
    </div>
  </div>
</x-help>
