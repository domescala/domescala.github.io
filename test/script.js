var velocity = {bee: 350, bee2: 350};
var flag = 1;

const height = 720;
const width = 1920;
const margin = 500;

var randomvelocity = Math.random()*1; 
var randomvelocity2 = Math.random()*1; 

var slow = 1;

var vmin = 4;

var decremento = 1.1;

var randompos  = {x:0, y:0} ; 
var lastvect = {x:0, y:0} ; 
var lastvect2 = {x:0, y:0} ;
var dist = { x: 1000, y:1000};
var dist2 = { x: 1000, y:1000};

var bee = document.getElementById("bee");
var bee2 = document.getElementById("bee2");
document.addEventListener("mousemove", getMouse); 



bee.style.position = "absolute"; //css		
bee2.style.position = "absolute"; //css		
var beepos = {x:Math.random()*width, y:Math.random()*height, d:300};
var bee2pos = {x:Math.random()*width, y:Math.random()*height, d:100};

setInterval(followMouse, 15);

var mouse = {x:0, y:0}; 
//mouse.x, mouse.y
function getMouse(e){
    
    mouse.x = e.pageX;
    mouse.y = e.pageY;
// console.log("x: "+mouse.x + " y: "+ mouse.y);
// console.log("beepos x: "+beepos.x + " y: "+ beepos.y);
    
//  console.log("mosso");
    flag = 1;
    slow = 1;

//Checking directional change
// if(mouse.x > beepos.x){
//   dir = "right";
// } else {
//   dir = "left";
// }
}

function followMouse(){
    
//  console.log("muovo");

    
    //1. find distance X , distance Y
    // if (flag == 0) {
    //     // dist = lastvect;
    //     // dist2 = lastvect2;
    // //  velocity.bee += randomvelocity;
    // //  velocity.bee2 += randomvelocity2;


    // }
    // else{
    // velocity = {bee: 300  , bee2: 350};

    // }
    //Easing motion
//Progressive reduction of distance 

    beepos.x +=  ((dist.x*slow) /velocity.bee) + vmin*Math.sign(dist.x); 
    beepos.y +=  ((dist.y*slow) /velocity.bee) + vmin*Math.sign(dist.y);    

    console.log(((dist.x*slow) /velocity.bee) + vmin*Math.sign(dist.x));
    

    bee2pos.x +=  ((dist2.x*slow) /velocity.bee2) + vmin*Math.sign(dist2.x);
    bee2pos.y +=  ((dist2.y*slow) /velocity.bee2) + vmin*Math.sign(dist2.y); 
    
    bee.style.left = beepos.x + "px";               
    bee.style.top = beepos.y + "px";                 
    
    bee2.style.left = bee2pos.x -100+ "px";          
    bee2.style.top = bee2pos.y -100+ "px";            

    
         
    
    

    if ((beepos.x + beepos.d + margin) < 0 || (beepos.x - margin) > width || (beepos.y + beepos.d + margin) < 0 || (beepos.y - margin) > height){
        dist = { x: Math.random()*width - beepos.x, y:Math.random()*height - beepos.y};

    
    }
    if ((bee2pos.x - bee2pos.d + margin) < 0 || (bee2pos.x - margin) > width || (bee2pos.y + bee2pos.d + margin) < 0 || (bee2pos.y - margin) > height){
        dist2 = { x: Math.random()*width - bee2pos.x, y:Math.random()*height - bee2pos.y};
    }
  



// if (flag == 0) {
//     velocity = {bee: 200, bee2: 300}
//     mouse.x += randompos.x;
//     mouse.y += randompos.y;
// }
// else{
//     velocity = {bee: 100, bee2: 200}
// }


//Apply css class 
// if (dir == "right"){
//   bee.setAttribute("class", "right");
// } else {
//   bee.setAttribute("class", "left");        
// }
    
}



// function controllo(){

// lastvect.x = dist.x 
// lastvect.y = dist.y;
// lastvect2.x = dist2.x ;
// lastvect2.y = dist2.y;
// flag = 0;
// }
function randommouse(){
    randompos.x = Math.random()*10; 
    randompos.y = Math.random()*10; 
    randomvelocity = Math.random()*1; 
    randomvelocity2 = Math.random()*1; 
    
}
    


// setInterval(controllo, 150);
setInterval(randommouse, 5000);
setInterval(rallenta, 500);

function rallenta(){
    slow = slow/decremento;




}