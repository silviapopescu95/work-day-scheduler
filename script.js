$(document).ready(function(){
    //onclick for save button
    $(".btn").on("click", function() {
        var task = $(this).attr(".form-control").val();
        var hour = $(this).parent().attr("id");
        console.log(task);
        console.log(hour);

        //save in local storage
        localStorage.setItem(task, hour);
    });
});

// Show current date and time
$("#todaysDate").text(moment().format('dddd MMMM Do YYYY'));