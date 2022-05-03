  $( function() {
    $( "#apples" ).draggable();
  } );


$('#oven').droppable({
	drop: function(){
        accept:'#kitchen';    
        $('#apples').remove('#apples');
	}
});