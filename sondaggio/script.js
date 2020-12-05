console.log("ciaone");
var n_link = 0;
var form_minore = 0;


var risposte = new Array();
var url = document.URL;

var key = url.split("?")[1];




// console.log(url);
// console.log("chiave " +key)

var prop = key;

var link = {
    "tende_al_grafene": [ //proprietario e chiave nel url
        "https://docs.google.com/forms/d/1DSzHG0GpTR4diA8cLeFuQG3lAG-MEJ4mQMKCS881Yfs", // link "pulito" senza viewform o viwe analytics ecc
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeM87gTSs3tU8c_PJ2RaxWQfzp1emUc3kR-hbvJAXX4bPKpsw",
        "https://docs.google.com/forms/d/1QW63MnJ6_H1bdTcXGUdGJxQVn3lozM-IH0hc5SbLw3w",
        "https://docs.google.com/forms/d/1HD-MWmGgAmCDC4CGBoy0IoxBBMGM-LnGQZuJWcHvH5E",

    ],
    "the_alla_pesca_o_the_al_limone": [
        "https://docs.google.com/forms/d/12r0Vhc5mitPBadE0MZg2Y2C1huYhBX0sehTv-Ejdcc0",
        "https://docs.google.com/forms/d/14_SU0eaAeSegTjjm6zjNx2C8aBMk6JLer03ocgVMY5g",
        "https://docs.google.com/forms/d/1yP6RwVtXeNuDjtHdhuY-nLKr0jzegN97jQZ2IPQsI_4",
        "https://docs.google.com/forms/d/1jLmVLim2XexkQOH4B71EmK_h4RFL7aptwLvNNCVGPpg",
        "https://docs.google.com/forms/d/1EUSQksDNIYkW68bJ93R30AhS90nGt2GCG9Ok7iV_8mc",
        "https://docs.google.com/forms/d/1pFs5jec0Vno_iMClzpmHOkeGh2Jw8AMG9C-daQLpqwg",
        "https://docs.google.com/forms/d/1-ySeIkqSyuJDXlRltMKkfQlharzMoqHJBBh7E-FH_2E",
        "https://docs.google.com/forms/d/1xbmqHNPaZw_pVfPjFK6ga60fg6mseL98i--a4bU6UHs",
        "https://docs.google.com/forms/d/1bLEwvvvvplr5Pw5Po62wvkeg-mH6UqgkEN4ug6da0k0",
        "https://docs.google.com/forms/d/1MhQQL8-E_Vi4q8VmfAj0UH4X5MxaXpD9tSjFshinc0c",

    ],    

        
};

// AGGIUNGERE SE KEY NON ESISTE 404
// ordinare file








function f() {


    if (key && !link[key]) {        // se key è definita && link[key] è indefinita  = se key esiste ma non c'è nell'elenco
    document.getElementById("idbody").style.animation = "none";

        console.log("sondaggio non trovato 404")
        nontrovato();
    document.getElementById("titolo").innerHTML = "404";


    }
    if (!key && !link[key]) {
        console.log("HOME");
    document.getElementById("idbody").style.animation = "none";
    document.getElementById("titolo").innerHTML = "Sondaggio";

    home();


    }
    if (key && link[key]) {
        richieste();
    document.getElementById("titolo").innerHTML = "Sondaggio "+ key.replace(/_/gi, " ");

    }

}
function richieste() {
    
    for (let i = 0; i < (link[prop].length); i++) {

        $.ajaxSetup({
            scriptCharset: "utf-8", //or "ISO-8859-1",
            contentType: "application/json; charset=utf-8"
        });
        var linkanalitycs = link[prop][i] + "/viewanalytics";
        $.getJSON("https://api.allorigins.win/get?url=" +
            encodeURIComponent(linkanalitycs) + "&callback=?",
            function (data) {

                var c = $(data.contents).find("script")[0].innerHTML;
                eval(c);
                risposte[i] = ANALYTICS_LOAD_DATA_[5];

                console.log(i);

                // console.log(risposte[i]);
                // console.log(check());

                if (check()) {  // se l'array di risposte è pieno 
                    mostra_form()
                }
            });


        ;


    }

}

function mostra_form() {
    // console.log($(document).height());
    // var altezza = 1920;

    
    // console.log(altezza);

    const frame = document.createElement("IFRAME");   // Create a <button> element
    frame.id="form" ;
    frame.width="100%" ;
    // frame.style.height="-webkit-fill-available" ;
    // frame.style.height="fill-available" ;
    // frame.style.height="-moz-available" ;
    frame.frameborder="0" ;
    frame.marginheight="0" ;
    frame.marginwidth="0";
    // frame.hidden = true;

    document.body.appendChild(frame);

    index_form_minore = minore(risposte);

var altezza = window.screen.height;
    // console.log($(document).height());

    console.log("altezza:" + altezza.toString());

    frame.height= altezza.toString() + "px";


    document.getElementById("form").src = link[prop][index_form_minore] + "/viewform?embedded=true";
    // document.getElementById("form").style["height"] = "-webkit-fill-available";
    
    document.getElementById("idbody").style.animation = "none";
    
}

function minore(a) {

    var minimo = Math.min.apply(0, a); // trova il minor numero di risposte


    for (let i = 0; i < a.length; i++) {
        if (a[i] == minimo) {
            return i; // ritorna l'indice del primo form col minor numero di risposte
        }



    }
}
function check() {


    for (let i = 0; i < risposte.length; i++) { // per ogni elemento controlla che non sia vuoto e che il numero di elementi sia al completo
        if ((Number.isInteger(risposte[i]) && risposte.length == link[prop].length)) {
            
            return true;
        }
        return false;

    }
}

function home() {
    const h1 = document.createElement("H1"); 
    h1.innerHTML = "Elenco sondaggi";
    document.body.appendChild(h1);
    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));


    for (let i = 0; i < Object.keys(link).length; i++) {

        var key = Object.keys(link)[i];
        
        const a = document.createElement("A");   
        const p = document.createElement("P");  
        a.href = "?"+key;
        p.innerHTML = key.replace(/_/gi, " ");                  

        document.body.appendChild(a).appendChild(p);


    }
}
function nontrovato() {
    document.body.appendChild(document.createElement("BR"));
    const h2 = document.createElement("H2"); 
    const a = document.createElement("A");   
    const p = document.createElement("P"); 
    const h1 = document.createElement("H1"); 

    h2.innerHTML = "404";
    h1.innerHTML = "Sondaggio non trovato";
    document.body.style["text-align"] =  "center";
    document.body.style["background-color"] =  "#ff2f50";
    h1.style["color"] = "#ffffff";
    h2.style["color"] = "#ffffff";
    p.innerHTML = "Vai alla home";
    a.style["color"] = "#ffffff";
    a.href = "./";

    document.body.appendChild(h2);
    document.body.appendChild(h1);

    document.body.appendChild(document.createElement("BR"));
    document.body.appendChild(document.createElement("BR"));

 

    document.body.appendChild(a).appendChild(p);


}
// function name() {
//     //document.getElementsByClassName("freebirdFormviewerViewResponseLinksContainer")[0].hidden = true
//     const stile = document.createElement("STYLE");
//     stile.innerHTML = "div.freebirdFormviewerViewResponseLinksContainer{        opacity: 0;    }"
//     document.body.appendChild(stile);
//     // setTimeout(() => {

//     // }, 2000);
// }