var diam1 = 15;
var b = 100
function setup() {
  // put setup code here
    createCanvas(500,500);
}
function draw() {
  // put drawing code here
    background("#195");
    fill("#f79");
    stroke("b,100,100");
    strokeWeight(5);
    ellipse(145,67,155,98);
    ellipse(145,67,12,98);
    ellipse(225,67,35,45);
    ellipse(125,20,10,50);
    ellipse(190,69,15,25);
    fill("#f90")
    ellipse(mouseX-20,mouseY,20,20);
    fill("#f90")
    ellipse(250,250,diam1,diam1);
    textSize(30);
    textFont("Sans");
    textStyle(BOLD);
    fill("#f33")
    text('HelpThePiggyHide',200,200);
}
function mousePressed(){
    diam1 = diam1+9;
} 