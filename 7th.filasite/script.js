$(function() {

    var currentSlide = 0;
    var slideWidth = 1920;
    var totalSlides = 5;
    var interval = 2000;
    var animationSpeed = 1000;

    function slide() {
        var nextSlide = (currentSlide + 1) % totalSlides;

        $(".slide ul").animate({left: -nextSlide * slideWidth}, animationSpeed, function() {
            currentSlide = nextSlide;
        });
    }

    setInterval(slide, interval);

});

$(document).ready(function() {
    var pageWidth = 1920;

    $(".popular nav li:first").addClass("on");
    $(".goods-list:first").show();

    $(".popular nav li").click(function() {
        $(".popular nav li").removeClass("on");
        $(this).addClass("on");

        var tabIndex = $(this).index();
        $(".goods-list").hide();
        $(".goods-list").eq(tabIndex).show();

        var listWidth = $(".goods-list").width();
        var moveDistance = -tabIndex * listWidth;

        if ($(window).width() > pageWidth) {
            $(".goods-list").animate({ marginLeft: moveDistance }, 500);
        } else {

        }

        return false;
    });
});


