/**
 * Created by John Smith on 16.10.2016.
 */

function createTableDayContent(year, month, day) {

    changingDate = new Date(year, month, day);

 //   resetDisplayForMonth(changingDate);
    var content = document.createElement("tbody");
    var rowTable = document.createElement("tr");

    for (var i = 0; i < 24; i++) {

        var dataTable = document.createElement("td");
        dataTable.setAttribute("onclick", "");
        dataTable.setAttribute("ondblclick", "");
        dataTable.setAttribute("onmouseover", "");

        dataTable.setAttribute("data-eventInfo", changingDate.toISOString().slice(0, 19));

        var dataContent = document.createElement("p");
        dataContent.setAttribute("class", "textSizeWeek");
        var dataText = document.createTextNode(changingDate.toString().slice(16, 24));

        changingDate.setHours(changingDate.getHours() + 1);

        dataText.appendData(" - " + changingDate.toString().slice(16, 24));

        dataContent.appendChild(dataText);
        dataTable.appendChild(dataContent);
        rowTable.appendChild(dataTable);
        content.appendChild(rowTable);
        rowTable = document.createElement("tr");
    }

    return content;
}

function createTableDayHeader(date) {

    var content = document.createElement("tr");
    var tableHeader = document.createElement("th");
    var textContent = document.createElement("h3");

    var text = document.createTextNode(days[dayOfWeekMondayFirst(date)] + " " + date.toISOString().slice(0, 10).replace(/T/g, " "));
    textContent.appendChild(text);
    tableHeader.appendChild(textContent);
    content.appendChild(tableHeader);

    return content;
}

function createTableDay() {

    setBackground(actualDate.getMonth());

    document.getElementById("headerTable").innerHTML = "";
    document.getElementById("headerTable").appendChild(createTableDayHeader(actualDate));



    document.getElementById("contentTable").innerHTML = "";
    document.getElementById("contentTable").innerHTML = createTableDayContent(actualDate
        .getFullYear(), actualDate.getMonth(), actualDate.getDay()).innerHTML;

    document.getElementById("tableHeader").innerHTML = "";
    document.getElementById("tableHeader").appendChild(createHeaderMonthYear(actualDate));
}