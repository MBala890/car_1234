var wall,car;

var speed,weight;

function setup() {
  createCanvas(2000,400);
 wall = createSprite(1500, 200, 60, height/2);
 wall.debug= true
 car=createSprite(50,200,50,50);
 
 car.debug=true
 speed=random(40,90)
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background(255,255,255); 
  if(wall.X-car.X<(car.width+wall.width)/2){
     car.velocityX=0 ;
     var deformation=0.5*weight*speed*speed/22509
     if (deformation>180){
       car.shapeColor(255,0,0);
     }
     if(deformation<180&&deformation>100){
       car.shapeColor(230,230,0);
     }
     if(deformation<100){

      car.shapeColor(0,255,0);
     }


  }
   
  drawSprites();
}