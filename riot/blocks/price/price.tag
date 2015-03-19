<x-price>
  <div class="price">
    <div class="price__range">
      <div class="price__group price__group_from">
        <label class="price__title">От:</label>
        <input type="text" class="price__field" placeholder={opts.min} value={opts.from} />
      </div>
      <div class="price__group price__group_to">
        <label class="price__title">До:</label>
        <input type="text" class="price__field" placeholder={opts.max} value={opts.to} />
      </div>
    </div>
    <div class="price__show">Показать</div>
  </div>
</x-price>
