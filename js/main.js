console.log("linked");

var isPlaying = false;
var avocado = null;
var guac = [];

/* BEHAVIOR */

function toggleIsPlaying() {
  if (isPlaying){
    isPlaying = false;
  } else {
    isPlaying = true;
  }
}

// avocado moves around the board:

// 1. give the avocado a random index or place on the board
setInterval(placeAvocado, 1000);

function placeAvocado() {
  if (isPlaying) {
    avocado = randomIndex();
    renderState();
    }
}
// give the avocado a number btwn 0-8 (inclusive)
function randomIndex() {
  return  Math.floor(Math.random() * 9);
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

/* RENDER */

function render() {
  if (isPlaying) {
    $("button").text("Pause Game");
  } else {
    $("button").text("Start Game");
  }
};

/* INTERACTION */

$("button").on("click", function() {
  toggleIsPlaying();
  render();

});




