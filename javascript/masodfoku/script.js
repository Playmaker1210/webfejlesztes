let a,b,c = 0;
function input(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    document.getElementById("ertekek").innerText = "a: " + a + " b: " + b + " c: " + c;

    szamolas();
}

function diszkriminans(){
    let diszk = (b*b) - (4 * a * c);
    if(diszk > 0){
        return 2;
    }else if(diszk == 0){
        return 1;
    }else{
        return 0;
    }
}

function szamolas(){
    let diszk = diszkriminans();
    console.log("diszk: " + diszk);
    if(diszk == 0){
        document.getElementById("hiba").innerText = "Nincs eredmeny"; 
        return "Nincs eredmeny";

    }
    if(a < 1){
        document.getElementById("hiba").innerText = "Elsofoku egyenlet";
        return "Elsofoku egyenlet";
    }

    let gyok1 = -b + Math.sqrt((b*b) - (4 *a*c));
    gyok1 = gyok1 / (2*a);
    document.getElementById("eredmeny1").innerText = "Gyok1: " + gyok1;
    let gyok2 = -b - Math.sqrt((b*b) - (4 *a*c));
    gyok2 = gyok2 / (2*a);
    document.getElementById("eredmeny2").innerText = "Gyok2: " + gyok2;

    console.log("Gyok1: " + gyok1);
    console.log("Gyok2: " + gyok2);

    if(diszk == 1){
        let ell1 = a*gyok1*gyok1 + b*gyok1 + c;
        let ell2 = a*gyok2*gyok2 + b*gyok2 + c;
        console.log("ELL1: " + ell1);
        console.log("ell2: " + ell2);
        if(ell1 == 0){
            document.getElementById("hiba").innerText = "Gyök1 jó megoldás";
        }
        if(ell2 == 0) {
            document.getElementById("hiba").innerText = "Gyök2 jó megoldás";
        }
    }
} 