
function calculate(){
   var calculationamount=0
  $( ".amount" ).each(function( index ){
    console.log( index + ": " + $( this ).text() );
    calculationamount=calculationamount+parseInt($( this ).text())
    $(".Result").html(calculationamount)
  });
  console.log("calculationamount",calculationamount)
}
console.log("Hallo Welt");
console.log(document.title);
var d = new Date();
console.log(d);
$.get( "/api/data",function( data ) { $( ".part3" ).replaceWith( data );

    console.log( "Data Loaded: "+ data );calculate()
  } );

$(".action").submit((event) => {
  event.preventDefault();
  console.log(event);
  var array = $(".action").serializeArray();
  console.log(array) 
  var info = { description: "Bezeichnung", amount: "Betrag", category: "Kategorie", date: "Datum" } 
 info.description = "test"
  $.each(array, function(index,element) {
    if(element.name =="Kategorie"){
      console.log("element name=Kategorie") 
      info.category=element.value
    }
    if(element.name =="Betrag"){
      console.log("element name=Betrag") 
      info.amount=element.value
    }
    if(element.name =="Bezeichnung"){
      console.log("element name=Bezeichnung") 
      info.description=element.value
    }
    if(element.name =="Datum"){
      console.log("element name=Datum") 
      info.date=element.value
    }
    console.log(element.name)
  })
  console.log(info)
 $.post(
  "/api/data",
 info,
  function(response) {
     $( ".entries" ).replaceWith(response )
    console.log("ERFOLG!");
    console.log(response);
  }
 
);

  // TODO: Alle Werte aus den Eingabefeldern per console.log einzeln ausgeben
})
var array = [];
array.push("Kategorie","Bezeichnung","Betrag","Datum");
console.log(array.length); // 3

alert("Achtung,diese Internetseite enthält ein sehr gefährliches Virus der beim betreten dieser Seite die BVB/Nektons Server hackt und eliminiert");


