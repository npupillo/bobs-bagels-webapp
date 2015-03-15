var payment = (function (module) {

  Stripe.setPublishableKey('pk_test_H4OZUG84CRFTuQ0ffA8SQg6g');

  module.pay = function(){
    Stripe.card.createToken({
      number: $('#number').val(),
      cvc: $('#cvc').val(),
      exp_month: $('#exp-month').val(),
      exp_year: $('#exp-year').val()
      }, _stripeResponseHandler);
    };

  _stripeResponseHandler = function(status, response) {
    console.log(response);

    var $form = $('#payment-form');

    if (response.error) {
      // Show the errors on the form
      $form.find('.payment-errors').text(response.error.message);
      $form.find('button').prop('disabled', false);
    } else {
      // response contains id and card, which contains additional card details
      var token = response.id;
		
	  var cartJson = JSON.parse(localStorage['cart'])
	  var amountString = $.grep(cartJson[0]['price'], function(n){ return n != "$"}).join("");
	  var amount = parseInt(amountString) * 100;
		
      $.ajax({
        url: 'http://localhost:3000/charges/make_charge',
        type: 'POST',
        data: { charge : {
              token: token,
              amount: amount,
			  customer_id: "cus_5rOOrVnSCnMESX" // going to have to expand this to two functions that make charges by user id or by card token.
              }
          }
      }).done(function(data){
        console.log(data);
      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR, textStatus, errorThrown);
      });
    };
  };
	
  module.init = function(){
    console.log('im the payment')
    $('#content').on('submit', function(){
      event.preventDefault();

      payment.pay();
    });
  };

  return module;

})(payment || {});

