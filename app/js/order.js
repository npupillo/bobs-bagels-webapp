var delivery = (function (module) {

 //  module.init = function(){
 //    $('#content').on('click', '#delivery', function(){
 //      $('#delivery-add').empty().load('partials/delivery-address-form.html');
 //    });

 //    $('#content').on('click', '#pickup', function(){
 //      $('#delivery-add').empty();
 //    });

 //    $('#content').on('click', '#delivery-submit', function(){
 //      localStorage["deliveryMethod"] = $('input:radio[name=delivery-option]:checked').val();
 //      localStorage["orderTime"] = $('#time').val();
 //      localStorage["zipcode"] = $('#zipcode').val();
 //      localStorage["streetOne"] = $('#street-1').val();
 //      localStorage["streetTwo"] = $('#street-2').val();
 //      localStorage["phoneNumber"] = $('#phone-number').val();
 //      location.href = '/#/payments';
 //    });

 //    $('#content').on('click', '#payment-submit', function(){
 //      $.ajax({
 //        url: 'http://localhost:3000/orders',
 //        type: 'POST',
 //        data: {
 //          order: {
 //            delivery_type: localStorage["deliveryMethod"],
 //            delivery_address_1: localStorage["streetOne"],
 //            delivery_address_1: localStorage["streetTwo"],
 //            delivery_phone:  localStorage["phoneNumber"],
 //            }
 //          },
 //          cart: localStorage['cart']
 //      location.href = '/#/payments';
 //    });
 // };






  return module;

})(delivery || {});
