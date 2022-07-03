//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;



var spidermanImg, spiderman, GreenGobImg, GreenGob;
var bg, bg_image;

//var engine, world, angle;

var GreenGoblinsGroup;
//var score = 0;


function preload(){

    spidermanImg = loadImage("assets/Spiderman.png");
    GreenGobImg = loadImage("assets/GreenGoblin.png");
    bg_image = loadImage("assets/Background.png");


}



function setup(){

    createCanvas(1200, 700);
    //engine = Engine.create();
    //world = engine.world;
 
    bg = createSprite(600, 350);
    bg.addImage( bg_image);
    bg.scale = 0.5;
    
    GreenGoblinsGroup = new Group;
    
    spiderman = createSprite(150,350);
    spiderman.addImage(spidermanImg);
    spiderman.scale = 0.05;

    //GreenGob = createSprite(900,500);
    //GreenGob.addImage(GreenGobImg);
    //GreenGob.scale = 0.25;
    
}




function draw(){

    background(0);

   spiderman.visible = true;
    //GreenGob.visible = true;


    spawnGoblins();

    drawSprites();
}

function spawnGoblins(){
    
    if(World.frameCount % 150 === 0){
        GreenGob = createSprite(1200,600);
        GreenGob.y = Math.round(random(600,400));
        GreenGob.addImage(GreenGobImg);
        GreenGob.velocityX = -3;
        GreenGoblinsGroup.add(GreenGob);
        GreenGob.scale = 0.25;
    }

}