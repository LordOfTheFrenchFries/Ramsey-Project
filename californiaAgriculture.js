const farm = document.getElementById("Farm");
const cow = document.getElementById("Cow");

const header = document.getElementById("hoverTextHeader");

// This handler will be executed only once when the cursor
// moves over the unordered list
farm.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    header.innerHTML = "wassup";
  },
  false,
);
