const width = 700;
const height = 700;

let top1;
let top2;
let top3;
let top4;
let top5;
let top6;
let top7;
let top8;

let mt1;
let mt2;
let mt3;
let mt4;





function setup() {
  createCanvas(width, height, WEBGL);
  angleMode(DEGREES);
  

  top1 = createVector(150, -150, -150);
  top2 = createVector(150, -150, -50);
  top3 = createVector(-150, -150, -150);
  top4 = createVector(-150, -150, -50);

  top5 = createVector(150, -150, 50);
  top6 = createVector(150, -150, 150);
  top7 = createVector(-150, -150, 50);
  top8 = createVector(-150, -150, 150);

  mt1 = createVector(50, -50, 50);
  mt2 = createVector(50, -50, 150);
  mt3 = createVector(-150, -50, 50);
  mt4 = createVector(-150, -50, 150);

  mb1 = createVector(150, 50, -50);
  mb2 = createVector(-150, 50, -50);
  mb3 = createVector(150, 50, 50);
  mb4 = createVector(150, 50, 150);
  mb5 = createVector(50, 50, 50);
  mb6 = createVector(50, 50, 150);
  mb7 = createVector(-150, 50, 150);

  b1 = createVector(150, 150, -150);
  b2 = createVector(150, 150, 150);
  b3 = createVector(-150, 150, -150);
  b4 = createVector(-150, 150, 150);
  
  

}

function draw() {
  xAngle = map(mouseY, 0, 600, 30, -30)
  yAngle = map(mouseX, 0, 600, -90, 90)
  background(255);
  fill(255);
  noStroke()
  rotateX(xAngle);
  rotateY(yAngle);
  /*push()
    translate(0, 0, -100)
    box(300, 300, 100)
  pop()
  push()
    translate(0, 100, 00)
    box(300, 100, 300)
  pop()
  push()
    translate(100, 000, 100)
    box(100, 300, 100)
  pop()
  push()
    
    translate(00, -100, 100)
    box(300, 100, 100)
  pop()
*/
  stroke(	0, 47, 167);
  strokeWeight(10);

  beginShape();
  vectorVertex(top1);
  vectorVertex(top2);
  vectorVertex(top4);
  vectorVertex(top3);
  endShape(CLOSE);

  beginShape();
  vectorVertex(top5);
  vectorVertex(top6);
  vectorVertex(top8);
  vectorVertex(top7);
  endShape(CLOSE);

  beginShape();
  vectorVertex(mt1);
  vectorVertex(mt2);
  vectorVertex(mt4);
  vectorVertex(mt3);
  endShape(CLOSE);


  beginShape();
  vectorVertex(mb1);
  vectorVertex(mb3);
  vectorVertex(mb5);
  vectorVertex(mb6);
  vectorVertex(mb7);
  vectorVertex(mb2);
  endShape(CLOSE);

  beginShape();
  vectorVertex(b1);
  vectorVertex(b2);
  vectorVertex(b4);
  vectorVertex(b3);
  endShape(CLOSE);


  beginShape();
  vectorVertex(top1);
  vectorVertex(top3);
  vectorVertex(b3);
  vectorVertex(b1);
  endShape(CLOSE);

  beginShape();
  vectorVertex(top2);
  vectorVertex(top4);
  vectorVertex(mb2);
  vectorVertex(mb1);
  endShape(CLOSE);

  beginShape();
  vectorVertex(top5);
  vectorVertex(top7);
  vectorVertex(mt3);
  vectorVertex(mt1);
  vectorVertex(mb5);
  vectorVertex(mb3);
  endShape(CLOSE);

  beginShape();
  vectorVertex(b4);
  vectorVertex(b2);
  vectorVertex(top6);
  vectorVertex(top8);
  vectorVertex(mt4);
  vectorVertex(mt2);
  vectorVertex(mb6);
  vectorVertex(mb7);  
  endShape(CLOSE);

  beginShape();
  vectorVertex(b1);
  vectorVertex(top1);
  vectorVertex(top2);
  vectorVertex(mb1);
  endShape();

  noStroke();

  beginShape();  
  vectorVertex(b1);
  vectorVertex(b2);
  vectorVertex(mb3);
  vectorVertex(mb1);
  endShape();

  beginShape();  
  vectorVertex(b2);
  vectorVertex(top6);
  vectorVertex(top5);
  vectorVertex(mb3);
  endShape();

  beginShape();  
  vectorVertex(top3);
  vectorVertex(top4);
  vectorVertex(mb2);
  vectorVertex(b3);
  endShape();

  beginShape();  
  vectorVertex(mb2);
  vectorVertex(mb7);
  vectorVertex(b4);
  vectorVertex(b3);
  endShape();

  beginShape();  
  vectorVertex(top7);
  vectorVertex(top8);
  vectorVertex(mt4);
  vectorVertex(mt3);
  endShape();

  beginShape();  
  vectorVertex(mt1);
  vectorVertex(mt2);
  vectorVertex(mb6);
  vectorVertex(mb5);
  endShape();

  fill(0, 47, 167)
  vectorSpehre(top1);
  vectorSpehre(top2);
  vectorSpehre(top3);
  vectorSpehre(top4);
  vectorSpehre(top5);
  vectorSpehre(top6);
  vectorSpehre(top7);
  vectorSpehre(top8);

  vectorSpehre(mt1);
  vectorSpehre(mt2);
  vectorSpehre(mt3);
  vectorSpehre(mt4);


  vectorSpehre(mb1);
  vectorSpehre(mb2);
  vectorSpehre(mb3);
  vectorSpehre(mb5);
  vectorSpehre(mb6);
  vectorSpehre(mb7);

  vectorSpehre(b1);
  vectorSpehre(b2);
  vectorSpehre(b3);
  vectorSpehre(b4);
  

 
 /*

  vectorLine(top1, top2);
  vectorLine(top2, top4);
  vectorLine(top4, top3);
  vectorLine(top3, top1);

  vectorLine(top5, top6);
  vectorLine(top6, top8);
  vectorLine(top8, top7);
  vectorLine(top7, top5);

  vectorLine(top7, mt3);
  vectorLine(top8, mt4);

  vectorLine(mt1, mt2);
  vectorLine(mt2, mt4);
  vectorLine(mt4, mt3);
  vectorLine(mt3, mt1);

  vectorLine(mb1, mb2);
  vectorLine(mb1, mb3);
  vectorLine(mb2, mb7);
  vectorLine(mb3, mb5);
  vectorLine(mb5, mb6);
  vectorLine(mt1, mb5);
  vectorLine(mt2, mb6);
  vectorLine(mb6, mb7);

  vectorLine(top2, mb1);
  vectorLine(top5, mb3);*/




}

function vectorLine(v1, v2) {
  line(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
}

function vectorVertex(v) {
  vertex(v.x, v.y, v.z);
}

function vectorSpehre(v) {
  push()
  translate(v.x, v.y, v.z);
  sphere(4);
  pop()
}