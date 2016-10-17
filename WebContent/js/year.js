/**
 * Created by John Smith on 16.10.2016.
 */
function createTableYearContent(year) {

    var yearDate = new Date();
    yearDate.setFullYear(year, 0);

    document.getElementById("headerTable").innerHTML = "";

    var content = document.createElement("tbody");

    var rowOfMonths = document.createElement("tr");
    for (var i = 0; i < 12; i++) {

        if ((i != 0) && (i % 3 == 0)) {
            content.appendChild(rowOfMonths);
            rowOfMonths = document.createElement("tr");
        }
        yearDate.setMonth(i);

        var tableDataCell = document.createElement("td");
        tableDataCell.setAttribute("class", "monthYear");

        var monthNameContent = document.createElement("th");
        monthNameContent.setAttribute("colspan", "7");
        monthNameContent.appendChild(createHeaderMonthYear(yearDate));

        var monthName = document.createElement("tr");
        monthName.appendChild(monthNameContent);

        var tableHeader = document.createElement("thead");
        tableHeader.appendChild(monthName);
        tableHeader.appendChild(TableHeaderWithDaysNames());

        var table = document.createElement("table");
        table.setAttribute("class", "monthYear");
        table.appendChild(tableHeader);
        var tableBody = createTableMonthContent(yearDate.getMonth(), yearDate.getFullYear());
        table.appendChild(tableBody);

        tableDataCell.appendChild(table);
        rowOfMonths.appendChild(tableDataCell);
    }

    content.appendChild(rowOfMonths);
    return content;
}

function createTableYear(){

    document.getElementById("contentTable").innerHTML = createTableYearContent(actualDate.getFullYear()).innerHTML;
    var yearName = document.createElement("h3");
    yearName.appendChild(document.createTextNode(actualDate.getFullYear()));
    document.getElementById("tableHeader").innerHTML = "";
    document.getElementById("tableHeader").appendChild(yearName);

    document.getElementsByTagName("aside")[0].style.display = "none";
    document.getElementById("table").style.width = "95%";
}