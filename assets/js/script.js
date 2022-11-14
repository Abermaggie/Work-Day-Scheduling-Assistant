// Create global variables to allow access to these variables throughout document.//
// Create all date formats using the Moment.js functionality//
var currentDate= moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var blockNine= $("#9AM");
var blockTen= $("#10AM");
var blockEleven= $("#11AM");
var blockTwelve= $("#12PM");
var blockOne= $("#13PM");
var blockTwo= $("#14PM");
var blockThree= $("#15PM");
var blockFour= $("#16PM");
var blockFive= $("#17PM");
var blockSix= $("#18PM");
var blockSeven= $("#19PM");

var hour= moment().hours();
var userInput;
var hourSpan;

// Use setInterval function to increment clock at the top of page by seconds until point of minute increment and hour etc.//
var interval = setInterval(function() {
    var momentNow= moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' 
                        + momentNow.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
},100);

// Create a variable that holds the users information in local storage for later using JSON parse.//
// Pass the result of that function to the variable that of the corresponding block to show local storage when saved.//
function initPage() {
    var init9= JSON.parse(localStorage.getItem("09:00 AM"))
    blockNine.val(init9);

    var init10= JSON.parse(localStorage.getItem("10:00 AM"))
    blockTen.val(init10);

    var init11= JSON.parse(localStorage.getItem("11:00 AM"))
    blockEleven.val(init11);

    var init12= JSON.parse(localStorage.getItem("12:00 PM"))
    blockTwelve.val(init12);

    var init1= JSON.parse(localStorage.getItem("01:00 PM"))
    blockOne.val(init1);

    var init2= JSON.parse(localStorage.getItem("02:00 PM"))
    blockTwo.val(init2);

    var init3= JSON.parse(localStorage.getItem("03:00 PM"))
    blockThree.val(init3);

    var init4= JSON.parse(localStorage.getItem("04:00 PM"))
    blockFour.val(init4);

    var init5= JSON.parse(localStorage.getItem("05:00 PM"))
    blockFive.val(init5);

    var init6= JSON.parse(localStorage.getItem("06:00 PM"))
    blockSix.val(init6);

    var init7= JSON.parse(localStorage.getItem("07:00 PM"))
    blockSeven.val(init7);
}

// Create a function that uses the current hour to fuel an if statement referencing a specific//
// appended class back to the CSS to establish conditional background coloring based on past, present, and future.//
function background () {
    $(".form-control").each(function() {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if(hour >timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
        });
} 
// Call both iteration and background functions.//
initPage()
background()
// Create an event listener to save user input to local storage upon click.//
// hourSpan element can be used to fuel the get item in the iteration above.//
    $(".saveBtn").on('click', function() {
        userInput = $(this).siblings(".form-control").val().trim();
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })