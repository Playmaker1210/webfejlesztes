"use sctrict"
//adatok
tutorial_opciok = ["html", "css", "javascript", "c#", "php"];

let html = {
    links: ["https://www.w3schools.com/html/default.asp", "https://html.com","https://www.codecademy.com"],
    names: ["w3schools", "html.com", "codeacademy"]
};

function navOpciokLetrehozas(){
    let option;

    for(let i = 0; i < tutorial_opciok.length; i++){
        option = document.createElement("li");
        option.setAttribute("id", tutorial_opciok[i]+"-item");   
        let button = document.createElement("button");
        button.setAttribute("onclick", "fuggvenyAmiLetrehozzaAdiveket()"); 
        /*ha rakkatintok a gombra meghivja a fuggvenyt ami letrehozza a
         megfelelo diveket a linkekhez es torli a mar letrehozott diveket
         ha nincs meg letrehozva egy sem azt is vegye figyelembe 
        */
        option.appendChild(button);
        let text = document.createTextNode(tutorial_opciok[i]);
        button.appendChild(text);
        let optionlist = document.getElementById("optionlist");
        optionlist.appendChild(option);
        console.log(tutorial_opciok + " list item created");
    }
    console.log("Divek letrehozasa");
    divLetrehozas();
}

function divLetrehozas(){
    let option;
    let index = 0;

    for(let i = 0; i < 1; i++){ //vissza irni tutorial opciok lengtre ||teszteles miatt atirva      
        option = document.createElement("div");
        option.setAttribute("class", tutorial_opciok[i]); //legorgeteshez a listabol
        for(let j = 0; j < html.links.length; j++){          
            let div = document.createElement("div");
            div.setAttribute("id", html.names[index]);
            let link = document.createElement("a");
            link.setAttribute("href", html.links[index]);
            link.setAttribute("target", "_blank");
            div.appendChild(link);
            let text = document.createTextNode(html.names[index]);
            link.appendChild(text);
            option.appendChild(div);
            index++;
        }
        let main_div = document.getElementById("nyelvek");
        main_div.appendChild(option);
        index = 0;
    }
}