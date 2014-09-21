$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $("#homeContent").height() + $("#spacer").height()) {
            $("nav").addClass("navScrolled");
            $("#spacer").addClass("spacerScrolled");
        } else {

            $("nav").removeClass("navScrolled");
            $("#spacer").removeClass("spacerScrolled");
        }
    });
});