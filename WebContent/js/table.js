function changeTableToday() {

	actualDate = new Date();
	createTableDay();
	colorCell();
	document.getElementsByName("prev")[0].className = "d";
	document.getElementsByName("nxt")[0].className = "d";
}

function changeTableDay() {

	actualDate = new Date();
	createTableDay();
	colorCell();
	document.getElementsByName("prev")[0].className = "d";
	document.getElementsByName("nxt")[0].className = "d";
}

function changeTableWeek() {

	actualDate = new Date();
	createTableWeek();
	colorCell();
	document.getElementsByName("prev")[0].className = "w";
	document.getElementsByName("nxt")[0].className = "w";
}
function changeTableMonth() {

	actualDate = new Date();
	createTableMonth();
	colorCell();
	document.getElementsByName("prev")[0].className = "m";
	document.getElementsByName("nxt")[0].className = "m";
}

function changeTableYear() {

	actualDate = new Date();
	createTableYear();
	colorCell();
	document.getElementsByName("prev")[0].className = "y";
	document.getElementsByName("nxt")[0].className = "y";
}

function changeTableNext(event) {

	var type = event.getAttribute("class");
	switch (type) {
	case "d": {
		actualDate.setDate(actualDate.getDate() + 1);
		createTableDay();
		colorCell();
		break;
	}
	case "w": {
		actualDate.setDate(actualDate.getDate() + 7);
		createTableWeek();
		colorCell();
		break;
	}
	case "m": {
		actualDate.setMonth(actualDate.getMonth() + 1);
		createTableMonth();
		colorCell();
		break;
	}
	case "y": {
		actualDate.setFullYear(actualDate.getFullYear() + 1);
		createTableYear();
		colorCell();
		break;
	}
	default: {
		actualDate.setMonth(actualDate.getMonth() + 1);
		createTableMonth();
		colorCell();
		break;
	}

	}
}
function changeTablePrev(event) {

	var type = event.getAttribute("class");
	switch (type) {
	case "d": {
		actualDate.setDate(actualDate.getDate() - 1);
		createTableDay();
		colorCell();
		break;
	}
	case "w": {
		actualDate.setDate(actualDate.getDate() - 7);
		createTableWeek();
		colorCell();
		break;
	}
	case "m": {
		actualDate.setMonth(actualDate.getMonth() - 1);
		createTableMonth();
		colorCell();
		break;
	}
	case "y": {
		actualDate.setFullYear(actualDate.getFullYear() - 1);
		createTableYear();
		colorCell();
		break;
	}
	default: {
		actualDate.setMonth(actualDate.getMonth() - 1);
		createTableMonth();
		colorCell();
		break;
	}

	}
}

function colorCell() {

	var elements = document.getElementsByTagName("td");

	for (var i = 0; i < elements.length; i++) {

		if (findAnEvent(elements[i].getAttribute("data-eventinfo"))) {
			elements[i].className += "hasEvent";
		}
	}
	cacheDate = "";
}
