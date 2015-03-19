var menu = (function (module) {



  var renderExtras = function(item, module){
    var ingredients = [];

    item.ingredients.forEach(function(ingredient){
      ingredients.push(ingredient.id);
    });
    item.extras = $.grep(module.ingredients, function(n){
      if (_.contains(ingredients, n.id) === false ) {
        return n.id
      };
    });

  };

   renderBagels = function(item, module){
      if (item.id === 8) {
          item.bagel = module.bagels[3];
      } else if (module.id === 9 ) {
        item.bagel = module.bagels[1];
      } else if (item.id === 10 ) {
        item.bagel = module.bagels[2];
      } else if (item.id === 12 ) {
        item.bagel = module.bagels[4];
      } else {
        item.bagel = module.bagels[0];
      };
      item.otherBagels = $.grep(module.bagels, function(bagel){
        return bagel.id != item.bagel.id;
      });
    };



    module.renderBagelMenu = function(data, module){

      data.forEach(function(item){
        item.price = accounting.formatMoney(item.price);
        renderExtras(item, module);
        renderBagels(item, module);
      });

      var template = Handlebars.compile($('#menu-info').html());
      $('#content').html(template({
        products: data
      }));
    };

    module.prettifyOrderPrices = function(order){
      order.extras = accounting.formatMoney(order.extras);
      order.delivery_cost = accounting.formatMoney(order.delivery_cost);
      order.taxes = accounting.formatMoney(order.taxes);
      order.subtotal = accounting.formatMoney(order.subtotal);
      order.total = accounting.formatMoney(order.total);
    };

    module.renderDrinks = function(data){
      data.forEach(function(item){
        item.price = accounting.formatMoney(item.price);
      });

      var template = Handlebars.compile($('#drink-render').html());
      $('#content').append(template({
        drinks: data
      }));
    };

  module.renderCaterMenu = function(data){
    data = $.grep(data, function(n){
     return n.product_type == "c";
    });

    data.forEach(renderBagels);

    var template = Handlebars.compile($('#cater-menu').html());
    $('#content').html(template({
      products: data
    }));
  };

  return module;

})(menu || {});
