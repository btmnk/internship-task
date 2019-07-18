console.log("Hallo Welt");
console.log(document.title);
var d = new Date();
console.log(d);
$.get( "/api/data",function( data ) { $( ".part3" ).replaceWith( data );

    console.log( "Data Loaded: "+ data );
  } );

$(".action").submit((event) => {
  event.preventDefault();
  console.log(event);
  var array = $(".action").serializeArray();
  console.log(array) 
  var info = { description: "Bezeichnung", amount: "Betrag", category: "Kategorie" } 
 info.description = "test"
  $.each(array, function(index,element) {
    if(element.name =="Kategorie"){
      console.log("element name=Kategorie") 
      info.category=element.value
    }
    console.log(element.name)
  })
  console.log(info)
  // TODO: Alle Werte aus den Eingabefeldern per console.log einzeln ausgeben
})
var array = [];
array.push("Kategorie","Bezeichnung","Betrag");
console.log(array.length); // 3
