
var source = $("#user_profile_template").html();
var template = Handlebars.compile(source);

//hard coded mock JSON DATA for handlebars template:
var user_data =
{
  users: [
    {
      "id": 1,
      "first_name": "Joey",
      "last_name": "Schmoe",
      "email": "joe@schmoe.com",
      "phone_number": "555-555-5555",
      "address_1": "502 Main St",
      "address_2": "Apt 2",
      "address_zipcode": "02103"
    },
  ]
};
$("#display_user").html(template(user_data));

  //hide EDIT PROFILE FORM on initial load
  $('#edit-profile-form').hide();

  //get id of user when EDIT PROFILE button is clicked
  $(".edit-profile").on('click', function(event){

  //toggle show/hide
   $('#edit-profile-form').toggle();

// debugger;
    //get the id of this user when Edit Profile button is clicked
    var user_id = $(this).attr("id").replace('edit-profile-b-', '');

    console.log("EDIT PROFILE clicked, user id is: " + user_id);

    //call editReview, pass event and movie_id
    // MovieApp.editReview(event, movie_id);

  });



  $('form#edit-profile-form').on('submit',function(event){
    event.preventDefault();
    console.log('SAVE PROFILE button clicked');

    $.ajax({
      url: 'http://localhost:3000/users/' + user_id,
      type: 'PATCH',
      data: {
        user: {
          first_name: $('#user-first-name-field-' + user_id).val(),
          last_name: $('#user-last-name-field-' + user_id).val(),
          email: $('#user-email-field-' + user_id).val(),
          phone_number: $('#user-phone-field-' + user_id).val(),
          address_1: $('#user-address-1-field-' + user_id).val(),
          address_2: $('#user-address-2-field-' + user_id).val(),
          address_zipcode: $('#user-zipcode-field-' + user_id).val()
        }
      }
    }).done(function(data){
      console.log(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR, textStatus, errorThrown);
    });
  }); // end form#edit-profile-form
