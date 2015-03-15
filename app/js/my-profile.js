var source = $("#user_profile_template").html();
var template = Handlebars.compile(source);

//hard coded mock json data for handlebars template:
var user_data =
{
  users: [
    {
      "id": 1,
      "first_name": "Joe",
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


  $('form#edit-profile-form').on('submit',function(event){
    event.preventDefault();

    alert('BUTTON CLICKED');

  // $.ajax({
  //   url: 'http://localhost:3000/users/' + the_user_id,
  //   type: 'PATCH',
  //   dataType: 'JSON',
  //   data: {
  //     review: {
  //       comment: $('#review-comment-field-' + review_id).val(),
  //       // star_rating: Number($('.rating-input:checked')[0].value),
  //       // reviewer_name: $('#review-reviewer-name').val()
  //     }
  //   }
  // }).done(function(data){
  //   console.log(data)
  //   // !!!!  after submitting the updated user data, load the new user data to #user_profile_template

  // }).fail();


  }); // end form#edit-profile-form

