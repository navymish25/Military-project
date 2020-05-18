var bullet, wall, speed, weight, deformation, thickness, damage;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor=color(80,80,80);
  bullet.shapeColor="white";

  bullet.velocityX=3;

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0);

  if(bullet.collide(wall)){
    bullet.velocityX = 0;
  }

  damage = 0;

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);

    }

    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }

  if(damage<10){
    wall.shapeColor="green";
  }
  else{
     wall.shapeColor="red";
  }


  
  drawSprites();
}
