$(document).ready(function () {
    var count = 1;
    var bgPath;
    var place;
    $("#arrowUp").on("click", function () {
        count = count + 1;
        if (count == 1) {
            bgPath = "url(images/places/hk.jpg)";
            place = "Hong Kong";
        } else if (count == 2) {
            bgPath = "url(images/places/tokyo.jpg)";
            place = "Tokyo, JPN";
        } else if (count == 3) {
            bgPath = "url(images/places/sf.jpg)";
            place = "San Francisco, usa";
        } else if (count == 4) {
            bgPath = "url(images/places/shanghai.jpg)";
            place = "shanghai, chn";
        } else if (count == 5) {
            bgPath = "url(images/places/vancouver.jpg)";
            place = "Vancouver, can";
        } else if (count == 6) {
            bgPath = "url(images/places/beijing.jpg)";
            place = "Beijing, chn";
        } else if (count == 7) {
            bgPath = "url(images/places/taipei.jpg)";
            place = "Taipei, twn";
        } else if (count == 8) {
            bgPath = "url(images/places/seoul.jpg)";
            place = "Seoul, kor";
        } else if (count == 9) {
            bgPath = "url(images/places/london.jpg)";
            place = "London, GBR";
        } else if (count == 10) {
            bgPath = "url(images/places/munich.jpg)";
            place = "Munich, deu";
        } else if (count == 11) {
            bgPath = "url(images/places/phuket.jpg)";
            place = "Phuket, tha";
        } else if (count == 12) {
            bgPath = "url(images/places/ny.jpg)";
            place = "New York, usa";
        } else if (count == 13) {
            bgPath = "url(images/places/rome.jpg)";
            place = "Rome, ita";
        } else if (count == 14) {
            bgPath = "url(images/places/salzburg.jpg)";
            place = "Salzburg, aut";
        } else if (count == 15) {
            bgPath = "url(images/places/kualalumpur.jpg)";
            place = "Kuala Lumpur, mas";
        } else if (count == 16) {
            bgPath = "url(images/places/barcelona.jpg)";
            place = "Barcelona, spa";
        } else {
            count = 1;
            bgPath = "url(images/places/hk.jpg)";
            place = "Hong Kong";
        }
        $("#bgLocation").fadeTo(300, 0, function () {
            $("#bgLocation").html(place);
            $("#home").fadeTo(100, 0, function () {
                $(this).css("background-image", bgPath);
                $(this).fadeTo(300, 1, function () {
                    $("#bgLocation").fadeTo(300, 1);
                });
            });
        });
    });
    $("#arrowDown").on("click", function () {
        count = count - 1;
        if (count == 1) {
            bgPath = "url(images/places/hk.jpg)";
            place = "Hong Kong";
        } else if (count == 2) {
            bgPath = "url(images/places/tokyo.jpg)";
            place = "Tokyo, JPN";
        } else if (count == 3) {
            bgPath = "url(images/places/sf.jpg)";
            place = "San Francisco, usa";
        } else if (count == 4) {
            bgPath = "url(images/places/shanghai.jpg)";
            place = "shanghai, chn";
        } else if (count == 5) {
            bgPath = "url(images/places/vancouver.jpg)";
            place = "Vancouver, can";
        } else if (count == 6) {
            bgPath = "url(images/places/beijing.jpg)";
            place = "Beijing, chn";
        } else if (count == 7) {
            bgPath = "url(images/places/taipei.jpg)";
            place = "Taipei, twn";
        } else if (count == 8) {
            bgPath = "url(images/places/seoul.jpg)";
            place = "Seoul, kor";
        } else if (count == 9) {
            bgPath = "url(images/places/london.jpg)";
            place = "London, GBR";
        } else if (count == 10) {
            bgPath = "url(images/places/munich.jpg)";
            place = "Munich, deu";
        } else if (count == 11) {
            bgPath = "url(images/places/phuket.jpg)";
            place = "Phuket, tha";
        } else if (count == 12) {
            bgPath = "url(images/places/ny.jpg)";
            place = "New York, usa";
        } else if (count == 13) {
            bgPath = "url(images/places/rome.jpg)";
            place = "Rome, ita";
        } else if (count == 14) {
            bgPath = "url(images/places/salzburg.jpg)";
            place = "Salzburg, aut";
        } else if (count == 15) {
            bgPath = "url(images/places/kualalumpur.jpg)";
            place = "Kuala Lumpur, mas";
        } else if (count == 16) {
            bgPath = "url(images/places/barcelona.jpg)";
            place = "Barcelona, spa";
        } else {
            count = 16;
            bgPath = "url(images/places/barcelona.jpg)";
            place = "Barcelona, spa";
        }
        $("#bgLocation").fadeTo(300, 0, function () {
            $("#bgLocation").html(place);
            $("#home").fadeTo(100, 0, function () {
                $(this).css("background-image", bgPath);
                $(this).fadeTo(300, 1, function () {
                    $("#bgLocation").fadeTo(300, 1);
                });
            });
        });
    });
});