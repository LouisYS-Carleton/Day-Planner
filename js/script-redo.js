// Variables
let timeSlot = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": ""
}
let counter = 1
// End of Variables


$(document).ready(function(){
    if (!localStorage.getItem( 'timeSlot' )) {
        updateDayPlannerTasks( timeSlot );
    } else {
        updateDayPlannerTasks(JSON.parse(localStorage.getItem('timeSlot')))
    }
})

function update() {
    $( '#date-today h6' )
    .text((moment().format( 'ddd' ) + ", " + moment().format( 'MMMM DD YYYY, hh:mm:ss a' )))
}
setInterval(update, 10);

for (const slot in timeSlot) {
    let rowTextInput = "#row-text" + counter
    $(rowTextInput).text(timeSlot[slot])
    let slotID = "#slot" + counter
    let presentHour = moment().hour()
    let slotString = $(slotID).text()
    let slotNumber = getHourNumber(slotString)

    if (slotNumber < presentHour) {
        $(rowTextInput).addClass( "past-hour" )
    } else if (slotNumber > presentHour) {
        $(rowTextInput).addClass( "future-hour" )
    } else {
        $(rowTextInput).addClass( "present-hour" )
    }
    counter++
}

function getHourNumber(hourString) {
    switch(hourString) {
        case "8 AM": return 8;
        case "9 AM": return 9;
        case "10 AM": return 10;
        case "11 AM": return 11;
        case "12 PM": return 12;
        case "1 PM": return 13;
        case "2 PM": return 14;
        case "3 PM": return 15;
        case "4 PM": return 16;
        case "5 PM": return 17;
    }
}

function loadDataSet() {
    result = localStorage.getItem( 'timeSlot' )
    return (result ? result : timeSlot)
}

function settingLocalStorage() {
    localStorage.setItem( 'timeSlot', JSON.stringify(timeSlot))
}

function saveToLocalStorage(dayObj) {
    localStorage.setItem( 'timeSlot', JSON.stringify(dayObj))
}

function saveDayPlans(hourString, val) {
    if (!localStorage.getItem('timeSlot')) {
        settingLocalStorage()
    }

    let slotHours = JSON.parse(localStorage.getItem( 'timeSlot' ))
    slotHours[hourString] = val
    saveToLocalStorage(slotHours)
}

$('button').click(function() {
    value = $(this).siblings( "textarea" ).val()
    hourString = $(this).siblings( "div" ).text()
    saveDayPlans(hourString, value)
})

function updateDayPlannerTasks(dayObject) {
    $('.scheduler-row').each(function(index) {
        let res = $(this).children( "div" )
        $(this).children( "textarea" ).text
        (dayObject[res.text()])
    })
}

