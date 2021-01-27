$version = "2.0";

var i = 0;
var txt = "Hi, I'm Alex, a translator and web developer.";
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();