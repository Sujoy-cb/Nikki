$(".bar").click(function(){
    $(".menu").fadeToggle()
})
$(".bar").click(function(){
    $(".circle").fadeToggle()
})
$(".bar").click(function(){
    $(".circle2").fadeToggle()
})


$(".bar2").click(function(){
    $(".menu").fadeToggle()
})
$(".bar2").click(function(){
    $(".circle").fadeToggle()
})
$(".bar2").click(function(){
    $(".circle2").fadeToggle()
})


$('.venobox').venobox();



$('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  });


  $('.img-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    
  });