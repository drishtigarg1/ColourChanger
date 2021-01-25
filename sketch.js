var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100, 575, 175, 50);
    surface1.shapeColor = "red";

    surface2 = createSprite(300, 575, 175, 50);
    surface2.shapeColor = "green";

    surface3 = createSprite(500, 575, 175, 50);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700, 575, 175, 50);
    surface4.shapeColor = "blue";

    box = createSprite(200, 200, 50, 50);
    box.width =  50;
    box.height = 50;
    box.shapeColor = "white";
    

    edge1 = createSprite(400, 5, 800, 10);
    edge2 = createSprite(795, 250, 10, 800);
    edge3 = createSprite(400, 595, 800, 10);
    edge4 = createSprite(5, 300, 10, 800);

    box.velocityX = -5;
    box.velocityY = -5;

}

function draw() {
    background(rgb(169,169,169));

    bounceOff(box, edge1);
    bounceOff(box, edge2);
    bounceOff(edge3, box);
    bounceOff(edge4, box);

    if(isTouching(box, surface1)&& box.bounceOff(surface1)){
        box.shapeColor = "red";
        
    }
        
    if(isTouching(box, surface2)){
        box.shapeColor = "green";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
       
    if(isTouching(surface4, box)&& box.bounceOff(surface4)){
        box.shapeColor = "blue";
        music.play();
    }
        
    if(isTouching(surface3, box)&& box.bounceOff(surface3)){
        box.shapeColor = "yellow";
        
    }
       

    drawSprites();
    
}
