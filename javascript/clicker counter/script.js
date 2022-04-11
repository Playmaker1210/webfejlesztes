let click_counter = 0;

function gomb1(){
    document.getElementById("kiiras").innerHTML = "Gomb1 lett megnyomva";
    document.getElementById("counter").innerHTML = ++click_counter;   
}
function gomb2(){
    document.getElementById("kiiras").innerHTML = "Gomb2 lett megnyomva";
    document.getElementById("counter").innerHTML = ++click_counter;   
}
function gomb3(){
    document.getElementById("kiiras").innerHTML = "Gomb3 lett megnyomva";   
    document.getElementById("counter").innerHTML = ++click_counter;
}