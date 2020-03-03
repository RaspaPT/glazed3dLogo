const width = 700;
const height = 700;

let msX = 0;
let msY = 0;
let lmsX = 0;
let lmsY = 0;

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
  ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 1000);
  //frustum(-100, 100, 100, -100, 100, -100)
  
  directionalLight(126, 126, 126, 0, 0, -1);
  ambientLight(102, 102, 102);

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

  xAngle = map(700 + msY, 0, 700, 30, -30)
  yAngle = map(700/4*3 + msX, 0, 700, -90, 90) 
  lmsX = mouseX;
  lmsY = mouseY;
  background(255);
  fill(255);
  noStroke()
  //translate(0, 0, -100)
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
  //stroke(	0, 47, 167);
  //strokeWeight(10);

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

  noStroke();
  fill(255,0,0);

  fill(0, 47, 167)
  vectorSquare(top1);
  vectorSquare(top2);
  vectorSquare(top3);
  vectorSquare(top4);
  vectorSquare(top5);
  vectorSquare(top6);
  vectorSquare(top7);
  vectorSquare(top8);

  vectorSquare(mt1);
  vectorSquare(mt2);
  vectorSquare(mt3);
  vectorSquare(mt4);


  vectorSquare(mb1);
  vectorSquare(mb2);
  vectorSquare(mb3);
  vectorSquare(mb5);
  vectorSquare(mb6);
  vectorSquare(mb7);

  vectorSquare(b1);
  vectorSquare(b2);
  vectorSquare(b3);
  vectorSquare(b4);

  


  vectorBox(top1, top2);
  vectorBox(top2, top4);
  vectorBox(top4, top3);
  vectorBox(top3, top1);

  vectorBox(top5, top6);
  vectorBox(top6, top8);
  vectorBox(top8, top7);
  vectorBox(top7, top5);

  vectorBox(top7, mt3);
  vectorBox(top8, mt4);

  vectorBox(mt1, mt2);
  vectorBox(mt2, mt4);
  vectorBox(mt4, mt3);
  vectorBox(mt3, mt1);

  vectorBox(mb1, mb2);
  vectorBox(mb1, mb3);
  vectorBox(mb2, mb7);
  vectorBox(mb3, mb5);
  vectorBox(mb5, mb6);
  vectorBox(mt1, mb5);
  vectorBox(mt2, mb6);
  vectorBox(mb6, mb7);

  vectorBox(top2, mb1);
  vectorBox(top5, mb3);
  vectorBox(top1, b1);
  vectorBox(top3, b3);
  vectorBox(top4, mb2);
  vectorBox(top6, b2);

  vectorBox(b1, b2);
  vectorBox(b2, b4);
  vectorBox(b4, b3);
  vectorBox(b3, b1);


  if (msX > .01 || msX < -.01) {
    msX *= .9;
  } 
  if (msY > .01 || msY < -.01) {
    msY *= .9;
  }




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

function vectorSquare(v) {
  push()
  translate(v.x, v.y, v.z);
  box(10);
  pop()
}

function mouseClicked() {
 
  msY = mouseY;
}

function mouseMoved() {
  msX += mouseX - lmsX;
  msY += mouseY - lmsY;
  return false;
}

function vectorBox(v1, v2) {
  //top1 = createVector(150, -150, -150);
  //top2 = createVector(150, -150, -50);
  //top4 = createVector(-150, -150, -50);
  

  t = createVector(0,0,0);
  s = createVector(10,10,10);
  if (v1.x === v2.x) {
    t.x = v1.x;
  } else {
    s.x = abs(v1.x - v2.x);
    t.x = abs(v1.x) - abs(v2.x);
  }

  if (v1.y === v2.y) {
    t.y = v1.y;
  } else {
    s.y = abs(v1.y - v2.y);
    t.y = abs(v1.y) - abs(v2.y);
  }

  if (v1.z === v2.z) {
    t.z = v1.z;
  } else {
    s.z = abs(v1.z - v2.z);
    t.z = abs(v1.z) - abs(v2.z);
  }

  push();
//  translate(t.x, t.y, t.z);
  translate(v1.x, v1.y, v1.z);
  translate((v2.x-v1.x)/2, (v2.y-v1.y)/2, (v2.z-v1.z)/2);
  
  box(s.x, s.y, s.z);
  pop()

}
