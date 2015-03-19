<x-view-mode>
  <div class="view-mode">
    <inner-html/>
  </div>
</x-view-mode>

<x-view-mode-item>
  <div class="view-mode__item">
    <a href="{opts.href}" class="view-mode__link" if={!opts.current}>{opts.text}</a>
    <span class="view-mode__link is-current" if={opts.current}>{opts.text}</span>
  </div>
</x-view-mode-item>
