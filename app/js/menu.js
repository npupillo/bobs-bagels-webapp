var menu = (function (module) {

  module.renderMenu = function(data){
    data = $.grep(data, function(n){
     return n.product_type != "c";
    });
    var template = Handlebars.compile($('#menu-info').html());
      $('#content').html(template({
    products: data
  }));
  };

  module.renderCaterMenu = function(data){
    data = $.grep(data, function(n){
     return n.product_type == "c";
    });
    var template = Handlebars.compile($('#menu-info').html());
      $('#content').html(template({
    products: data
  }));
  };

  return module;

})(menu || {});
