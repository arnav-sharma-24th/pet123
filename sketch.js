//Create variables here
var happydog, dog1;
var dog2;
var database;
var  foodS, foodStock;
function preload()
{
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1200, 1200);
  
  happyDog = createSprite(600,200,120,120);
  happyDog.addImage(dog1);
  happyDog.scale = 0.5
 foodStock = database.ref('Food');
 foodStock.on("value",readStock)
}


function draw() {  
   background(46, 139, 87);
   if (keyWentDown (UP_ARROW) ) {
    writeStock(foodS) ;
    happyDog.addImage(dog2) ;
    textSize(25);
    fill("black");
    text("THANK YOU SO MUCH:)",200,300)
   }   
  drawSprites();
  textSize(30)
  fill(123,123,211)
  text("Plese click up arrow. I am Hungry:[",200,25);
  //add styles here

}


//Function to read values from DB
function readStock(data) {
  foodS=data.val();
}
  //Function to write values in DB
  function writeStock(x) {
    if(x<0){
      x=0;
    }
    else{
      x=x-1;
    }
  database.ref('/').update({
  Food :x
  })  
  }

