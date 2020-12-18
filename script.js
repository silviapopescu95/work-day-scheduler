// Makes sure the DOM is fully loaded
$(document).ready(function() {
    //onclick for save button
    $(".btn").on("click", function() {
        var hour = $(this).parent().attr("id");
        var task = $(this).siblings(".task").val();
        console.log(hour);
        console.log(task);
        

        //save in local storage
        localStorage.setItem(hour, task);
    });


  function changeColor() {
      var now = moment().hour();

      // checks current time against schedule
      $(".hour").each(function() {
          var scheduleHour = parseInt($(this).attr("id"));

          if(scheduleHour < now) {
              $(this).addClass("past");
          } else if (scheduleHour === now) {
              $(this).addClass("current");
          } else {
              $(this).addClass("future");
          }
      });
  };

  changeColor();

  // Updates time every second
  var updateTime = setInterval(changeColor, 1000);
  console.log(updateTime);

  // pulls any data in local storage
  $("#9 .task").val(localStorage.getItem("#9"));
  $("#10 .task").val(localStorage.getItem("#10"));
  $("#11 .task").val(localStorage.getItem("#11"));
  $("#12 .task").val(localStorage.getItem("#12"));
  $("#13 .task").val(localStorage.getItem("13"));
  $("#14 .task").val(localStorage.getItem("14"));
  $("#15 .task").val(localStorage.getItem("15"));
  $("#16 .task").val(localStorage.getItem("16"));
  $("#17 .task").val(localStorage.getItem("17"));
  
  // Show current date and time
  $("#todaysDate").text(moment().format('dddd MMMM Do YYYY'));

});
