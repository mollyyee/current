$(document).ready( function() {
    $("#navbar").hide(); //hide your div initially
    var topOfOthDiv = $("#product").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#navbar").show(200); //reached the desired point -- show div
        }
    });

	$(".aboutintrofont").delay(300).animate({opacity: '1' }, 1200);



});





