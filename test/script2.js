const height = 720;
const width = 1920;
const margin = 150;
var color = [   "rgba(255, 182, 94, 1)",
                "rgba(239, 71, 110, 1)",
                "rgba(38, 84, 124, 1)"];

var diametro = 300;

var slow = 1;
var decremento = 1.05;
var velocity = [200,200,200]; 
var vmin = 2;
var zlist = [21, 22, 23, 24]

var ball = [{x: Math.random()*width , y: Math.random()*height, z: 20, s: 1, },
            {x: Math.random()*width , y: Math.random()*height, z: 20, s: 1, },
            {x: Math.random()*width , y: Math.random()*height, z: 20, s: 1, }
];
var vect = [{x:200*(Math.random()*2 - 1) , y: 200*(Math.random()*2 - 1)},
            {x:200*(Math.random()*2 - 1) , y: 200*(Math.random()*2 - 1)},
            {x:200*(Math.random()*2 - 1) , y: 200*(Math.random()*2 - 1)} ];
var i = 0;
var j = 0;
var doc = [ document.getElementById("bee"),
            document.getElementById("bee2"),
            document.getElementById("bee3")
            ,
        ];
var provadoc = document.getElementById("prova");



for (let i = 0; i < 3; i++) {
ball[i].s = Math.random()*1.5 + 0.5;
doc[i].style.transform = "scale("+ball[i].s+")";

}



document.addEventListener("mousemove", getMouse); 



function getMouse(){
    slow=1;
}

setInterval(move, 15);

function move() {
    
    for (let i = 0; i < 3; i++) {
        ball[i].x += vmin*Math.sign(vect[i].x) + ( vect[i].x * slow ) / (velocity[i]*(0.5 + ball[i].s))  ;
        ball[i].y += vmin*Math.sign(vect[i].y) + ( vect[i].y * slow ) / (velocity[i]*(0.5 + ball[i].s))  ;
    }




        for (let i = 0; i < 3; i++) {
            
        
        if (    (ball[i].x + diametro + margin) < 0 
            ||  (ball[i].x - margin) > width 
            ||  (ball[i].y + diametro + margin )< 0 
            ||  (ball[i].y - margin)> height
            ){
    
            vect[i] = { x: Math.random()*width - ball[i].x, y:Math.random()*height - ball[i].y};

            ball[i].s = Math.random()*2.5 + 0.5;

            doc[i].style.transform = "scale("+ball[i].s+")";
            doc[i].style.boxShadow = "0px 0px 10px 0px "+ color[i];
             
             console.log(zlist[j]);
            
            ball[i].z = zlist[j];
            j++;


            if (j == 4) {
                j= 0;
            }
        }  }   
    
        for (let i = 0; i < 3; i++) {
        
        doc[i].style.left = ball[i].x + "px";
        doc[i].style.top = ball[i].y + "px";
        doc[i].style["zIndex"] = ball[i].z; 
        }   
    
}




setInterval(rallenta, 500);

function rallenta(){
    slow = slow/decremento;
}