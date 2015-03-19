<x-sorting>
  <div class="sorting">
    <div class="sorting__title">Сортировать:</div>
    <inner-html/>
  </div>
</x-sorting>

<x-sorting-item>
  <div class="sorting__item">
    <a href="{opts.href}" class="sorting__link" if={!opts.current}>{opts.text}</a>
    <span class="sorting__link is-current" if={opts.current}>{opts.text}</span>
  </div>
</x-sorting-item>
