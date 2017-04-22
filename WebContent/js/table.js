function changeTableFormat(type, functionForFill){

	actualDate = new Date();
	functionForFill();
	colorCell();
	tableState = type;	
}

function changeTableNext(event) {

	var type = event.getAttribute("class");
	switch (tableState) {
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
