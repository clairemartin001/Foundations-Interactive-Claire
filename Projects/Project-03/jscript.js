$('#nocoffee').draggable();

$('#coffeemachine').droppable({
	drop: function(){
        accept:'#nocoffee';
		$('#nocoffee').addClass('coffeecup');
	}
});


$( "#coffeemachine" ).droppable( "option", "accept", "#nocoffee" );


$('#croissant').draggable();

$('#me').droppable({
	drop: function(){
        accept:'#croissant';
		$('#croissant').addClass('crumbs');
	}
});

$( "#me" ).droppable( "option", "accept", "#croissant" );