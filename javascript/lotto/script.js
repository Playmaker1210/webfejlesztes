let szamok = "";
let valasztott = Array(0,0,0,0,0);
let index = 0;

function szam(element){
    //document.getElementById("eredmeny").innerHTML = element.innerText;
    //szamok += element.innerText;
    valasztott[index++] = (parseInt(element.innerText));
    for (let index = 0; index < valasztott.length; index++) {
        document.getElementById("eredmeny").innerText += " " + valasztott[index] + " ";
    }
    document.getElementById("eredmeny").innerHTML += "<br>"
}

function sorsolas(){
    let eredmenyek = Array(5);
    for (let i = 0; i < eredmenyek.length; i++) {
        eredmenyek[i] = Math.floor(Math.random() * 90) + 1;    
        document.getElementById("sorsolt").innerText += " " + eredmenyek[i] + " ";    
    }

    let talalatok = 0;

    for (let i = 0; i < eredmenyek.length; i++) {
        for (let j = 0; j < valasztott.length; j++) {
            if(eredmenyek[i] == valasztott[j]){
                talalatok++;
            }          
        } 
    }

    document.getElementById("eredmeny2").innerText = "Találatok száma: " + talalatok;
}

function gombLetrehozas(){
    let button;

    for(let i = 1; i < 91; i++){
        button = document.createElement("button");
        button.setAttribute("id", "gomb"+i);
        button.setAttribute("value", i);
        button.setAttribute("onclick", "szam(this)");
        let text = document.createTextNode(i);
        button.appendChild(text);
        let eredmeny = document.getElementById("eredmeny");
        document.body.insertBefore(button, eredmeny);
    }
}