let bal_tartaly = [1,2,3,4,5,6]; //ha ki lett valasztva egy szam akkor a szam indexen -1 lesz
let lehetosegek = [];
//lehetosegekGen();

function lehetosegekGen(){
    for(let i = 0; i <= bal_tartaly.length; i++){
        lehetosegek[i] = 0;
    }
}


function tartaly_gen(){
    let arrLength = document.getElementById("tartaly_nagysag").value; 
    for(let i = 1; i <= arrLength; i++){
        bal_tartaly[i-1] = i;
    }
    lehetosegekGen();
}

function dobas(){
    return Math.random() * 6 + 1;
}

function darabCount(){
    let count = 0;
    for(let i = 0; i < bal_tartaly.length; i++){
        if(bal_tartaly[i] != -1){
            count++;
        }
    }
    
    return count;
}

function kiir(){
    let element = document.getElementById("eredmeny");
    element.innerText += "Bal tartály szerint eredmények: \n";
    for(let i = 0; i < lehetosegek.length; i++){
        element.innerText += i + " " + lehetosegek[i] + "\n";
        console.log(i + " " + lehetosegek[i] + "\n");
    }
}

function main(){
    tartaly_gen();
    let futasszam = document.getElementById("futasszam").value;
    for(let i = 0; i < futasszam; i++){
        dobas_eredmeny = Math.floor(dobas());
        //console.log("dobas: " + dobas_eredmeny + " i: " + i);
        if(i % 1000 == 0) console.log(i);
        if(bal_tartaly[dobas_eredmeny - 1] == dobas_eredmeny){
            bal_tartaly[dobas_eredmeny] = -1; //ha benne van a szam akkor kivesszuk
            lehetosegek[darabCount()]++; //noveljuk egyel az elofordult lehetosegek szamat
        }else if(bal_tartaly[dobas_eredmeny - 1] == -1){
            bal_tartaly[dobas_eredmeny] = dobas_eredmeny;
            lehetosegek[darabCount()]++; //noveljuk egyel az elofordult lehetosegek szamat
        }
    }
    kiir();   
}