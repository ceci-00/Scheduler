// run code when all elements have finished loading
$(document).ready(runScheduler)
// operates scheduler
function runScheduler() {
    function createSaveFunctionality(){
        // listener for save button
        $(".saveBtn").click(function () {
            var key = $(this).parent().attr('id')
            var valueToSave = $(this).siblings("textarea").val()
            // save w/my key & value
            localStorage.setItem(key, valueToSave)
        })
    }
    // save value, even after refresh
    function loadStorage(){  
        $('.time-block').each(function () {
            var key = $(this).attr("id")
            // console.log(key)
            var savedValue = localStorage.getItem(key)
            $(this).children('textarea').val(savedValue)           
        })
    }
    // change color according to time of event: past/present/future
    function timeBlockChange() {
        $('.time-block').each(function () {
            var eventHour = $(this).attr('id').split('-')[1]
            var currentHour = dayjs().hour()
            if (currentHour == eventHour) {
                $(this).removeClass('past future').addClass("present")
            } else if (currentHour < eventHour) {
                $(this).removeClass('present past').addClass('future')
            } else if (currentHour > eventHour) {
                $(this).removeClass('future present').addClass('past')
            }
        })
    }
    // shows today's date at top of page
    function calendarDate() {
        var today = dayjs()
        $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'))
    };
    // calling all functions
    loadStorage()
    setInterval(calendarDate, 1000);
    timeBlockChange();
    createSaveFunctionality()
};
