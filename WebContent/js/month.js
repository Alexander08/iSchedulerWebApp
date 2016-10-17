/**
 * Created by John Smith on 16.10.2016.
 */

function newRowInTable(i, content, tableRow) {

    if (i % 7 == 0) {
        content.appendChild(tableRow);
        tableRow = document.createElement("tr");
    }
    return {tableRow: tableRow, content: content};
}

function createTableData(date, tableRow, month) {

    var tableData = document.createElement("td");

    tableData.setAttribute("onclick", "showWhenClick(this)");
    tableData.setAttribute("ondblclick", "addEditEvent(this)");
    tableData.setAttribute("onmouseover", "showWhenHover(this)");

    tableData.setAttribute("data-eventInfo", date.toISOString().slice(0, 19));

    var text = document.createTextNode(date.getDate());

    var cellContent = document.createElement("p");
    cellContent.appendChild(text);

    month != date.getMonth() ? cellContent.setAttribute("class", "lmonth") : 0;

    tableData.appendChild(cellContent);
    tableRow.appendChild(tableData);

    date.setDate(date.getDate() + 1);

    return tableRow;
}

function createTableMonthContent(month, year) {

    changingDate = new Date(year, month, 1);

    resetDisplayForMonth(changingDate);

    var startDayNumberForFirstRow = daysInLastMonth(month, year) - dayOfWeekMondayFirst(changingDate) + 1;

    var lastMonth = new Date(year, month - 1, startDayNumberForFirstRow);

    var content = document.createElement("tbody");
    var tableRow = document.createElement("tr");

    for (var i = 0; i <= cellTableNumber; i++) {

        var dayOfWeek = dayOfWeekMondayFirst(changingDate);

        if (i < dayOfWeek + 1) {
            for (var j = 0; j < dayOfWeek; j++) {

                tableRow = createTableData(lastMonth, tableRow, month);
                i++;
                var result = newRowInTable(i, content, tableRow);
                content = result.content;
                tableRow = result.tableRow;
            }
        } else {
            tableRow = createTableData(changingDate, tableRow, month);

            var result = newRowInTable(i, content, tableRow);
            content = result.content;
            tableRow = result.tableRow;
        }
    }
    return content;
}

function createTableMonth() {

    setBackground(actualDate.getMonth());

    document.getElementById("contentTable").innerHTML = createTableMonthContent(
        actualDate.getMonth(), actualDate.getFullYear()).innerHTML;
    document.getElementById("headerTable").innerHTML = "";
    document.getElementById("headerTable").appendChild(TableHeaderWithDaysNames());

}