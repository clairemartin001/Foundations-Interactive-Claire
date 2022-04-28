$('#eli').draggable();

$('#dancefloor').droppable({
	drop: function(){
		$('#eli').addClass('dancingeli')
	} 
});

$('.fakebackground').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });

$('.intro').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });


var audio = $("#music")[0]; 
		$(".medancing").click(function() {
		  audio.play();
		});




