$(document).ready(function() {

    // $('li').hover(function(){

    // });
    // 
    $('.starReview li').hover(function(){
    	var c = $(this).attr('class');
    	c = parseInt(c.replace("-star",""));
    	for (var i = c - 1; i > 0; i--) {
    		$(this).siblings('.'+i+'-star').addClass('hovered');
    	}
    },clearHovered);

    $('.starReview li').click(function(){
    	$('.selected').removeClass('selected');
    	$('.selectedSibling').removeClass('selectedSibling');
    	$(this).addClass('selected');
    	var c = $(this).attr('class');
    	c = parseInt(c.replace("-star",""));
    	$('#starReview').val(c);
    	for (var i = c - 1; i > 0; i--) {
    		$(this).siblings('.'+i+'-star').addClass('selectedSibling');
    	}
    });

    function clearHovered(){
    	$('.hovered').removeClass('hovered');
    }
});