/**
 * Created by John Smith on 16.10.2016.
 */

function createTableWeekContent(weekOfYear) {

    var weekNr = weekOfYear.weekNumber;
    var weekStart = weekOfYear.date;

    var weekDate = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate());

    resetDisplayForMonth(weekDate);

    var rowOfDays = document.createElement("tr");

    for (var i = 0; i < 7; i++) {

        var dataTable = document.createElement("td");
        var day = document.createElement("table");
        day.setAttribute("class", "tableWeek");
        day.appendChild(createTableDayContent(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + i));

        dataTable.appendChild(day);
        rowOfDays.appendChild(dataTable);
    }
    return rowOfDays;
}

function TableHeaderWithDaysNamesWeek(weekOfYear) {

    var weekNr = weekOfYear.weekNumber;
    var date = weekOfYear.date;

    var content = document.createElement("tr");

    for (var i = 0; i < days.length; i++) {

        var tableHeader = document.createElement("th");
        var textContent = document.createElement("h3");
        textContent.setAttribute("class", "textSizeWeek");
        var text = document.createTextNode(days[dayOfWeekMondayFirst(date)] + " " + date.toString().slice(4, 15).replace(/T/g, " "));

        textContent.appendChild(text);
        tableHeader.appendChild(textContent);
        content.appendChild(tableHeader);
        date.setDate(date.getDate() + 1);
    }
    return content;
}

function createTableWeek() {

    document.getElementById("headerTable").innerHTML = "";
    document.getElementById("headerTable").appendChild(TableHeaderWithDaysNamesWeek(getWeekOfTheYear(actualDate)));

    document.getElementById("contentTable").innerHTML = "";
    document.getElementById("contentTable").appendChild(createTableWeekContent(getWeekOfTheYear(actualDate)));
}