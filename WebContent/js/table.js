function changeTableToday() {

    actualDate = new Date();
    createTableDay();
}

function changeTableDay(){

    actualDate = new Date();
    createTableDay();
}

function changeTableWeek(){

    actualDate = new Date();
    createTableWeek();
}
function changeTableMonth() {

    actualDate = new Date();
    createTableMonth();
}

function changeTableYear() {

    actualDate = new Date();
    createTableYear();
}

function changeTableNext() {

    actualDate.setMonth(actualDate.getMonth() + 1);
    createTableMonth();
}
function changeTablePrev() {

    actualDate.setMonth(actualDate.getMonth() - 1);
    createTableMonth();
}




