/**
 * Created by John Smith on 16.10.2016.
 */
/**************** Global Vars *****************/

var eventList = new Array();
var index = 0;

var actualDate = new Date();
var changingDate = new Date();
var dateForEvents = new Date();
var cellTableNumber = 42;

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday', 'Sunday'];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

var cacheDate;

/***************** Utility functions ***********************/

function setBackground(month) {
    if (month < 2) {
    	startSnow();
        document.getElementById("content").className = "winter";
    } else if (month < 5) {
    	stopSnow();
        document.getElementById("content").className = "spring";
    } else if (month < 8) {
    	stopSnow();
        document.getElementById("content").className = "summer";
    } else if (month < 11) {
    	stopSnow();
        document.getElementById("content").className = "autumn";
    } else if (month == 11) {
    	
    	
        document.getElementById("content").className = "winter";
        startSnow();
    }
}

function formatDateToLocale(date) {
    date.setHours(date.getHours() - (date.getTimezoneOffset() / 60));
    return date;
}

function dayOfWeekMondayFirst(date) {
    return ((date.getDay() + 6) % 7);
}

function daysInLastMonth(month, year) {

    return (new Date(year, month, 0)).getDate();
}

function dayOfTheYear(date) {

    var startDate = new Date(date.getFullYear(), 0, 0);
    var difference = date - startDate;
    var oneDay = 1000 * 60 * 60 * 24;

    var day = Math.floor(difference/oneDay);

    return day;
}

function getWeekOfTheYear(date){

    var weekNumber = Math.floor(dayOfTheYear(date)/7);
    var dayOfWeek = dayOfWeekMondayFirst(date);
    var mondayDayOFWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek);

    return {weekNumber: weekNumber, date: mondayDayOFWeek};
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

function createHeaderMonthYear(date) {

    var headerTable = document.createElement("h3");
    var text = document.createTextNode(months[date.getMonth()] + "   " + date.getFullYear());

    headerTable.appendChild(text);

    return headerTable;
}

function TableHeaderWithDaysNames() {

    var rowHeader = document.createElement("tr");

    for (var i = 0; i < days.length; i++) {

        var headerCell = document.createElement("th");
        var contentCell = document.createElement("h3");
        var textCell = document.createTextNode(days[i]);

        contentCell.appendChild(textCell);
        headerCell.appendChild(contentCell);
        rowHeader.appendChild(headerCell);
    }
    return rowHeader;
}

function resetDisplayForMonth(date) {

    document.getElementsByTagName("aside")[0].style.display = "block";
    document.getElementById("table").style.width = "61%";

    var headerTable = document.createElement("h3");
    var text = document.createTextNode(months[date.getMonth()] + "   " + date.getFullYear());

    headerTable.appendChild(text);
    document.getElementById("tableHeader").innerHTML = "";
    document.getElementById("tableHeader").appendChild(createHeaderMonthYear(date));
}
