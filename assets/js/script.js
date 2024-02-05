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