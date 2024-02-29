document.getElementById("basic").onmouseover = function() {mouseOverBasic()};
document.getElementById("basic").onmouseout = function() {mouseOutBasic()};

document.getElementById("indian").onmouseover = function() {mouseOverIndian()};
document.getElementById("indain").onmouseout = function() {mouseOutIndian()};

document.getElementById("US").onmouseover = function() {mouseOverUS()};
document.getElementById("US").onmouseout = function() {mouseOutUS()};

const text = document.getElementById("bodyText");

function mouseOverBasic() {
  text.innerHTML = "The Indian wars lasted roughly 100 years, taking place throughout the entirety of the United States. The United States wanted the Indians gone to allow settlers into land without having to make treaties, along with racist beliefs that the Indians were below them. Indian tribes were varied in their response to this: some attempted to make peace and treaties to save their land, while other tribes that were already war-oriented armed themselves for battle.";
}

function mouseOutBasic() {
  text.innerHTML = "";
}

function mouseOVerIndian() {
  text.innerHTML = "";
}
