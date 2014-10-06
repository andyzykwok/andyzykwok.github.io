$(document).ready(function () {
    var userClick = false;
    $("#arrowUp").on("click", function (e) {
        userClick = true;
    });
    $("#arrowDown").on("click", function (e) {
        userClick = true;
    });
    setInterval(function () {
        if (userClick == false) {
            $("#arrowUp").click();
        } else {
            userClick = false;
        }
    }, 7500);
});