function shiftAnswer() {
  var correct = document.getElementById("shift").value.toLowerCase();
  if (correct === "blue") {
    document.getElementById("reply").innerHTML = "That's Right!  As the light source moves closer to the observer, the wavelength is compressed resulting in that blue shift!  Conversely, if the source was moving away from the observer, the wavelength would seem elongated, and a shift to the red would be observed.  Keep in mind, the wavelength at the source doesn't actually change!";
  } else {
    document.getElementById("reply").innerHTML = "Try again.";

  }
}