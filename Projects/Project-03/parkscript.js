$('.cooler').bind('click', function(e) { $(this).remove(); });

$('.beer1').draggable();


$('#boxslice').draggable();




$('#mechilling').droppable({
	drop: function(){
        accept:'.beer1';
        $('.beer1').addClass('crushedcan');
	}
});
$( "#mechilling" ).droppable( "option", "accept", ".beer1" );

$('#elipizza').droppable({
	drop: function(){
        accept:'#boxslice';
        $('#boxslice').remove('#boxslice');
	}
});
$( "#elipizza" ).droppable( "option", "accept", "#boxslice" );



