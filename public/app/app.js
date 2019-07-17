console.log("Hallo Welt");
console.log(document.title);
var d = new Date();
console.log(d);
$.get( "/api/data",function( data ) { $( ".part3" ).replaceWith( data );

    console.log( "Data Loaded: "+ data );
  } );

