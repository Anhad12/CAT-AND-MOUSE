var bi;
var ms,mt;
var cr,cs;
var c1;
var m2;
var cat, mouse;
function preload() {
    //load the images here
       bi=loadImage("images/garden.png");
       cs =loadAnimation("images/tomFour.png")
       c1 =loadAnimation("images/tomOne.png")
       cr= loadAnimation("images/tomThree.png","images/tomTwo.png")
       ms = loadAnimation("images/jerryTwo.png")
       m2= loadAnimation("images/jerryOne.png")
     //  cr= loadAnimation("images/tomOne.png","images/tomTwo.png","images/tomThree.png","images/tomFour.png")
    }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(600,700,50,50);
mouse=createSprite(100,700,50,50);
cat.addAnimation("c standing",cs);
cat.scale=0.2;
mouse.addAnimation("j standing", ms)
mouse.scale= 0.1;
}

function draw() {

    background(bi);
    if(cat.x-mouse.x<(cat.width/2-mouse.width/2)){
        cat.velocityX=0;
        cat.addAnimation("c sitting",c1);
        cat.changeAnimation("c sitting");
        mouse.addAnimation("over", m2);
        mouse.changeAnimation("over",m2);
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("c running",cr);
cat.changeAnimation("c running")


}
}
