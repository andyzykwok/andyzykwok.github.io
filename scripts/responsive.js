$(document).ready(function () {
    if ($(window).height() < 575) {
        $("#location").hide();
        $("#homeText").css("top", "65%");
    } else if ($(window).height() > 574) {
        $("#location").show();
        $("#homeText").css("top", "45%");
    }
    $(window).resize(function () {
        if ($(window).height() < 575) {
            $("#location").hide();
            $("#homeText").css("top", "65%");
        } else if ($(window).height() > 574) {
            $("#location").show();
            $("#homeText").css("top", "45%");
        }
    });
});