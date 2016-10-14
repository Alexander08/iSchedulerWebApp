/*function Event() {

	this.title = "";
	this.description = "";
	this.startDate = new Date();
	this.endDate = new Date();
	this.reminder = 0;
	this.reminderDate = new Date();
	this.priority = 0;
}
 */
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
		var content = "Title:&#9;" + this.title + " <br/>Description:&#9;&#9; "
				+ this.description + "<br/>Start Date:&#9;&#9; " + this.startDate
				+ " <br/>End Date:&#9;&#9; " + this.endDate + " <br/>Reminder:&#9;&#9; "
				+ this.reminderDate + " <br/>Priority:&#9;&#9; " + this.priority;
		return content;
	}
}
/*
 * function Event(event) {
 * 
 * this.title = event.title; this.description = event.description;
 * this.startDate = event.startDate; this.endDate = event.endDate; this.reminder =
 * event.reminder; this.reminderDate = event.reminderDate; this.priority =
 * event.priority; }
 */
// need to work on this!
function checkEvent(event) {

	return event.startDate.getDate() == (new Date()).getDate();
}

/** ************************ global var and work******************************* */

var eventList = new Array();
var index = 0;

function addEvent() {

	title = document.eventwindow.title.value;
	description = document.eventwindow.description.value;
	startDate = document.eventwindow.startDate.value;
	endDate = document.eventwindow.endDate.value;
	reminder = document.eventwindow.reminder.value;
	reminderDate = document.eventwindow.reminderDate.value;
	priority = document.eventwindow.priority.value;

	var newEvent = new Event(title, description, startDate, endDate, reminder,
			reminderDate, priority);
	document.getElementById("contentLog").innerHTML += "<p> New Event was Created </p>"
			+ "<p>" + newEvent.printEvent() + "</p><hr/>";

	eventList[index] = newEvent;
	index++;

	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}

function showWhenHover(event) {

	date = event.getAttribute("data-eventInfo");
	var d = new Date(date);

	var todayEvents = new Array();
	document.getElementById("lowerSide").innerHTML = "<hr/>";

	for (var i = 0; i < eventList.length; i++) {

		if (compareDate(new Date(eventList[i].startDate), d)) {
			document.getElementById("lowerSide").innerHTML += "<p>"
					+ eventList[i].printEvent() + "</p><hr/>";
		}
	}
	// changeTab("a", "contentToday");
}
function showWhenClick(event) {

	date = event.getAttribute("data-eventInfo");
	var d = new Date(date);

	var todayEvents = new Array();
	document.getElementById("contentToday").innerHTML = "";

	for (var i = 0; i < eventList.length; i++) {

		if (compareDate(new Date(eventList[i].startDate), d)) {
			document.getElementById("contentToday").innerHTML += "<p>"
					+ eventList[i].printEvent() + "</p><hr/>";
		}
	}
	changeTab(event, "contentToday");
}
function compareDate(date1, date2) {

	var result = false;

	if (date1.getDate() != date2.getDate()) {
		return false;
	} else if (date1.getMonth() != date2.getMonth()) {
		return false;
	} else if (date1.getFullYear() != date2.getFullYear()) {
		return false;
	}
	return true;
}