document.getElementById("Farm").onmouseover = function() {mouseOverFarm()};
document.getElementById("Farm").onmouseout = function() {mouseOutFarm()};

document.getElementById("Cow").onmouseover = function() {mouseOverCow()};
document.getElementById("Cow").onmouseout = function() {mouseOutCow()};

const header = document.getElementById("hoverTextHeader");
const text = document.getElementById("hoverTextCaption");

function mouseOverFarm() {
  header.innerHTML = "Farming:";
  text.innerHTML = "Farming was extremely profitable during the gold rush. Most farmed wheat and grapes, the former for bread and the latter for wine. Most farmers didn't initally plan on farming: they began as gold miners, but eventually for one reason or another, they decided to switch to farming. Later on, because of how many farmers there were, the price of wheat declined and farmers had to sell their land to make money. This price decrease lead to more crops, like lemons and oranges, being grown, once again making the farming rich. Farming was a major part of both California's economy and population boom.";
}

function mouseOutFarm() {
  header.innerHTML = "Hover Over Something";
  text.innerHTML = "";
}

function mouseOverCow() {
  header.innerHTML = "Ranching:";
  text.innerHTML = "Ranchers got very rich during the gold rush, although not for very long. They sold beef to miners for huge cash, but a series of unfortunate events caused many to go bankrupt. A severe drought followed by increased competition from other, non-Californian ranchers, and increased taxes all lead to ranchers losing their herds, land, and sometimes even their homes.";
}

function mouseOutCow() {
  header.innerHTML = "Hover Over Something";
  text.innerHTML = "";
}
