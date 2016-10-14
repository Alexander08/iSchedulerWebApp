var actualDate = new Date();
var changingDate = new Date();
var dateForEvents = new Date();
var rowsTableNumber = 42;

var days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
		'Saturday', 'Sunday' ];
var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' ];

function daysInLastMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

function mondayFirst(date) {
	return ((date.getDay() + 6) % 7);
}

function setBackground(month) {
	if (month < 2) {

		document.getElementById("content").className = "winter";
	} else if (month < 5) {

		document.getElementById("content").className = "spring";
	} else if (month < 8) {

		document.getElementById("content").className = "summer";
	} else if (month < 11) {

		document.getElementById("content").className = "autumn";
	} else if (month == 11) {

		document.getElementById("content").className = "winter";
	}
}

/** ************ change table functions ************************************ */

function changeTableToday() {

	actualDate = new Date();
	fillTable();
}

function changeTableToday() {

	actualDate = new Date();
	fillTable();
}

function changeTableMonth() {

	actualDate = new Date();
	fillTable();
}

function changeTableNext() {

	actualDate.setMonth(actualDate.getMonth() + 1);
	fillTable();
}
function changeTablePrev() {

	actualDate.setMonth(actualDate.getMonth() - 1);
	fillTable();
}
/** ************** fill table ***************************************** */
function fillTable() {

	setBackground(actualDate.getMonth());

	document.getElementById("contentTable").innerHTML = fillTableMonth(
			actualDate.getMonth(), actualDate.getFullYear());

	document.getElementById("headerTable").innerHTML = fillTableMonthHeader();

}

function fillTableMonthHeader() {

	var content = "<tr>";
	for (var i = 0; i < days.length; i++) {

		content += "<th><h3>" + days[i] + "</h3></th>";
	}
	content += "</tr>";
	return content;
}

function fillTableMonth(month, year) {

	document.getElementsByTagName("aside")[0].style.display = "block";
	document.getElementById("table").style.width = "61%";

	var content = "<tr>";

	changingDate.setDate(1);
	changingDate.setMonth(month);
	changingDate.setFullYear(year);

	document.getElementById("tableHeader").innerHTML = "<h3>"
			+ months[changingDate.getMonth()] + "   "
			+ actualDate.getFullYear() + "</h3>";

	var lastMonth = new Date(year, month - 1, daysInLastMonth(month, year)
			- mondayFirst(changingDate) + 1);

	var monthNr = changingDate.getMonth();

	for (var i = 0; i <= rowsTableNumber; i++) {

		var dayOfMonth = mondayFirst(changingDate);

		if (i < dayOfMonth + 1) {

			for (var j = 0; j < dayOfMonth; j++) {

				content += "<td onclick='showWhenClick(this)' ondblclick='addEditEvent(this)' onmouseover='showWhenHover(this)' data-eventInfo='"
						+ lastMonth.toISOString().slice(0, 19)
						+ "'><p class='lmonth'>"
						+ lastMonth.getDate()
						+ "</p></td>";

				lastMonth.setDate(lastMonth.getDate() + 1);
				i++;

				if (i % 7 == 0) {
					content += "</tr><tr>";
				}
			}

		} else {
			content += "<td onclick='showWhenClick(this)' ondblclick='addEditEvent(this)' onmouseover='showWhenHover(this)' data-eventInfo='"
					+ changingDate.toISOString().slice(0, 19);

			if (monthNr != changingDate.getMonth()) {

				content += "'><p class='lmonth'>" + changingDate.getDate()
						+ "</p></td>";
			} else {

				content += "'><p>" + changingDate.getDate() + "</p></td>";
			}

			changingDate.setDate(changingDate.getDate() + 1);

			if (i % 7 == 0) {

				content += "</tr><tr>";
			}
		}
	}
	content += "</tr>";
	return content;
}
/* ********************* year table functions ******************************* */

function changeTableYear() {

	fillTableYear(actualDate.getFullYear());
}

function fillTableYear(year) {

	var yearDate = new Date();
	yearDate.setFullYear(year);
	yearDate.setMonth(0);

	document.getElementById("headerTable").innerHTML = "";

	var content = "<tr>";

	for (var i = 0; i < 12; i++) {
		yearDate.setMonth(i);
		if ((i != 0) && (i % 3 == 0)) {
			content += "</tr><tr>"
		}
		content += "<td class='monthYear'><table class='monthYear'><thead>";

		content += "<tr><th colspan='7'>" + "<h3>"
				+ months[yearDate.getMonth()] + "   " + yearDate.getFullYear()
				+ "</h3></tr>";

		content += fillTableMonthHeader();
		content += "</thead><tbody>";

		content += fillTableMonth(yearDate.getMonth(), yearDate.getFullYear());

		content += "</tbody></table></td>";

	}

	content += "</tr>";

	document.getElementById("contentTable").innerHTML = content;
	document.getElementById("tableHeader").innerHTML = "<h3>"
			+ yearDate.getFullYear() + "</h3>";
	document.getElementsByTagName("aside")[0].style.display = "none";
	document.getElementById("table").style.width = "95%";
}

/** *********************************New event Function ******************** */

function addEditEvent(event) {

	var date = event.getAttribute("data-eventInfo");
	var d = new Date(date.slice(0, 10));

	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	document.eventwindow.startDate.value = date;
	document.eventwindow.endDate.value = date;
	document.eventwindow.reminderDate.value = date;

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	event.className += " hasEvent";
	// alert("YOU SHALL NOT PASS!!!" + date + "a");
}
/** **************************aside script******************************** */

function changeTab(evt, tabName) {

	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");

	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");

	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";

	// evt.currentTarget.className += " active";
}
