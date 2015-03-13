var delivery = (function (module) {

  module.init = function(){
    $('#content').on('click', '#delivery', function(){
      $('#delivery-add').empty().load('partials/delivery-address-form.html');
    });

    $('#content').on('click', '#pickup', function(){
      $('#delivery-add').empty();
    });
  };






  return module;

})(delivery || {});
