$(document).ready(function () {
    var count = 1;
    var bgPath;
    var place;
    $("#arrowUp").on("click", function () {
        count = count + 1;
        if (count == 1) {
            bgPath = "url(../images/hk.jpg)";
            place = "Hong Kong";
        } else if (count == 2) {
            bgPath = "url(images/japan.jpg)";
            place = "Tokyo, JPN";
        } else if (count == 3) {
            bgPath = "url(images/sf.jpg)";
            place = "San Francisco, usa";
        } else if (count == 4) {
            bgPath = "url(images/shanghai.jpg)";
            place = "shanghai, chn";
        } else if (count == 5) {
            bgPath = "url(images/vancouver.jpg)";
            place = "Vancouver, can";
        } else if (count == 6) {
            bgPath = "url(images/beijing.jpg)";
            place = "Beijing, chn";
        } else if (count == 7) {
            bgPath = "url(images/Taipei.jpg)";
            place = "Taipei, twn";
        } else if (count == 8) {
            bgPath = "url(images/Korea.jpg)";
            place = "Soeul, kor";
        } else if (count == 9) {
            bgPath = "url(images/London.jpg)";
            place = "London, GBR";
        } else if (count == 10) {
            bgPath = "url(images/Munich.jpg)";
            place = "Munich, deu";
        } else if (count == 11) {
            bgPath = "url(images/phuket.jpg)";
            place = "Phuket, tha";
        } else if (count == 12) {
            bgPath = "url(images/ny.jpg)";
            place = "New York, usa";
        } else if (count == 13) {
            bgPath = "url(images/rome.jpg)";
            place = "Rome, ita";
        } else if (count == 14) {
            bgPath = "url(images/salzburg.jpg)";
            place = "Salzburg, aut";
        } else if (count == 15) {
            bgPath = "url(images/jakarta.jpg)";
            place = "Jakarta, idn";
        } else if (count == 16) {
            bgPath = "url(images/Barcelona.jpg)";
            place = "Barcelona, spa";
        }  else {
            count = 1;
            bgPath = "url(../images/hk.jpg)";
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
            bgPath = "url(images/hk.jpg)";
            place = "Hong Kong";
        } else if (count == 2) {
            bgPath = "url(images/japan.jpg)";
            place = "Tokyo, JPN";
        } else if (count == 3) {
            bgPath = "url(images/sf.jpg)";
            place = "San Francisco, usa";
        } else if (count == 4) {
            bgPath = "url(images/shanghai.jpg)";
            place = "shanghai, chn";
        } else if (count == 5) {
            bgPath = "url(images/vancouver.jpg)";
            place = "Vancouver, can";
        } else if (count == 6) {
            bgPath = "url(images/beijing.jpg)";
            place = "Beijing, chn";
        } else if (count == 7) {
            bgPath = "url(images/Taipei.jpg)";
            place = "Taipei, twn";
        } else if (count == 8) {
            bgPath = "url(images/Korea.jpg)";
            place = "Soeul, kor";
        } else if (count == 9) {
            bgPath = "url(images/London.jpg)";
            place = "London, GBR";
        } else if (count == 10) {
            bgPath = "url(images/Munich.jpg)";
            place = "Munich, deu";
        } else if (count == 11) {
            bgPath = "url(images/phuket.jpg)";
            place = "Phuket, tha";
        } else if (count == 12) {
            bgPath = "url(images/ny.jpg)";
            place = "New York, usa";
        } else if (count == 13) {
            bgPath = "url(images/rome.jpg)";
            place = "Rome, ita";
        } else if (count == 14) {
            bgPath = "url(images/salzburg.jpg)";
            place = "Salzburg, aut";
        } else if (count == 15) {
            bgPath = "url(images/jakarta.jpg)";
            place = "Jakarta, idn";
        } else if (count == 16) {
            bgPath = "url(images/Barcelona.jpg)";
            place = "Barcelona, spa";
        } else {
            count = 16;
            bgPath = "url(images/Barcelona.jpg)";
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