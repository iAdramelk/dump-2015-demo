<x-categories>
  <div class="categories">
    <div class="categories__title">Категории</div>
    <div each="{opts.items}" class="categories__item categories__item_level_{level}">
      <a href="{href}" class="categories__link" if={!current}>{text}</a>
      <span class="categories__link is-current" if={current}>{text}</span>
    </div>
  </div>
</x-categories>
