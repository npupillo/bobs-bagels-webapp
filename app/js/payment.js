var payment = (function (module) {

//	module.getReturnCustomerStatus = function (response) {
//		if (response.data.length != 0) {
//			console.log("user is a baws");
//			return true;
//		} else {
//			console.log("you don't wanna know what the user is");
//			return false;
//		}
//	};

	module.paymentType = function () {
		if (localStorage['customerId'] != undefined) {
			location.href = '/#/user-payments';
			$('#content').empty();
			payment.getCustomerInfo();
		} else {
			location.href = '/#/payments';
		};
	};

	module.renderUserPaymentInfo = function (response) {
		var responseToString = JSON.stringify(response);
		response = responseToString.replace(/\s/g, "_");
		response = JSON.parse(responseToString);
		
		var cardInfo = response.data
		var template = Handlebars.compile($('#user-pay-render').html());
		$('#content').append(template({
			data: cardInfo,
			id: cardInfo.id,
			name: cardInfo.name,
			address_city: cardInfo.address_city,
			address_country: cardInfo.address_country,
			address_line1: cardInfo.address_line1,
			address_line2: cardInfo.address_line2,
			address_zip: cardInfo.address_zip,
			brand: cardInfo.brand,
			exp_month: cardInfo.exp_month,
			exp_year: cardInfo.exp_year,
			type: cardInfo.funding,
			last4: cardInfo.last4
		}));
		$('#content').on('click', '#pay-with-card', function(event){
		event.preventDefault();
		console.log("clicked");
			debugger;
		order.submitOrder($("#pay-with-card").val());
//		console.log(cardInfo);
	});
	};

	module.getCustomerInfo = function () {
		$.ajax({
			url: 'http://localhost:3000/users/retrieve_card',
			type: 'POST',
			data: {
				user: {
					token: localStorage['authToken']
				}
			}
		}).done(function (response) {
			console.log(response);
//			payment.getReturnCustomerStatus(response);
			payment.renderUserPaymentInfo(response);
		}).fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR, textStatus, errorThrown);
		});
	};

	module.cardPay = function () {
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
		if ($('input[name="store-payment-info"]:checked').attr('checked') == 'checked') {
			return true;
		} else {
			return false;
		}
	};

	return module;

})(payment || {});