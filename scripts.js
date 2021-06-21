function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('.p1').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
  $('.p2').css({
		'background-position' : '50% ' + (-scrollPos/8)+"px"
	});
  $('.p3').css({
		'background-position' : '70% ' + (-scrollPos/16)+"px"
	});
	$('.parallax-text').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/230)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
  
  var oldSize = parseFloat($(".row h1").css('font-size'));
  var newSize = oldSize * 1.2;
  $(".row h1").hover(
    function() {
     $(this).animate({ fontSize: newSize}, 200);
    },
    function() {
    $(this).animate({ fontSize: oldSize}, 200);
   }
 );
});