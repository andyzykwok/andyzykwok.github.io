$(document).ready(function () {
    $(window).scroll(function () {
        var schoolTop = $("#school").offset().top;
        var schoolBottom = schoolTop + $("#school").height();
        var activeSchoolTop = schoolTop - $(window).height() / 3;
        var activeSchoolBottom = schoolBottom - $(window).height() / 2;
        if (($(this).scrollTop() > activeSchoolTop) && ($(this).scrollTop() < activeSchoolBottom)) {
            $("#navSchool").addClass("active");
        } else {
            $("#navSchool").removeClass("active");
        }
        var activeExpTop = activeSchoolBottom;
        var activeExpBottom = activeExpTop + $("#experience").height();
        if (($(this).scrollTop() > activeExpTop) && ($(this).scrollTop() < activeExpBottom)) {
            $("#navExperience").addClass("active");
        } else {
            $("#navExperience").removeClass("active");
        }
        var activeResumeTop = activeExpBottom;
        var activeResumeBottom = activeResumeTop + $("#resume").height() / 1.35;
        if (($(this).scrollTop() > activeResumeTop) && ($(this).scrollTop() < activeResumeBottom)) {
            $("#navResume").addClass("active");
        } else {
            $("#navResume").removeClass("active");
        }
        var activeContactTop = activeResumeBottom;
        if ($(this).scrollTop() > activeContactTop - 50) {
            $("#navContact").addClass("active");
            $("#navResume").removeClass("active");
        } else {
            $("#navContact").removeClass("active");
        }
    });
});