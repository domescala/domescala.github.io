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
    "prop2": [
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeM87gTSs3tU8c_PJ2RaxWQfzp1emUc3kR-hbvJAXX4bPKpsw",
        "link20",
        "link30",
        "link40"]
};

// AGGIUNGERE SE KEY NON ESISTE 404
// ordinare file









function f() {

    if (key && !link[key]) {        // se key è definita && link[key] è indefinita  = se key esiste ma non c'è nell'elenco

        console.log("sondaggio non trovato 404")
        nontrovato();
    }
    if (!key && !link[key]) {
        console.log("HOME");
        home();

    }
    if (key && link[key]) {
        richieste();


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

                // console.log(check());
                if (check()) {  // se l'array di risposte è pieno 
                    mostra_form()
                }
            });


        ;


    }

}

function mostra_form() {
    const frame = document.createElement("IFRAME");   // Create a <button> element
    frame.id="form" 
    frame.width="100%" 
    frame.height="-webkit-fill-available" 
    frame.frameborder="0" 
    frame.marginheight="0" 
    frame.marginwidth="0"
    document.body.appendChild(frame)

    index_form_minore = minore(risposte);



    document.getElementById("form").src = link[prop][index_form_minore] + "/viewform?embedded=true";
    document.getElementById("form").style["height"] = "-webkit-fill-available";
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
        if (!Number.isInteger(risposte[i] || risposte.length != link[prop].length)) {
            return false;
        }
        return true

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