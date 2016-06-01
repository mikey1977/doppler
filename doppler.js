function shiftAnswer() {
  var correct = document.getElementById("shift").value.toLowerCase();
  if (correct === "blue") {
    document.getElementById("reply").innerHTML = "That's Right!  Of course, the wavelength at the source doesn't change!";
  } else {
    document.getElementById("reply").innerHTML = "Try again.";

  }
}