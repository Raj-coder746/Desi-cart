var f;
function setup() {
  createCanvas(windowWidth,windowHeight);
  f = new form();
  
}

function draw() {

  background("grey"); 
  f.display();
}