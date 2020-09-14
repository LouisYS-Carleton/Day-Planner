let timeSlot = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 AM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": ""
}

$(document).ready(function(){
    if (!localStorage.getItem( 'timeSlot' )) {
        updateSchedulerTasks( timeSlot );
    } else {
        updateSchedulerTasks(JSON.parse(localStorage.getItem('timeSlot')))
    }
})

function update() {
    $( '#date-today h6' )
    .text((moment().format( 'ddd' ) + ", " + moment().format( 'MMMM DD YYYY, h:mm:ss a' )))
}
setInterval(update, 10);