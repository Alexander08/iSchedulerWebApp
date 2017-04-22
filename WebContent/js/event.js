function Event(title, description, startDate, endDate, reminder, reminderDate,
		priority) {

	this.title = title;
	this.description = description;
	this.startDate = startDate;
	this.endDate = endDate;
	this.reminder = reminder;
	this.reminderDate = reminderDate;
	this.priority = priority;

	this.printEvent = print;
}
function print() {
	var content = "Title:&#9;" + this.title + " <br/>Description:&#9; "
			+ this.description + "<br/>Start Date:&#9;" + this.startDate
			+ " <br/>End Date:&#9; " + this.endDate + " <br/>Reminder:&#9;"
			+ this.reminderDate + " <br/>Priority:&#9; " + this.priority;
	return content;
}
/** ************************ global var and work******************************* */

function addEvent() {

	var isValid = false;
	var newEvent = new Event();

	newEvent.title = document.eventwindow.title.value;
	isValid = isValidTextField(newEvent.title, 't');

	newEvent.description = document.eventwindow.description.value;
	isValid = isValidTextField(newEvent.description, 'd');

	newEvent.startDate = document.eventwindow.startDate.value;
	newEvent.endDate = document.eventwindow.endDate.value;

	var reminder = document.eventwindow.reminder.value;
	var reminderDate = document.eventwindow.reminderDate.value;
	var priority = document.eventwindow.priority.value;

	document.getElementById("contentLog").innerHTML += "<p> New Event was Created </p>"
			+ "<p>" + newEvent.printEvent() + "</p><hr/>";

	// colorCell(startDate);
	eventList[index] = newEvent;
	index++;

	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}

function deleteEvent(event) {

	var idx = event.getAttribute("data-indexInList");
	var someEvent = eventList[idx];
	eventList.splice(idx, 1);
	document.getElementById("contentLog").innerHTML += "<p class='alittler'> An Event has been Deleted </p>"
			+ "<p class='alittler'>" + someEvent.printEvent() + "</p><hr/>";
	showEdit();
}

function findAnEvent(date) {

	var d = new Date(date);
	d.setDate(d.getDate() + 1);
	date = d.toISOString().slice(0, 19);

	for (var i = 0; i < eventList.length; i++) {

		if (eventList[i].startDate.slice(0, 10) == date.slice(0, 10)) {
			return true;
		}
	}
	return false;
}

function isValidTextField(field, type) {
	if (type == 't') {
		if (!(field.length > 1 && field.length < 30)) {
			alert('Invalid title');
			return false;
		}
	} else {
		if (!(field.length > 1 && field.length < 255)) {
			alert('Invalid description');
			return false;
		}
	}
	return true;
}