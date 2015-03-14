'use strict';

var router = (function (module) {

  module.host = "http://localhost:3000";

  var Router = Backbone.Router.extend({
    routes: {
      '':'home',
      'home': 'home',
      'payments': 'payments',
      'delivery-options': 'deliveryOptions',
	  'registration': 'registration',
	  'login': 'login',
	  'delivery': 'delivery'
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
	registration: function(){
	  $('#content').empty().load('partials/registration-form.html');
      registration.init();
	 },
	 login: function(){
		$('#content').empty().load('partials/login-form.html');
      registration.init();
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
