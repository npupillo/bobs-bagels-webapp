var cart = (function (module) {



  buildOrderItem = function(item){
    var orderItem = {};
    var menuItem = item.attr('id');
    orderItem['id'] = menuItem;
    orderItem['quantity'] = $('#' + menuItem +'quantity').val();
    orderItem['comments'] = $('#' + menuItem +'comments').val();
    return orderItem;
  };

  module.addItem = function(item){
    var orderItem = buildOrderItem(item);
    var items = JSON.parse(localStorage["cart"]);
    items.push(orderItem);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  module.init = function(){
    $('#content').on('submit', 'form', function(){
      cart.addItem($(this));
    });
  };

  return module;

})(cart || {});
