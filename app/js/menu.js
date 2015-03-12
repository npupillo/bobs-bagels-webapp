var menu = (function (module) {

  module.renderMenu = function(data){
    var template = Handlebars.compile($('#menu-info').html());
      $('#content').html(template({
    products: data
  }));
  };

  return module;

})(menu || {});
