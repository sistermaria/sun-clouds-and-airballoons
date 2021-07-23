    x=100;
	y=150;
	x1=250;
	y1=190;
	x3=170;
	y3=200;
	ballY=50;
    balY=120;

function setup() {
	createCanvas(400,400);
}

function draw() {
	background(80, 180, 205);
	
  fill(230,220,6);//sun
  ellipse(75,75,100,100);
  
  
   stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(x, y, 24, 24); //cloud 
    ellipse(x+10,y+10,24,24);
    ellipse(x+30,y+10,24,24);
    ellipse(x+30,y-10,24,24);
    ellipse(x+20,y-10,24,24);
    ellipse(x+40,y,24,24);
	
	
	ellipse(x1, y1, 24, 24);  //cloud
    ellipse(x1+10,y1+10,24,24);
    ellipse(x1+30,y1+10,24,24);
    ellipse(x1+30,y1-10,24,24);
    ellipse(x1+20,y1-10,24,24);
    ellipse(x1+40,y1,24,24);
	
	
	
	x=x+0.6;
	x1=x1+0.5;
	y1=y1+0.20;
	
	
	
	
	
	//ellipse
  fill(0,0,230);
  ellipse(200,ballY,65,65);// blue airballon
  fill(255,0,10);
  rect(190,ballY+41,20,10);//airballoon;bottom
  
  ballY=ballY+0.25;
  
  fill(255,190,190);
  ellipse(300,balY,65,65);//airballoon
  fill(200,150,45);
  rect( 290,balY+40,20,10);//airballon bottom
  balY=balY-0.25;
  
	
	
	}