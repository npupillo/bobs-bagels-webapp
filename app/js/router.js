'use strict';

var router = (function (module) {

  module.host = "http://localhost:3000";

  var Router = Backbone.Router.extend({
    routes: {
      '':'home',
      'home': 'home',
      'payments': 'payments',
      'delivery-options': 'deliveryOptions',
      'catering': 'catering',
      'my-profile': 'myProfile',
      'about': 'about'
    },
    home: function(){
      $('#content').empty();
      $.ajax({
        url: module.host + "/products",
        type: 'GET'
      }).done(menu.renderMenu).fail();
      cart.init();
    },
    payments: function(){
      $('#content').empty().load('partials/payment-form.html');
      payment.init();
    },
    deliveryOptions: function(){
      $('#content').empty().load('partials/order-time-form.html');
      delivery.init();
    },
    catering: function(){
      $('#content').empty();
      $.ajax({
        url: module.host + "/products",
        type: 'GET'
      }).done(menu.renderCaterMenu).fail();
      cart.init();
    },
    myProfile: function(){
      $('#content').empty();
      $.ajax({
        url: module.host + "/users/1",
        type: 'GET'
      }).done().fail();
    },
    about: function(){
      $('#content').empty().load('partials/about.html');;
    }
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
