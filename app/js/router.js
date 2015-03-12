'use strict';

var router = (function (module) {

  module.host = "http://localhost:3000";

  var Router = Backbone.Router.extend({
    routes: {
      '':'home',
      'home': 'home',
      'payments': 'payments'
    },
    home: function(){
      $('#content').empty();
      $.ajax({
        url: module.host + "/products",
        type: 'GET'
      }).done(menu.renderMenu).fail();
    },
    payments: function(){
      $('#content').empty().load('partials/payment-form.html');
    },
  });

  module.router = new Router();

  module.backbone = function(){
    Backbone.history.start();
  };
    return module;

})(router || {});



$(document).ready(function(){
  router.backbone();
});
