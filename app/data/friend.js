$(document).ready(function(){

var getInfo = function(){
  $("#newUserBtn").on("click", function(event) {
    event.preventDefault();
    var newUser = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      selectOption1: $("#selectOption1").val().trim(),
      selectOption2: $("#selectOption2").val().trim()

    };
  };

});
module.exports = getInfo;
