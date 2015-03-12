var cart = (function (module) {

  module.items = [];
  localStorage["cart"] = JSON.stringify(module.items);

  module.addItem = function(item){
    cart.items = JSON.parse(localStorage["cart"])
    cart.items.push(item.attr('id'));
    localStorage["cart"] = JSON.stringify(cart.items);
  };

  module.init = function(){
    $('#content').on('click', 'button', function(){
      cart.addItem($(this));
    });
  };

  return module;

})(cart || {});
