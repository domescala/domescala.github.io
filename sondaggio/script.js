console.log("ciaone");


var risposte = new Array();
var url = document.URL;
var key = url.split("?")[1];



// console.log(url);
// console.log("chiave " +key)

var prop = key;

var link = {
    "prop1": [ //proprietario e chiave nel url
        "https://docs.google.com/forms/d/1DSzHG0GpTR4diA8cLeFuQG3lAG-MEJ4mQMKCS881Yfs", // link "pulito" senza viewform o viwe analytics ecc
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeM87gTSs3tU8c_PJ2RaxWQfzp1emUc3kR-hbvJAXX4bPKpsw",

    ],
    "prop2": [
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeM87gTSs3tU8c_PJ2RaxWQfzp1emUc3kR-hbvJAXX4bPKpsw",
        "link20",
        "link30",
        "link40"]
};

// AGGIUNGERE SE KEY NON ESISTE 404
var n_link = 0;
var form_minore = 0;

function f() {

    richieste();

}
function richieste() {
    


        for (let i = 0; i < (link[prop].length); i++) {


            $.ajaxSetup({
                scriptCharset: "utf-8", //or "ISO-8859-1",
                contentType: "application/json; charset=utf-8"
            });
            var linkanalitycs = link[prop][i] + "/viewanalytics";
            $.getJSON("http://whateverorigin.org/get?url=" +
                encodeURIComponent(linkanalitycs) + "&callback=?",
                function (data) {

                    var c = $(data.contents).find("script")[0].innerHTML;


                    eval(c);

                    risposte[i] = ANALYTICS_LOAD_DATA_[5];
                    console.log(risposte);
                    console.log(check());
                    
                    if (check()) {  // se l'array di risposte è pieno 
                        mostra_form()
                    }
                });


            ;


        }
    
    }

function mostra_form() {

    index_form_minore = minore(risposte); 

    

    document.getElementById("form").src = link[prop][index_form_minore] + "/viewform?embedded=true";
    document.getElementById("form").style["height"] = "-webkit-fill-available";
}

function minore(a) {

    var minimo = Math.min.apply(0, a); // trova il minor numero di risposte
    console.log(a);
    console.log(minimo);

    for (let i = 0; i < a.length; i++) {
        if (a[i] == minimo) {
            return i; // ritorna l'indice del primo form col minor numero di risposte
        }



    }
}
function check() {
    

for (let i = 0; i < risposte.length; i++) { // per ogni elemento controlla che non sia vuoto e che il numero di elementi sia al completo
    if( !Number.isInteger(risposte[i] || risposte.length != link[prop].length)){
        return false;
    }
    return true
    
}
}