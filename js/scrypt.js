$(document).ready(function(){
	$('.home-section__menu__hamburger').on('click',  function(e){
		e.preventDefault();
		$('.nav').toggleClass('disable');
		});
	});