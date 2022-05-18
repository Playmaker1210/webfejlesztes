/*Egy vidéki kis moziteremben 10 sor, soronként 8 szék található. Készíts olyan weboldalt, amely segítségével le lehet foglalni széket/székeket! Az oldal jelenítse meg a székeket, a foglalások pillanatnyi állapotát! Ránézésre meg lehessen állapítani, hogy melyik szék foglalt, és melyik nem. Ha egy szék már foglalt, akkor azt még egyszer ne lehessen lefoglalni. A székek lefoglalását lehessen „visszavonni.
Az oldal legyen minél dizájnosabb! Ügyelj arra, hogy az oldal reszponzív legyen!
A leírtak a feladat minimumkövetelményét tartalmazzák, természetesen ötletekkel és megvalósítással bővíthető.
Erre a feladatra mindenki jegyet kap (az is aki nem küldi be határidőre).*/

let ulohelyek = [
    [0,0,0,0,0,0,0,0],  //1.sor
    [0,0,0,0,0,0,0,0],  //2.sor
    [0,0,0,0,0,0,0,0],  //3.sor
    [0,0,0,0,0,0,0,0],  //4.sor
    [0,0,0,0,0,0,0,0],  //5.sor
    [0,0,0,0,0,0,0,0],  //6.sor
    [0,0,0,0,0,0,0,0],  //7.sor
    [0,0,0,0,0,0,0,0],  //8.sor
    [0,0,0,0,0,0,0,0],  //9.sor
    [0,0,0,0,0,0,0,0]   //10.sor
    /*
        0 a nem lefoglalt szek
        1 az ideiglenesen lefoglalt szek
        2 a lefoglalt szek
    */
]

let legutobbiFoglalas = ""; //legutoljara lefoglalt szekek eltarolasa formatum: sor,oszlop;sor,oszlop;

/*console.log(ulohelyek.length);
console.log(ulohelyek[0].length);
console.log(ulohelyek[0][0].length);*/

function ulohelyekGeneralas(){
    let terem = document.getElementById("szekek"); //szekeket tartalmozo div lekerese

    for (let i = 0; i < ulohelyek.length; i++) {
        let sor = document.createElement("div");    //uj sor div letrehozasa
        sor.setAttribute("id", "sor-" + (i+1));     //megfelelelo id beallitasa a sorhoz | formatum: sor-1; sor-2
        sor.setAttribute("value", i);               //ertek beallitasa a script muveletekhez
        sor.setAttribute("class", "sor");           //sor css osztaly hozzarendeles a flexbox miatt
        for (let j = 0; j < ulohelyek[i].length; j++) {
            let szek = document.createElement("button");    //szekek legeneralasa a sorhoz
            szek.setAttribute("id","sor-" + (i+1) + "_szek-" + (j+1));  //id beallitasa | formatum: sor-1_szek-1
            szek.setAttribute("value", j);  //ertek beallitasa a script muveletekhez
            szek.setAttribute("class", "szek"); //szek osztaly hozzarendeles
            szek.setAttribute("onclick", "ideiglenesFoglalas(" + i + ", this.value)");  //ideiglenes foglalashoz a fuggveny hozza adasa ha a gombra van kattintva
            let text = document.createTextNode(j+1);    //szoveg hozzaadasa a gombhoz
            szek.appendChild(text); //szoveg hozza adasa a gombhoz
            sor.appendChild(szek);  //aktualis szek hozza adasa a sorhoz
        }
        terem.appendChild(sor);    //sor hozzaadasa a divhez
    }
}

function ideiglenesFoglalas(sor, szek){
    console.log("sor: " + sor + " szek: " + szek);
    
    let akt_szek = document.getElementById("sor-" + (sor+1) + "_szek-" + (parseInt(szek)+1)); //aktualis szek eltarolasa
    console.log("sor-" + (sor+1) + "_szek-" + (parseInt(szek)+1));  //id kiirasa
    
    if(ulohelyek[sor][szek] == 0){  //nulla vizsgalat mert ha 2 az ertek akkor ne allitsa at
        ulohelyek[sor][szek] = 1; //ideiglenes foglalas beallitasa
        akt_szek.setAttribute("class", "szek ideiglenes"); //hatter atallitasa kekre
    }     
    else if(ulohelyek[sor][szek] == 1){  //megvizsgalni ha mar pirosan foglalt akkor ne lehessen levenni a foglalast
        ulohelyek[sor][szek] = 0;
        akt_szek.setAttribute("class", "szek"); //ha levesszuk a kijelolest vissza all a hatter
    }

    let kiir = "";
    for (let i = 0; i < ulohelyek.length; i++) {
        for (let j = 0; j < ulohelyek[i].length; j++) {
            kiir += ulohelyek[i][j] + " ";
        }
        console.log(kiir);
        kiir = "";
    }
}

function leFoglalas(){   
    legutobbiFoglalas = ""; //elozo foglalasok torlese mivel nem lettek visszamondva
    for (let i = 0; i < ulohelyek.length; i++) {   
        for (let j = 0; j < ulohelyek[i].length; j++) {
            //ulohelyek[i][j] = 1; tesztelesre minden ulohely lefoglalasa
            if(ulohelyek[i][j] == 1){
                ulohelyek[i][j] = 2;
                let szek = document.getElementById("sor-" + (i+1) + "_szek-" + (j+1));
                console.log("sor-" + (i+1) + "_szek-" + (j+1));
                szek.setAttribute("class", "szek foglalt");
                legutobbiFoglalas += i + "," + j + ";";    //legutobbi foglalt szek eltarolasa a visszamondashoz
            }
        }
    }

    console.log("Legutobb foglalt szekek: " + legutobbiFoglalas);
}

function legutobbiFoglalasVisszaMondas(){
    let szekek = legutobbiFoglalas.split(";");
    console.log("Foglalas vissza mondasa");
    for (let i = 0; i < szekek.length - 1; i++) {
        let sor = parseInt(szekek[i].split(",")[0]);
        let szek = parseInt(szekek[i].split(",")[1]);
        console.log("sor: " + sor + " szek: " + szek + " i:" + i);
        let akt_szek = document.getElementById("sor-" + (sor+1) + "_szek-" + (szek+1));
        console.log("sor-" + (sor+1) + "_szek-" + (szek+1));
        akt_szek.setAttribute("class", "szek");
        ulohelyek[sor][szek] = 0;
    }
    szekek = null;
    legutobbiFoglalas = "";
}