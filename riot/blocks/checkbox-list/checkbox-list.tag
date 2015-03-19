<x-checkbox-list>
  <div class="checkbox-list{opts.compact ? ' is-compact' : ''}">
    <div class="checkbox-list__list">
      <div class="checkbox-list__item" each="{items}">
        <a href={href} class="checkbox-list__link{selected ? ' is-selected' : ''}">
          {text}
        </a>
      </div>
    </div>
    <div class="checkbox-list__more" if="{counter > 0}">{"Еще " + counter + "…"}</div>
  </div>

  this.shown   = this.opts.limit ? this.opts.limit : this.opts.items.length;
  this.items   = this.opts.items.slice(0, this.shown);
  this.counter = this.opts.items.length - this.opts.limit;
</x-checkbox-list>
