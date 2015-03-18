var payment = (function (module) {

	module.payment_type = function(){
		if(localStorage['customerId'] != undefined) {
        location.href = '/#/user-payments';
    } else {
      location.href = '/#/payments';
    };
  };

	module.card_pay = function () {
		Stripe.card.createToken({
			number: $('#number').val(),
			cvc: $('#cvc').val(),
			exp_month: $('#exp-month').val(),
			exp_year: $('#exp-year').val()
		}, _stripeResponseHandler);
	};

	_stripeResponseHandler = function (status, response) {
		console.log(response);

		var $form = $('#payment-form');

		if (response.error) {
			$form.find('.payment-errors').text(response.error.message);
			$form.find('button').prop('disabled', false);
		} else {
			var token = response.id;
			order.submitOrder(token);
		};
	};

	module.checkStatus = function () {
		if ($('input[name="store-payment-info"]:checked').attr('checked') == 'checked'){
			return true;
		} else {
			return false;
			}
		};

return module;

})(payment || {});
