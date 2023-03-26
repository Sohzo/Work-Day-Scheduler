var nineBlock = document.getElementById("#hour-9");
var tenBlock = document.getElementById("#hour-10");
var elevenBlock = document.getElementById("#hour-11");
var twelveBlock = document.getElementById("#hour-12");
var oneBlock = document.getElementById("#hour-13");
var twoBlock = document.getElementById("#hour-14");
var threeBlock = document.getElementById("#hour-15");
var fourBlock = document.getElementById("#hour-16");
var fiveBlock = document.getElementById("#hour-17");

var today = dayjs();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $(document).ready(function() {

    $(".saveBtn").on("click", function() {

      var typedEvent = $(this).siblings(".description").val();
      localStorage.setItem('Event', typedEvent);

    })
  })
  
  function colorBlocks() {

    $(".time-block").each(function() {
      
      var currentTime = today.format('HH');
      var compTime = parseInt($(this).attr("id"));
      
      if (compTime == currentTime) {
        $(this).addClass("present");

      } else if (compTime < currentTime) {
        $(this).addClass("past");

      } else {
        $(this).addClass("future");
      }
    });
  };
  
  

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  setInterval(function () {
    $('#currentDay').text(today.format('MMM D, YYYY hh:mm'));
  }, 1000);

  colorBlocks();

});
