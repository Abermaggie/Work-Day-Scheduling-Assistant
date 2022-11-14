// Opens to current day- use moment.js for the date formats.//
// create several div boxes to make a standardized centered box in the middle.//
    //use griding to create each of the horizontal boxes with borders to easily section off the event boxes.//
//scroll padding to be able to go up and down.
    // This method will allow all content to load on the page //
// before triggering any of the jquery functions we add.//
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

var interval = setInterval(function() {
    var momentNow= moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' 
                        + momentNow.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
},100);

function initPage() {
    var init9= JSON.parse(localStorage.getItem("09:00 am"))
    blockNine.val(init9);

    var init10= JSON.parse(localStorage.getItem("10:00 am"))
    blockTen.val(init10);

    var init11= JSON.parse(localStorage.getItem("11:00 am"))
    blockEleven.val(init11);

    var init12= JSON.parse(localStorage.getItem("12:00 pm"))
    blockTweleve.val(init12);

    var init1= JSON.parse(localStorage.getItem("01:00 pm"))
    blockOne.val(init1);

    var init2= JSON.parse(localStorage.getItem("02:00 pm"))
    blockTwo.val(init2);

    var init3= JSON.parse(localStorage.getItem("03:00 pm"))
    blockThree.val(init3);

    var init4= JSON.parse(localStorage.getItem("04:00 pm"))
    blockFour.val(init4);

    var init5= JSON.parse(localStorage.getItem("05:00 pm"))
    blockFive.val(init5);

    var init6= JSON.parse(localStorage.getItem("06:00 pm"))
    blockSix.val(init6);

    var init7= JSON.parse(localStorage.getItem("07:00 pm"))
    blockSeven.val(init7);
}

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

$(document).read(function() {
    initPage()
    background()

    $(".saveBtn").on('click', function() => {
        userInput = $(this).siblings(".form-control").val().trim();
        hourspan = $(this).siblings(".input-group-prepend").text().trim();
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
})