$(function() {
    console.log( "Let's get ready to aprty with jQuery" );
});

$('article img').addClass('image-center');

$('article p').last().remove();

// const ranNum = Math.floor(Math.random() * 100) + 1;
// $('h1').css('font-size', ranNum)
//or
$("#title").css('font-size', Math.random() * 100)

$("ol").append('<li>OII</li>');

$("ol").replaceWith('<p>Sorry, that list was dumb</p>')

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
});

$("img").on('click', function() {
    $(this).remove();
});