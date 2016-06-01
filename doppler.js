

function shiftAnswer() {
  var correct = document.getElementById("shift").value.toLowerCase();
  if (correct === "blue") {
    document.getElementById("reply").innerHTML = "That's Right!  As the light source moves closer to the observer, <br>\
    the wavelength is compressed resulting in that blue shift!  <br>\
    Conversely, if the source is moving away from the observer, <br>\
    the wavelength would seem elongated, and a shift to the red would be observed.  <br>\
    Keep in mind, the wavelength at the source doesn't actually change!";
    document.getElementById("readOutsActive").style.display = "block";
    document.getElementById("redDoppler").style.display = "block";
    document.getElementById("right").style.display = "block";
    document.getElementById("answer").innerHTML= "BLUE";
    document.getElementById("answer").style.color = "BLUE";
    document.getElementById("redInput").style.display = "none";
  } else {
    document.getElementById("reply").innerHTML = "Try again.";

  }
}

$(document).ready(function() {
  $("#next").click(function() {
    $("#intro").hide();
    $("#red").css("display", "block");
  });
  $("#last").click(function() {
    $("#red").hide();
    $("#final").show();
  });
});