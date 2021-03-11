var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_ob ="";
var block_image_ob="";
function player_update()
{
fabric.Image.fromURL("player.png",function(Img){
player_ob=Img;
player_ob.scaleToWidth(150);
player_ob.scaleToHeight(140);
player_ob.set({
top:player_y,
left:player_x
});
canvas.add(player_ob);
});
}
function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
block_image_ob=Img;
block_image_ob.scaleToWidth(block_image_width);
block_image_ob.scaleToHeight(block_image_height);
block_image_ob.set({
top:player_y,
left:player_x
});
canvas.add(block_image_ob);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keyPressed=e.keyCode;
  console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
console.log("p & shift pressed together");
block_image_height=block_image_height +10;
block_image_width=block_image_width +10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && keyPressed=='77')
{
console.log("m & shift pressed together");
block_image_height=block_image_height -10;
block_image_width=block_image_width -10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(keyPressed=='38')
{
up();
console.log("up");
}
if(keyPressed=='40')
{
down();
console.log("down");
}
if(keyPressed=='37')
{
left();
console.log("left");
}
if(keyPressed=='39')
{
right();
console.log("right");
}
if(keyPressed=='37')
{
new_image('hulk_left_hand.png');
console.log("w");
}
if(keyPressed=='71')
{
new_image('hulk.png');
console.log("g");
}
if(keyPressed=='76')
{
new_image('ironman_body.png');
console.log("l");
}
if(keyPressed=='84')
{
new_image('ironman_face.png');
console.log("t");
}
if(keyPressed=='82')
{
new_image('ironman_legs.png');
console.log("r");
}
if(keyPressed=='89')
{
new_image('player.png');
console.log("y");
}
if(keyPressed=='68')
{
new_image('thor_face.png');
console.log("d");
}
if(keyPressed=='67')
{
new_image('thor_right_hand(1).png');
console.log("c");
}
}
function up(){
  if( player_y >=0) {
  player_y=player_y-block_image_hight;
  console.log("block image height="+block_image_height);
  console.log("when up arrow key is pressed,X="+player_x +
  ",Y="+player_y);
  canvas.remove(player_ob);
  player_update();}
}
function down(){
  if( player_y <=500){
  player_y=player_y+block_image_height;
  console.log("block image height="+block_image_height);
  console.log("when down arrow key is pressed,X="+player_x +
  ",Y="+player_y);
  canvas.remove(player_ob);
  player_update();
  }
}
function left(){
  if( player_x >=0){
  player_x=player_x-block_image_width;
  console.log("block image width="-block_image_width);
  console.log("when left arrow key is pressed,X="+player_x +
  ",Y="+player_y);
  canvas.remove(player_ob);
  player_update();
  }
}
function right(){
  if( player_x <=800){
  player_x=player_x+block_image_width;
  console.log("block image width="+block_image_width);
  console.log("when right arrow key is pressed,X="+player_x +
  ",Y="+player_y);
  canvas.remove(player_ob);
  player_update();
  }
}