// JavaScript File
var oneplus = document.getElementById("oneRidePlus");
var oneminus = document.getElementById("oneRideMinus");
document.getElementById("onerideamount").value = "Amount: 0";
document.getElementById("oneRideCost").value = "$0.00";

document.getElementById("oneDayAmount").value = "Amount: 0";
document.getElementById("oneDayCost").value = "$0.00";

document.getElementById("7DayAmount").value = "Amount: 0";
document.getElementById("7DayCost").value = "$0.00";

var i = 0;
$(oneplus).on("click", function() {
    i++;
    var amount = document.getElementById("onerideamount");
    amount.value = "Amount: " + i;
    var one = 5.00;
    var cost = document.getElementById("oneRideCost");
    var total = one * i;
    document.getElementById("oneRideCost").value = "$" + total.toFixed(2);
});

$(oneminus).on("click", function() {
    if (i > 0)
        i--;
    else
        i = 0;
    var amount = document.getElementById("onerideamount");
    amount.value = "Amount: " + i;
    var one = 5.00;
    var cost = document.getElementById("oneRideCost");
    var total = one * i;
    document.getElementById("oneRideCost").value = "$" + total.toFixed(2);
});

var dayplus = document.getElementById("oneDayPlus");
var dayminus = document.getElementById("oneDayMinus");
var dayticket = 0;

$(dayplus).on("click", function() {
    dayticket++;
    var amount = document.getElementById("oneDayAmount");
    amount.value = "Amount: " + dayticket;
    var one = 7.00;
    var cost = document.getElementById("oneDayCost");
    var total = one * dayticket;
    document.getElementById("oneDayCost").value = "$" + total.toFixed(2);
});

$(dayminus).on("click", function() {
    if (dayticket > 0)
        dayticket--;
    else
        dayticket = 0;
    var amount = document.getElementById("oneDayAmount");
    amount.value = "Amount: " + dayticket;
    var one = 7.00;
    var cost = document.getElementById("oneDayCost");
    var total = one * dayticket;
    document.getElementById("oneDayCost").value = "$" + total.toFixed(2);
});

var weekplus = document.getElementById("7DayPlus");
var weekminus = document.getElementById("7DayMinus");
var weekticket = 0;

$(weekplus).on("click", function() {
    weekticket++;
    var amount = document.getElementById("7DayAmount");
    amount.value = "Amount: " + weekticket;
    var one = 49.00;
    var cost = document.getElementById("7DayCost");
    var total = one * weekticket;
    document.getElementById("7DayCost").value = "$" + total.toFixed(2);
});

$(dayminus).on("click", function() {
    if (weekticket > 0)
        weekticket--;
    else
        weekticket = 0;
    var amount = document.getElementById("7DayAmount");
    amount.value = "Amount: " + weekticket;
    var one = 49.00;
    var cost = document.getElementById("7DayCost");
    var total = one * weekticket;
    document.getElementById("7DayCost").value = "$" + total.toFixed(2);
});
