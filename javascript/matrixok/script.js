let matrix1 = [];
let matrix1_meret = [];
let matrix2 = [];
let matrix2_meret = [];

function matrixBekeres(){
    try {
        let input = prompt("Adja meg az első mátrix méretét [AxB] formában");
        input = input.trim();
        if(input != null || input != ""){
            let sp = input.split("x");
            sp[0] = sp[0].replace("-", "");
            sp[1] = sp[1].replace("-", "");
            if(sp[0] == undefined || sp[1] == undefined) throw "Az adat rosszul lett megadva";
            if(sp[0] == "0" || sp[1] == "0"){
                do{
                    let input = prompt("Adja meg az első mátrix méretét [AxB] formában");
                    input = input.trim();
                    input = input.replace("-", "");
                    sp = input.split("x");
                }while(sp[0] == "0" || sp[1] == "0");
            }else{
                matrix1_meret[0] = parseInt(sp[0]);
                matrix1_meret[1] = parseInt(sp[1]);
            }   
            //document.getElementById("matrix1").innerText = sp[0] + " " + sp[1];
        }else{
            throw "Nem adott meg adatot";
        }

        input = prompt("Adja meg a második mátrix méretét [AxB] formában");
        input = input.trim();
        if(input != null || input != ""){
            let sp = input.split("x");
            sp[0] = sp[0].replace("-", "");
            sp[1] = sp[1].replace("-", "");
            if(sp[1] == undefined) throw "Az adat rosszul lett megadva";    
            if(sp[0] == "0" || sp[1] == "0"){
                do{
                    let input = prompt("Adja meg az első mátrix méretét [AxB] formában");
                    input = input.trim();
                    input = input.replace("-", "");
                    sp = input.split("x");
                }while(sp[0] == "0" || sp[1] == "0");
            }else{
                matrix2_meret[0] = parseInt(sp[0]);
                matrix2_meret[1] = parseInt(sp[1]);
            } 
            //document.getElementById("matrix2").innerText = sp[0] + " " + sp[1];
        }else{
            throw "Nem adott meg adatot";
        }
    } catch (error) {
        document.getElementById("matrix1").innerText = "a program hibaba futott";
        matrixBekeres();
    }

    matrixElemekBekeres();
}

function matrixEgyezesVizsgalat(){
    if(!(matrix1_meret[1] === matrix2_meret[0])){
        console.log("A ket matrixban nem egyezik a ket legkozelebbi szam!");
        return false;
    } 
        
    
    return true;
}

function matrixElemekBekeres(){
    if(!matrixEgyezesVizsgalat()) return;
    let input;
    let arr = [];

    alert("Adja meg az elso matrix elemeit!");
    //matrix1 bekerese
    for (let i = 0; i < matrix1_meret[0]; i++) {
        alert("Adja meg az " + (i+1) + ". sor elemeit");
        for (let j = 0; j < matrix1_meret[1]; j++) {
            input = prompt("Adja meg az matrix " + (j+1) + ". elemet");
            arr[j] = parseInt(input);
        }
        matrix1[i] = arr;
        console.log("Matrix1: " + matrix1[i]);
    }

    
    arr = [];
    input = null;   //ertekek lenullazasa, hogy ne maradjon adat az elozobol

    alert("Adja meg a masodik matrix elemeit!");
    //matrix2 bekerese
    for (let i = 0; i < matrix2_meret[0]; i++) {
        alert("Adja meg az " + (i+1) + ". sor elemeit");
        for (let j = 0; j < matrix2_meret[1]; j++) {
            input = prompt("Adja meg az matrix " + (j+1) + ". elemet");
            arr[j] = parseInt(input);
        }
        matrix2[i] = arr;
        console.log("Matrix2: " + matrix2[i]);
    }

    matrixSzamolas();
}

function matrixSzamolas(){
    if(!matrixEgyezesVizsgalat()) return;

    let eredmeny_matrix = [];
    let arr = [];
    let sum = 0;

    for (let i = 0; i < matrix1_meret[1]; i++) {
        for (let j = 0; j < matrix2_meret[0]; j++) {
            for (let k = 0; k < matrix1_meret[0]; k++) {
                sum += matrix1[0][k] * matrix2[k][0];              
            }
            arr[j] = sum;
            sum = 0;
        }
        eredmeny_matrix[i] = arr;
        console.log(eredmeny_matrix[i]);
    }

    matrixKiiras();
}

function matrixKiiras(){
    let matrix1_container = document.getElementById("matrix1");
    let matrix2_container = document.getElementById("matrix2");

    for (let i = 0; i < matrix1.length; i++) {
        let sor = document.createElement("div");
        sor.setAttribute("class", "sor");
        for (let j = 0; j < matrix1[i].length; j++) {
            console.log("Matrix elem: " + matrix1[i][j]);
            let elem = document.createElement("div");
            elem.setAttribute("class", "elem");
            let text = document.createTextNode(matrix1[i][j]);
            elem.appendChild(text);            
            sor.appendChild(elem);
        }
        
        matrix1_container.appendChild(sor);
    }
}


/*
1x2
    6,6

2x3
    6,6,6
    6,6,6


*/