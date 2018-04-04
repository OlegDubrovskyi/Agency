var counter = 0;
function traverseUp(el){
		          var result = $(el).index()
		      return result;
		  };

$(document).ready(function(){
	$('.home-section__menu__hamburger').on('click',  function(e){
		e.preventDefault();
		$('.nav').toggleClass('active');
		});
	$('.pagination').on('click',  function(e){
		$('.bg-slider .pagination:nth-child(' + counter +')').removeClass('pagination-active');
		e.stopPropagation();
  		var elem = e.target;
		counter = traverseUp(elem)+1;
		console.log('counter ' + counter);
		$('.bg-slider .pagination:nth-child(' + counter +')').addClass('pagination-active');
		});
	$('.pagination').on('click',  function(e){
		$('.home-section').removeClass('bg-img-0 bg-img-1 bg-img-2');
		e.preventDefault();
		counter = counter-1;
		$('.home-section').addClass('bg-img-'+counter);
		counter = counter+1;
		});	
	});	
	
	

