// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(logStart)
// TODO: Add a listener for click events on the save button. This code shoul
// use the id in the containing time-block as a key to save the user input i
// local storage. HINT: What does `this` reference in the click listener
// function?

function logStart(){
    console.log("Log start")
    $(".saveBtn").click(function(){
        console.log("I was clicked")
        var key = $(this).parent().attr('id')
        console.log(key)
        var valueToSave = $(this).siblings("textarea").val()
        console.log(valueToSave)
        console.log(typeof(key))
        console.log(typeof(valueToSave))
        // save w/my key & value
        localStorage.setItem(key, valueToSave)
    })        

          
    // How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $('#hour-9').siblings('#text-area').val(localStorage.getItem('hour-9'))
    document.querySelector('#hour-9')
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    function timeBlockChange() {
    $('.time-block').each(function (){
    var eventHour = $(this).attr('id').split('-')[1]
    var currentHour = dayjs().hour()
    console.log(currentHour)
        if (currentHour == eventHour) {
            $(this).removeClass('past future').addClass("present")
        } else if (currentHour < eventHour) {
            $(this).removeClass('present past').addClass('future')
        } else if (currentHour > eventHour) {
            $(this).removeClass('future present').addClass('past')
        }     
    })}
    setInterval(today, 1000);
    timeBlockChange();

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs()
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'))
};


// strings - " ", '', ``
// array - []
// object - { key: value}
// number - 234 134
// boolean - true or false