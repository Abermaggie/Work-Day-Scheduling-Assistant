// Opens to current day- use moment.js for the date formats.//
// create several div boxes to make a standardized centered box in the middle.//
    //use griding to create each of the horizontal boxes with borders to easily section off the event boxes.//
//scroll padding to be able to go up and down.
    // This method will allow all content to load on the page //
// before triggering any of the jquery functions we add.//
$(document).ready(() => {
 let currentDayEl =$('#currentDay');
 let containerEl= $('.container');
 let currentHour= moment().hour();
 let workDayHours= [
    moment().hour(9).format('hA'),
    moment().hour(10).format('hA'),
    moment().hour(11).format('hA'),
    moment().hour(12).format('hA'),
    moment().hour(13).format('hA'),
    moment().hour(14).format('hA'),
    moment().hour(15).format('hA'),
    moment().hour(16).format('hA'),
    moment().hour(16).fromat('hA')
 ];
 let timeBlockHour = $('col-1 hour');
 let task= $('.description');
 let currentDay = moment().format('dddd, MMMM Do');
 currentDayEl.text(currentDay);
});