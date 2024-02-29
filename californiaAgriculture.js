const farm = document.getElementById("Farm");
const cow = document.getElementById("Cow");

const header = document.getElementById("hoverBoxHeader");

// This handler will be executed only once when the cursor
// moves over the unordered list
farm.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    .target.text = "wassup";
  },
  false,
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
