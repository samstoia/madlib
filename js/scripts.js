$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Name = $("input#person1").val();
    var person2Name = $("input#person2").val();
    var animalName = $("input#animal").val();
    var exclamationName = $("input#exclamation").val();
    var verbName = $("input#verb").val();
    var nounName = $("input#noun").val();

    $(".person1").text(person1Name);
    $(".person2").text(person2Name);
    $(".animal").text(animalName);
    $(".exclamation").text(exclamationName);
    $(".verb").text(verbName);
    $(".noun").text(nounName);

    $("#story").show();

    event.preventDefault();
  });
});
