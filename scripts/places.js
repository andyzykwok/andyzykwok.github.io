$(document).ready(function () {
    var count = 1;
    var place;
    $("button").click(function () {
        count = count + 1;
        if (count == 2) {
            place = "Bridge";
        }
        $("h6").animate({
            height: 0,
            opacity: 0
        }, 'slow', function () {
            
        });
    });
});