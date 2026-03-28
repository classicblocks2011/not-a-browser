// BUSCADOR
function search(){
    const q = document.getElementById("query").value.trim();
    if(q === "3301"){
        window.location.href = "entry.html";
    } else if(q.length > 0){
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(q);
    }
}

// HEX
function hexToAscii(hex){
    let str = '';
    for(let i=0;i<hex.length;i+=2){
        str += String.fromCharCode(parseInt(hex.substr(i,2),16));
    }
    return str;
}

// BASE64
function decodeBase64(str){
    try { return atob(str); } catch { return ""; }
}

// REVERSE
function reverse(str){
    return str.split("").reverse().join("");
}

// CESAR
function caesarDecode(str, shift){
    return str.split("").map(c=>{
        if(c === "_") return "_";
        return String.fromCharCode(c.charCodeAt(0) - shift);
    }).join("");
}

// CHECKS

function check2(){
    if(document.getElementById("key").value.toLowerCase() === hexToAscii("7468655f766f6964")){
        window.location.href = "layer3.html";
    } else alert("Wrong");
}

function check3(){
    if(document.getElementById("key2").value.toLowerCase() === decodeBase64("d2hhdF9pc19yZWFs")){
        window.location.href = "layer4.html";
    } else alert("Wrong");
}

function check4(){
    if(document.getElementById("key3").value.toLowerCase() === reverse("laer_si_siht")){
        window.location.href = "layer5.html";
    } else alert("Wrong");
}

function check5(){
    if(document.getElementById("key4").value.toLowerCase() === caesarDecode("wklv_lv_qrw_uhdo",3)){
        window.location.href = "layer6.html";
    } else alert("Wrong");
}

function check6(){
    if(document.getElementById("key5").value.toLowerCase() === "hidden_truth"){
        window.location.href = "layer7.html";
    } else alert("Wrong");
}

function check7(){
    if(document.getElementById("key6").value.toLowerCase() === "deeper_than_code"){
        window.location.href = "layer8.html";
    } else alert("Wrong");
}

function check8(){
    if(document.getElementById("key7").value.toLowerCase() === "london"){
        window.location.href = "layer9.html";
    } else alert("Wrong");
}

function check9(){
    if(document.getElementById("key8").value === "32"){
        window.location.href = "layer10.html";
    } else alert("Wrong");
}
// MENSAJES OCULTOS RANDOM
setTimeout(()=>{
    console.log("you_are_being_observed");
}, 3000);

// TRAMPA (fake path)
function trap(){
    document.body.innerHTML = "<h1>ACCESS DENIED</h1>";
    setTimeout(()=>{
        window.location.href = "index.html";
    },2000);
}

// TIEMPO REAL (nivel dios)
function checkTimeLayer(){
    const input = document.getElementById("timeKey").value.trim();
    const hour = new Date().getHours();

    if(input == hour){
        window.location.href = "true_end.html";
    } else {
        trap();
    }
}