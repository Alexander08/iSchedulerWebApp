function Event(title, description, startDate, endDate, reminder, reminderDate,
               priority) {

    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.reminder = reminder;
    this.reminderDate = reminderDate;
    this.priority = priority;

    this.printEvent = function() {
        var content = "Title:&#9;" + this.title + " <br/>Description:&#9; "
            + this.description + "<br/>Start Date:&#9;" + this.startDate
            + " <br/>End Date:&#9; " + this.endDate + " <br/>Reminder:&#9;"
            + this.reminderDate + " <br/>Priority:&#9; " + this.priority;
        return content;
    }
}

/** ************************ global var and work******************************* */

function addEvent() {

    var title = document.eventwindow.title.value;
    var description = document.eventwindow.description.value;
    var startDate = document.eventwindow.startDate.value;
    var endDate = document.eventwindow.endDate.value;
    var reminder = document.eventwindow.reminder.value;
    var reminderDate = document.eventwindow.reminderDate.value;
    var priority = document.eventwindow.priority.value;

    var newEvent = new Event(title, description, startDate, endDate, reminder,
        reminderDate, priority);
    document.getElementById("contentLog").innerHTML += "<p> New Event was Created </p>"
        + "<p>" + newEvent.printEvent() + "</p><hr/>";

  //  colorCell(startDate);
    eventList[index] = newEvent;
    index++;

    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function deleteEvent(event){

    var idx = event.getAttribute("data-indexInList");
    var someEvent = eventList[idx];
    eventList.splice(idx, 1);
    document.getElementById("contentLog").innerHTML += "<p class='alittler'> An Event has been Deleted </p>"
        + "<p class='alittler'>" + someEvent.printEvent() + "</p><hr/>";
    showEdit();
}

function colorCell(date){


    for(cell in allCell){
alert(cell);
  //      if(cell.dataset.eventinfo == date.slice(0,19)){
        if(cell.getAttribute("data-eventinfo") === date.slice(0,19)){

            cell.className += " hasEvent";
        }
    }
}