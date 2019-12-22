$('.hamburger').click(function(){
  $('.menu').toggleClass('hidden');
});

$('.hamburger').on('keydown', function(event) {
  let code = event.keyCode;
  if(code === 13) {
    $('.menu').toggleClass('hidden');
  }
});

$('.close').on('keydown', function(event) {
  let code = event.keyCode;
  if(code === 13) {
    $('.menu').toggleClass('hidden');
  }
});


$('.close').click(function(){
  $('.menu').toggleClass('hidden');
});

$('.links').click(function() {
  $('.menu').toggleClass('hidden');
});

$('.workScroll').click(function() {
  $('html,body').animate({
    scrollTop: $('#Work').offset().top},
  'slow');
});

$('.menuPage').click(function() {
  $('html,body').animate({
    scrollTop: $('#Work').offset().top},
  'slow');
});

$('.contactScroll').click(function() {
  $('html,body').animate({
    scrollTop: $('#contact').offset().top},
  'slow');
});

