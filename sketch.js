function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  lollipop(mouseX, 200, 150, 100);
  lollipop(100, 300, 75, 25);
  lollipop(500, 100, 500, 300);
  //lollipop(x, y, length of the stick, size of the lolli);
}

function lollipop(x, y, stickLength, lolliDiameter){
  fill(0, 200, 255);
  rect(x - 10, y, 20, stickLength);

  fill(255, 0, 200);
  ellipse(x, y, lolliDiameter);
}

