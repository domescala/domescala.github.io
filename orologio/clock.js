// inizializzazione

const clock = document.createElement("DIV")
clock.id = "clock";
const doc_h = {d:document.createElement("DIV"), u:document.createElement("DIV")}
const doc_m = {d:document.createElement("DIV"), u:document.createElement("DIV")}
const doc_s = {d:document.createElement("DIV"), u:document.createElement("DIV")}
const doc_spazio = document.createElement("DIV")
const doc_spazio2 = document.createElement("DIV")

doc_h.d.id="h_d";
doc_h.u.id="h_u";
doc_m.d.id="m_d";
doc_m.u.id="m_u";
doc_s.d.id="s_d";
doc_s.u.id="s_u";

doc_h.d.className="blocco";
doc_h.u.className="blocco";
doc_m.d.className="blocco";
doc_m.u.className="blocco";
doc_s.d.className="blocco";
doc_s.u.className="blocco";
doc_spazio.className ="spazio";
doc_spazio2.className ="spazio";


document.body.appendChild(clock)
clock.appendChild(doc_h.d)
clock.appendChild(doc_h.u)
//spazio
clock.appendChild(doc_spazio)

clock.appendChild(doc_m.d)
clock.appendChild(doc_m.u)
//spazio
clock.appendChild(doc_spazio2)

clock.appendChild(doc_s.d)
clock.appendChild(doc_s.u)


setClock(3,doc_h.d)
setClock(10,doc_h.u)
setClock(6,doc_m.d)
setClock(10,doc_m.u)
setClock(6,doc_s.d)
setClock(10,doc_s.u)


function setClock(cifre, a) {
    for (let i = 0; i < cifre; i++) {
    const div1 = document.createElement("DIV");
    const p = document.createElement("P");

    p.innerHTML = i;

    div1.className = "cifra";
    div1.id = "cifra_"+a.id+"_"+i;
    p.className = "cifra";
    a.appendChild(div1).appendChild(p);
}
}
var colore_attivo = "white"

// orologio
// var intervallo1;
var time = new Date()
var intervallo1 = setInterval(() => {
setTimeout(() => {
        let div_cifre = document.querySelectorAll("div.cifra")
    for (let index = 0; index < div_cifre.length; index++) {
        div_cifre[index].classList.remove("attivo");

        
    }
}, 250);

    refreshTime();
}, 1000);


function refreshTime() {
    let day = new Date();


    let h = {u:unaCifra(day.getHours(),   1), d:unaCifra(day.getHours(),   0)}
    let m = {u:unaCifra(day.getMinutes(), 1), d:unaCifra(day.getMinutes(), 0)}
    let s = {u:unaCifra(day.getSeconds(), 1), d:unaCifra(day.getSeconds(), 0)}

    console.log(h,m,s)

    refreshClock(h,m,s);
}

function parseTime(day) {
    let h = {u:unaCifra(day.getHours(), 0), d:unaCifra(day.getHours(), 1)}
    let m = {u:unaCifra(day.getMinutes(), 0), d:unaCifra(day.getMinutes(), 1)}
    let s = {u:unaCifra(day.getSeconds(), 0), d:unaCifra(day.getSeconds(), 1)}

    
}



function unaCifra(t, cifra) {
    let m = t.toString();
    let n;
    if(m[1]){ // ha 2 cifre
        n = m[cifra];

    }
    else{   // manca una cifra
        m = "0"+m;
        n = m[cifra]
    }
    n = eval(n)
    return n;
}


function refreshClock(h,m,s) {
    let t = 50;

    docSetClock(doc_h, h, t);
    docSetClock(doc_m, m, t);
    docSetClock(doc_s, s, t);




    // console.log(doc_h.d.style.top)
}

function docSetClock(el, blocco, t) {
    el.d.style.top = "-" + (blocco.d * t).toString() +"px";
    el.u.style.top = "-" + (blocco.u * t).toString() +"px";


    setTimeout(() => {

            // document.getElementById("cifra_"+el.d.id+"_"+blocco.d).style.backgroundColor = colore_attivo;
            // document.getElementById("cifra_"+el.u.id+"_"+blocco.u).style.backgroundColor = colore_attivo;

            // document.getElementById("cifra_"+el.d.id+"_"+blocco.d).style.color = "black";
            // document.getElementById("cifra_"+el.u.id+"_"+blocco.u).style.color = "black";


            document.getElementById("cifra_"+el.d.id+"_"+blocco.d).classList.add("attivo");
            document.getElementById("cifra_"+el.u.id+"_"+blocco.u).classList.add("attivo");
    }, 250);


}
