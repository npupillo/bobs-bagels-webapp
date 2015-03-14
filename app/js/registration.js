# To Do: jam this in the general shape of Max's module

var registration = (function (module) {
	
  var authToken, apiHost;

   module.init = function() {
    authToken = localStorage.getItem('authToken'); // what is this local storage function?

    apiHost = 'http://localhost:3000/';
    setupAjaxRequests();

    $('#registrationForm').on('submit', submitRegistration);
  };

  module.submitRegistration = function(event) {
    event.preventDefault();

    $.ajax({
      url: apiHost + '/users',
      type: 'POST',
      data: {user: {email: $('#email').val(), password: $('#password').val()}},
    })
    .done(loginSuccess)
    .fail(function(err) {
      console.log(err);
    });

    return false;
  };

  module.loginSuccess = function(userData) {
    localStorage.setItem('authToken', userData.token);
    console.log('logged in!');
    window.location.href = '/';
  };

  module.submitLogin = function(event) {
    var $form;
    event.preventDefault();
    $form = $(this);
    $.ajax({
      url: apiHost + '/users/sign_in',
      type: 'POST',
      data: $form.serialize()
    })
    .done(loginSuccess)
    .fail(function(err) {
      console.log(err);
    });

    return false;
  };

  module.setupAjaxRequests = function() {
    $.ajaxPrefilter(function( options ) {
      options.headers = {};
      options.headers['AUTHORIZATION'] = "Token token=" + authToken; // this is weird
    });
  };

  // Let's assume that this requires login
  module.loadPosts = function() {
    $.ajax({
      url: apiHost + '/posts',
      type: 'GET',
      dataType: 'json',
    })
    .done(displayPosts)
    .fail(acceptFailure);
  };

  module.displayPosts = function(posts) {
    console.table(posts);
  };

  module.acceptFailure = function(error) {
    // If things are failing, deal with specific errors
    // If status is unauthorized, then redirect to a login route/page
    if (error.status === 401) { // 401 is unauthorized
      console.log('SEND TO LOGIN SCREEN');
      window.location.href = '/sign_in.html';
    }
  };

	return module;
	
})(registration || {});
