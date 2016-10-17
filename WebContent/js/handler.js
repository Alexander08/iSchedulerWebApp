/**
 * Created by John Smith on 16.10.2016.
 */

function addEditEvent(event) {

    var date = event.getAttribute("data-eventInfo");
    var d = new Date(date.slice(0, 10));
    d.setDate(d.getDate() + 1);
    date = d.toISOString().slice(0,19);
    cacheDate = date;
    document.getElementById('eventContiner').style.display='none';
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    document.eventwindow.startDate.value = date;
    document.eventwindow.endDate.value = date;
    document.eventwindow.reminderDate.value = date;

    span.onclick = function() {
        modal.style.display = "none";
        event.className.replace(" hasEvent", "");
        event.className = "";
        return;
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            event.className = "";
            return;
        }
    };
    event.className += " hasEvent";
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
    changeTab("contentToday");
}



/** **************************aside script******************************** */

function changeTab(tabName) {

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
}

function showEdit(){

    var date = new Date(cacheDate);
    var continer = document.getElementById("eventContiner");
    continer.innerHTML = "";
    continer.style.display = "block";
    for (var i = 0; i < eventList.length; i++) {

        if (compareDate(new Date(eventList[i].startDate), date)) {
            var e = document.createElement("p");
            e.innerHTML = eventList[i].printEvent();
            e.setAttribute("class", "eventInList");
            e.setAttribute("data-indexInList", i);
            e.setAttribute("onclick", "deleteEvent(this)");

            continer.appendChild(e);
        }
    }
}