console.log("linked");

var isPlaying = false;
var avocado = null;
var guac = [];

/* BEHAVIOR */

function start() {
  isPlaying = true;
}

/*  HELPERS */

function renderState() {
  if (isPlaying) {
    console.log("Game is on");
} else {
  console.log("Paused");
}

if (avocado === 0) {
  console.log("A", "_", "_");
  console.log("_", "_", "_");
  console.log("_", "_", "_");
  } else if (avocado === 1) {
  console.log("_", "A", "_");
  console.log("_", "_", "_");
  console.log("_", "_", "_");
  } else if (avocado === 2) {
  console.log("_", "_", "A");
  console.log("_", "_", "_");
  console.log("_", "_", "_");
  } else if (avocado === 3) {
  console.log("_", "_", "_");
  console.log("A", "_", "_");
  console.log("_", "_", "_");
  } else if (avocado === 4) {
  console.log("_", "_", "_");
  console.log("_", "A", "_");
  console.log("_", "_", "_");
  } else if (avocado === 5) {
  console.log("_", "_", "_");
  console.log("_", "_", "A");
  console.log("_", "_", "_");
  } else if (avocado === 6) {
  console.log("_", "_", "_");
  console.log("_", "_", "_");
  console.log("A", "_", "_");
  } else if (avocado === 7) {
  console.log("_", "_", "_");
  console.log("_", "_", "_");
  console.log("_", "A", "_");
  } else if (avocado === 8) {
  console.log("_", "_", "_");
  console.log("_", "_", "_");
  console.log("_", "_", "A");
  }
}


/* INTERACTION */

$("button").on("click", start);



