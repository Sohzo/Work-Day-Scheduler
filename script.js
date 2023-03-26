
//Sets current date as variable
var today = dayjs();

$(function () {
  
  //This requires the function below to wait for all DOM elements to be loaded before running
  $(document).ready(function() {

    //This function saves the info of the block into local storage when the save button is clicked
    $(".saveBtn").on("click", function() {

      var typedEvent = $(this).siblings(".description").val();
      var whichEvent = $(this).siblings(".hour").text();
      localStorage.setItem(whichEvent, typedEvent);

    })
  })
  
  //This function sets the color of the blocks based on the current time
  function colorBlocks() {

    $(".time-block").each(function() {
      
      //Formats the time to 24 hour clock
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
  
  //This function takes the info from local storage and displays it on reload
  $(".hour").each(function() {
    var thisBlock = $(this).text();
    var returnEvent = localStorage.getItem(thisBlock);

    $(this).siblings(".description").val(returnEvent);
    
  })

  //This function sets the time under the header
  setInterval(function () {
    $('#currentDay').text(today.format('MMM D, YYYY hh:mm'));
  }, 1000);

  colorBlocks();

});
