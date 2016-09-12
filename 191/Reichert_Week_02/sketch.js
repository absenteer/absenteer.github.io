function setup() {
  createCanvas(1000, 1200);
}

function draw() {
  background(255, 207, 129);
  
  //Body
  
  
  fill(255, 244, 204);
  rect(375, 375, 250, 300);
  

  
  //Arm Left
  fill(165, 165, 165);
  triangle(310, 450, 375, 450, 315, 670)
  //Arm Right
  fill(165, 165, 165);
  triangle(625, 450, 690, 450, 680, 670)
  
  
  //Left Sleeve
  fill(255, 244, 204);
  rect(310, 375, 65, 65);
  fill(255, 241, 188);
  rect(307.5, 435, 70, 15);
  //Right Sleeve
  fill(255, 244, 204);
  rect(625, 375, 65, 65);
  fill(255, 241, 188);
  rect(622.5, 435, 70, 15);
  
  //Pencil
  fill(255, 234, 57);
  rect(415, 410, 4, 30);
  //Metal Top of Pencil
  fill(165, 165, 165);
  rect(415, 410, 4, 8);
  //Eraser
  fill(248, 173, 239);
  rect(415, 406, 4, 6);
  
   //Pen
   fill(255, 255, 255);
  rect(425, 415, 4, 30);
  
  
  
  //Shirtpocket
  fill(255, 244, 204);
  rect(415, 428, 40, 55);
  fill(255, 241, 188);
  rect(415, 428, 40, 10);
  
 
  //Pen Clip
  
  fill(165, 165, 165);
  rect(427, 420, 3, 20);
  
  
  //Head
  //(X PLacement, Y placement, W, H)
  fill(165, 165, 165);
  
  //Antennae
  line(325, 315, 675, 315);
  fill(255, 0, 0);
  ellipse(325, 315.5, 10, 10);
  ellipse(675, 315.5, 10, 10);
  
  //Ears
  fill(165, 165, 165);
  ellipse(425, 315, 70, 70);
  ellipse(575, 315, 70, 70);
  
  rect(425, 250, 150, 125);
  line(500, 675, 500, 250);
  
  
  
  //Eyes
  fill(0, 255, 0);
  ellipse(460, 290, 50, 50);
  fill(0, 198, 255);
  ellipse(540, 290, 50, 50);
  line(460, 314, 460, 264);
  //Pupils
  fill(255, 0, 0);
  ellipse(460, 290, 20, 20);
  ellipse(540, 290, 35, 35);
  
  
  
  
  //Teeth
  fill(255, 255, 255);
  rect(490, 325, 20, 50)
  rect(510, 325, 20, 50)
  rect(530, 325, 20, 50)
  rect(470, 325, 20, 50)
  rect(450, 325, 20, 50)
  //Black Teeth
  fill(0, 0, 0);
  rect(465, 325, 10, 30)
  rect(485, 325, 10, 30)
  rect(505, 325, 10, 30)
  rect(525, 325, 10, 30)
  
  //Tie
  fill(153, 1, 1);
  triangle(490, 376, 511, 376, 500, 400)
  triangle(540, 500, 500, 520, 500, 400)
  
  //Buttons
  fill(255, 255, 255);
  ellipse(500, 530, 10, 10);
  ellipse(500, 555, 10, 10);
  ellipse(500, 580, 10, 10);
  ellipse(500, 605, 10, 10);
  ellipse(500, 630, 10, 10);
  ellipse(500, 655, 10, 10);
  
  //Wheel Right
  fill(71, 68, 66);
  ellipse(580, 885, 100, 125);
  fill(165, 165, 165);
  ellipse(570, 885, 50, 75);
  
  //Wheel Left
  fill(71, 68, 66);
  ellipse(415, 885, 100, 125);
  fill(165, 165, 165);
  ellipse(425, 885, 50, 75);
  
  
  //Pants Right
  fill(131, 86, 49);
  triangle(625, 695, 500, 695, 565, 900);
  fill(98, 64, 37);
  triangle(595, 695, 500, 695, 565, 900);
  //Wheel Bolt
  fill(71, 68, 66);
  ellipse(565, 885, 25, 35);
  
  //Pants Left
  fill(131, 86, 49);
  triangle(375, 695, 500, 695, 425, 900);
  fill(98, 64, 37);
  triangle(405, 695, 500, 695, 425, 900);
  //Wheel Bolt
  fill(71, 68, 66);
  ellipse(430, 885, 25, 35);
  
  
  
  
  //Belt
  fill(30, 30, 30);
  rect(375, 675, 250, 20);
  rect(564, 673.5, 5, 23);
  rect(375, 675, 200, 20);
  
  //Belt holes
  fill(165, 165, 165);
  ellipse(530, 685.5, 5, 5);
  ellipse(470, 685.5, 5, 5);
  ellipse(450, 685.5, 5, 5);
  ellipse(430, 685.5, 5, 5);
  
  //Belt Loops
  fill(98, 64, 37);
  rect(374, 673.5, 5, 23);
  rect(404, 673.5, 5, 23);
  rect(434, 673.5, 5, 23);
  rect(464, 673.5, 5, 23);
  //Belt Loops
  fill(98, 64, 37);
  rect(374, 673.5, 5, 23);
  rect(404, 673.5, 5, 23);
  rect(434, 673.5, 5, 23);
  rect(544, 673.5, 5, 23);
  rect(594, 673.5, 5, 23);
  rect(622.5, 673.5, 5, 23);
  
  //Belt Buckle
  fill(207, 178, 17);
  rect(480, 672.5, 40, 25);
  
  
  
  
}