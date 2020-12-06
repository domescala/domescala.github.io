console.log("ciaone");
var n_link = 0;
var form_minore = 0;


var risposte = new Array();
var url = document.URL;

var key = url.split("?")[1];
// var altezza = window.screen.height; 
// var altezza = "1920px"; 



// console.log(url);
// console.log("chiave " +key)

var prop = key;

var link = {
// 1
//note
"tenda_da_campeggio_innovativa": [
"https://docs.google.com/forms/d/1mwQvflYLPuJimfTQSs_22qfKS64QRmllZbC7s1nD9Ek",
"https://docs.google.com/forms/d/1RYb7rwZAD_VZwIE2j9g7JfcTEBrY9FhAtjHRlpVhuvs",
"https://docs.google.com/forms/d/1dQRvPfKtH4McEEnU1LjCy5OivuVbaf6tkrlAt079el0",
"https://docs.google.com/forms/d/1O5Dd7Tv-_szDg-n3M5wZ-AkMadzQIWlc3vK2hEDAakI",
"https://docs.google.com/forms/d/1hyoHuL9TeKjXP3v-PCeoFADwOeyGf9tEmEHoHZ7g7eI",
"https://docs.google.com/forms/d/1rB2GXpd8MLnTmrSkitmd7sP9XCayFPu_Wg85BzTSTxI",
"https://docs.google.com/forms/d/1NiIlDHxet-SBf22VnrHlquxv8AdjgUNpXdj7vabvUD8",
"https://docs.google.com/forms/d/1RMFIHcPW5-lihOV_FY6eqlBpElwpm1IpDXntttEnzmU",
"https://docs.google.com/forms/d/1pmDiu5aDyrqlVjMRpCEs7S-WsHGeSrWtchuSARHslVc",
"https://docs.google.com/forms/d/1jF3MGNRn9MLZyKMS-_XKxlPweZ2dDTmKlKJQG6Y9EkI",
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
    // 2
//gruppo 40
"coltura_idroponica": [
    "https://docs.google.com/forms/d/e/1FAIpQLSct702lmfZXVdd0rr6AgWS-DaB-LdzFZbbm9R95auT6euiGTA",
    "https://docs.google.com/forms/d/e/1FAIpQLSeCI7r--XD9uSwdGducssShWtbQbZDZWFGnXiGqcw4yrN7ANA",
    "https://docs.google.com/forms/d/e/1FAIpQLSd9SDubU4MDjr6JRttIO-PfkjRE328WUKgxVLOvPSnf9lIb0A",
    "https://docs.google.com/forms/d/e/1FAIpQLScqgI5oWsKI7isRxHXUz6uO4JddsDXpMDa-wRk2CdNxK75-Lg",
    "https://docs.google.com/forms/d/e/1FAIpQLSeQjAv2iwjDQmZo0ZANZENEJoElDFx2y7OuLCtw12rkP7kxBg",
    "https://docs.google.com/forms/d/e/1FAIpQLSeiBGlniWgN_vJQ8UoZZYT-Q9J458xK8JiwX5MlcPL3eGCHVQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSfIIgSoin32-loAHHtFiChAjPRefbuTDtkH6oPMcy9MavZA4Q",
    "https://docs.google.com/forms/d/e/1FAIpQLSeu5KRnLr82pfIBWLYqtK3242Q5ccAt6_2K49Su5qYgAqPuHQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSfVi-3rShe5jaqWeHRAK6FaOlmefDIOme63M3aSrrc_Kffpww",
    "https://docs.google.com/forms/d/e/1FAIpQLSctHpyv1rGMMcxS89sEcWnSTc-SIJES0SFnIXpC7tpN8waOHg",
            ],

        // 3
//Gruppo 23
"automobile_a_idrogeno": [
    "https://docs.google.com/forms/d/e/1FAIpQLSelEIqbBoL2L3boTKnxgz8mRwjqXRE2p_DjjjCeZHz7-XPTyA",
    "https://docs.google.com/forms/d/e/1FAIpQLSfQpDZj3Xwzy313-wCkKgH_u1pFIywL5QWmsVgFiiKaPNMA3A",
    "https://docs.google.com/forms/d/e/1FAIpQLSff5JoUcEAa8gmVML2x8BWgRFZmv1njoshZF3LRlQoqEOWuMQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSc9FPUJKJ-yPywezxOEjzh40xEDBpjNuLuxtAMfonUw5_N8bw",
    "https://docs.google.com/forms/d/e/1FAIpQLSewPt4OcRwsmRpuQHMscTqNqTIAsUQJwuEB6ntvIuzbLsXjsg",
    "https://docs.google.com/forms/d/e/1FAIpQLScreUn3O5BR-BU4MEbhCQVNFa_zD46wVqPqbsVV7oRl-hlq0w",
    "https://docs.google.com/forms/d/e/1FAIpQLScSTA5Hy5X536jFX_AlwLOlxUlKnxwqJO4lMKZf0JVxn_ZNxg",
    "https://docs.google.com/forms/d/e/1FAIpQLScSTA5Hy5X536jFX_AlwLOlxUlKnxwqJO4lMKZf0JVxn_ZNxg",
    "https://docs.google.com/forms/d/e/1FAIpQLScEuAYWPDKSwyjlihB9W6PuEnrTvJ_j7eMH75Qdap0q51eN8g",
    "https://docs.google.com/forms/d/e/1FAIpQLScdhwIk76UQ9tOXN0urd4WuhrwoP_bfATnnO042tEhHzNaTZg",
            ],
            // 4
//Gruppo 25
"cover_da_smartphone_con_memoria_ssd_integrata": [
    "https://docs.google.com/forms/d/e/1FAIpQLSfUvJWgR6lg7o_jxE8FqAKLFq_90XcKNY9txL5OpT1Lbv6URA",
    "https://docs.google.com/forms/d/e/1FAIpQLSc6SzDSttpH5vRSIjTRXhgzAsaEnogLJ0_-20q_Jwf0n7Ew2A",
    "https://docs.google.com/forms/d/e/1FAIpQLSefcecdGY_hZCjrDXFCJ7pnXxow-aNtl5MYI7hyv5SYVK8ShQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSchQLaxoq9Yca5n4-TdFhKIfPjBibOJopo2ogKt3lxmk-ec7g",
    "https://docs.google.com/forms/d/e/1FAIpQLSflg6y6x178av1koBbgIY2ciQCpT1hLc3xSCS82uwsjP5rnxQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSfvBuQoyQ6PEMR9qX9WfkdTAsIjKkqvKp3WipoCvIWF1W1PsA",
    "https://docs.google.com/forms/d/e/1FAIpQLScNlamyP5tZsQvBNuifBsLDXlkjrsEw0bbToCiAOsWRLbHDnw",
    "https://docs.google.com/forms/d/e/1FAIpQLSfJzCmnaY7n_R70FyESXVkLhJ4L3inuE14-1hPNnwNhDkSaLg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdnmdLax80N22fFHOihYe8Ig_0msi8wIRmGVdZhtDWUtClczg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfNTy8eS_2em1YJbrIpn971FHeCZU18rJlUTBDvv45g8DoEQQ",
            ],
            // 6		
//	Gruppo 1	
    "attivita_in_quota": [
    "https://docs.google.com/forms/d/e/1FAIpQLScmz6uI3jjXbZwHtmyo7DfaaAUpEFT1Nl6dupjhk-GjVy4big",
    "https://docs.google.com/forms/d/e/1FAIpQLSezvz0k4CuOBgHUVOipi7W5OcrKkjHCkzLex2Mi_Wjd481K_A",
    "https://docs.google.com/forms/d/e/1FAIpQLSew-858Wyi6ouqLVdHKfBUt19xaduaQGq7b2Ttm6vMR7K0lAA",
    "https://docs.google.com/forms/d/e/1FAIpQLSdpBdTjSCwt8jov8jMTiAnuHY87hhUIlzZeLK5Zpz18W30rjQ",
    "https://docs.google.com/forms/d/e/1FAIpQLScoWe22cSEgEzMuLoiaDsr7IbjxobkL88CMxuvppwbLREpcbg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfm3HtthFS8m4fhTm3HJ3pu2TtqfJ5kOpcAkA01iPPujlgPRA",
    "https://docs.google.com/forms/d/e/1FAIpQLSfw822dtkoOx-Dwv13BHQFHavDAnd48ERHzFGeAOwUcsZ9u1A",
    "https://docs.google.com/forms/d/e/1FAIpQLSdep0zsS7AqSHdRhZbVEa7Q4NjcBzo8Br6uFjTnaI_q9yoIeQ",
    "https://docs.google.com/forms/d/e/1FAIpQLSddoGbXQWq7aP010CC1L2COnXRCQJVFiC4nmXwy2Xyf5wklbA",
    "https://docs.google.com/forms/d/187RfBohep4IW-932V885x8ciwzAOEtCRZ64LEIoNNdU",
            ],
};

// AGGIUNGERE SE KEY NON ESISTE 404
// ordinare file








function f() {

    //  altezza = window.screen.height;

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

                console.log(risposte[i]);
                console.log(check());

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

    // var altezza = window.screen.height;
    // console.log($(document).height());
    // var  altezza = (window.screen.height).toString() + "px";

    // console.log("altezza:" + altezza);

    frame.style.height= "5000px";
    

    document.getElementById("form").src = link[prop][index_form_minore] + "/viewform?embedded=true";
    // document.getElementById("form").style["height"] = "-webkit-fill-available";
    
    document.getElementById("idbody").style.animation = "none";
    // console.log(risposte);
    // setTimeout(() => {
    //    var sommarisposte = 0;
    //    for (let i = 0; i < risposte.length; i++) {
    //        sommarisposte += risposte[i];
           
    //    }
    //    console.log(sommarisposte); 
    // }, 1000);
    
}

function minore(a) {

    var minimo = Math.min.apply(0, a); // trova il minor numero di risposte
    var listaminori = new Array;    // creo una lista con un solo elemento

    
    console.log(a);
    console.log("minimo: " + minimo);
    

    for (let i = 0; i < a.length; i++) {
    

        if (a[i] == minimo) { // se ad i c'è un minore 
    console.log(a[i] + " è un minimo ");

            listaminori.push(i);
    console.log("lista dei minori " + listaminori);

        }

    }
    var min = 0;
    var max = listaminori.length - 1;
    console.log("lista dei minori è lunga " + listaminori.length);

    // if (max == 1) {
    //     return
    // }
    var indice_estratto = Math.round(Math.random() * (max - min) + min) ;
    console.log("indice_estratto "+ indice_estratto);
    console.log("ritorna " +listaminori[indice_estratto]);
    
    return listaminori[indice_estratto];
    // genero un numero random da 1 a listaminori lenght

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
        // const button = document.createElement("button"); 
        // button.id = toStrig(key);
        const a = document.createElement("A");   
        const p = document.createElement("P");  
        a.href = "?"+key;
        p.innerHTML = key.replace(/_/gi, " ");      

        // button.innerHTML = "risultati";                  

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


