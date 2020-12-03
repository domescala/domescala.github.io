console.log("ciaone");


var url= document.URL;
var key = url.split("?")[1];

// var req = new XMLHttpRequest();  
// req.open('GET', 'https://docs.google.com/forms/d/e/1FAIpQLSeMZ7_cqz12fRUDk4GmDWEJ3KropxZmfofZkgqOAb9VTEDn7A/viewanalytics', false);   
// req.setRequestHeader("Access-Control-Allow-Origin", "");
// req.send(null);  
// if(req.status == 200)  
//    alert(req.responseText);

var request = new XMLHttpRequest();

request.addEventListener("load", function(evt){
    console.log(evt);
}, false);

request.open('GET', 'https://www.wikipedia.org', true),
request.send();


console.log(url);
console.log("chiave " +key)



var a = {"prop1":[
    "docs.google.com/forms/d/1DSzHG0GpTR4diA8cLeFuQG3lAG-MEJ4mQMKCS881Yfs",
    "link2",
    "link3",
    "link4",
],
    "prop2":[
        "docs.google.com/forms/u/0/d/e/1FAIpQLSeM87gTSs3tU8c_PJ2RaxWQfzp1emUc3kR-hbvJAXX4bPKpsw",
        "link20",
        "link30",
        "link40"]
    };

// console.log(a[key][1]);

var n_link = 0 ;

// link = "https://"+ a[key][n_link] +"/viewform?embedded=true";


setTimeout(() => {
    document.getElementById("form").src = link;
    document.getElementById("form").style["height"] ="-webkit-fill-available"  ;
    
    }, 100);
    