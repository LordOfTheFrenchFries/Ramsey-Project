document.getElementById("Farm").onmouseover = function() {mouseOverFarm()};
document.getElementById("Farm").onmouseout = function() {mouseOutFarm()};

document.getElementById("Cow").onmouseover = function() {mouseOverCow()};
document.getElementById("Cow").onmouseout = function() {mouseOutCow()};

const header = document.getElementById("hoverTextHeader");
const text = document.getElementById("hoverTextCaption");

function mouseOverFarm() {
  header.innerHTML = "Farming:";
}

function mouseOutFarm() {
  header.innerHTML = "Hover Over Something";
}

function mouseOverCow() {
  header.innerHTML = "Ranching:";
}

function mouseOutCow() {
  header.innerHTML = "Hover Over Something";
}
