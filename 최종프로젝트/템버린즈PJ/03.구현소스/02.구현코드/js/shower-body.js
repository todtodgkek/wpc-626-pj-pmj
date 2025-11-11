$(function() {
  // data/BODY.json에서 제품 목록을 불러와 .product-grid에 렌더링
  $.getJSON('./data/BODY.json')
    .done(function(data) {
      var $grid = $('.product-grid');
      $grid.empty();

      if (!data || !Array.isArray(data.products)) return;

      data.products.forEach(function(p) {
        var priceText = '';
        if (typeof p.price === 'number') {
          priceText = '₩ ' + p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        var $prod = $('<div>').addClass('product');
        var $img = $('<img>').attr('src', p.image).attr('alt', p.name);
        var $title = $('<h3>').text(p.name);
        var $desc = $('<p>').text(p.description);
        var $price = $('<p>').text(priceText);

        $prod.append($img, $title, $desc, $price);
        $grid.append($prod);
      });
    })
    .fail(function(err) {
      console.error('BODY.json 불러오기 실패', err);
    });
});
