<x-menu>
  <div class="menu">
    <div class="menu__content">
      <div each="{opts.items}" class="menu__item">
        <a href="{href}" class="menu__link{current ? ' is-current' : ''}">{text}</a>
      </div>
    </div>
  </div>
</x-menu>
