let szamok = "";

function szam(element){
    //document.getElementById("eredmeny").innerHTML = element.innerText;
    szamok += element.innerText;
    document.getElementById("eredmeny2").innerHTML = "Eddigi szam: " + szamok;
}

function negyzet(){
    let negyzeten = parseInt(szamok) * parseInt(szamok);
    document.getElementById("eredmeny").innerHTML = "Eredmeny: " + negyzeten;
}