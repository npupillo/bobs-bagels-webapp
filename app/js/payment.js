var payment = (function (module) {

	module.payment_type = function(){
		if(localStorage['customerId'] != undefined) {
        location.href = '/#/user-payments';
    } else {
      location.href = '/#/payments';
    };
  };

	module.card_pay = function () {
					debugger;
		Stripe.card.createToken({
			number: $('#number').val(),
			cvc: $('#cvc').val(),
			exp_month: $('#exp-month').val(),
			exp_year: $('#exp-year').val()
		}, _stripeResponseHandler);
	};

	_stripeResponseHandler = function (status, response) {
					debugger;
		console.log(response);

			var $form = $('#payment-form');
			var $checkStatus = function () {
				if ($('input[name="store-payment-info"]:checked').attr('checked') == 'checked'){
				return true;
				} else {
					return false;
				}
			}

		if (response.error) {
			$form.find('.payment-errors').text(response.error.message);
			$form.find('button').prop('disabled', false);
		} else {
			debugger;
			var token = response.id;
			order.submitOrder(token);
		};
	};

	_makePayment = function(token){
		debugger;
		$.ajax({
		url: 'http://localhost:3000/charges/make_charge',
		type: 'POST',
		data: {
			charge: {
				token: token,
				cart: localStorage['cart'],
				store_info: $checkStatus
					//			  customer_id: "cus_5rOOrVnSCnMESX" // going to have to expand this to two functions that make charges by user id or by card token.
				}
			}
		}).done(function (data) {
			console.log(data);
			order.submitOrder();
		}).fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR, textStatus, errorThrown);
		});
	};

return module;

})(payment || {});
