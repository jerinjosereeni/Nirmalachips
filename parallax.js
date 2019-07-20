$(document).ready(function(){
  var previousScroll = 0;
  var d = 0;
	var s = 0;

  // parallax script
  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
      if (currentScroll > previousScroll){
          d = (s - .5);
        $('.parallax').css('background-position-y',d);
      } else {
          d = (s + .5);
        $('.parallax').css('background-position-y',d);
      }
      previousScroll = currentScroll;
      s = d;
  });
});