"use sctrict"
//adatok
let tutorial_opciok = ["html", "css", "javascript", "c#", "php"];

let html = {
    links: ["https://www.w3schools.com/html/default.asp", "https://html.com","https://www.codecademy.com"],
    names: ["w3schools", "html.com", "codeacademy"]
};
let css = {
    links: ["https://www.w3schools.com/css/default.asp", "https://www.sololearn.com/learning/1023","https://www.freecodecamp.org/learn/"],
    names: ["w3schools", "sololearn", "freecodecamp"]
};
let javascript = {
    links: ["https://www.w3schools.com/js/default.asp", "https://javascript.info/","https://www.codecademy.com"],
    names: ["w3schools", "javascript.info", "codeacademy"]
};
let csharp = {
    links: ["https://www.w3schools.com/cs/default.asp", "https://www.tutorialsteacher.com/csharp","https://www.codecademy.com"],
    names: ["w3schools", "tutorials teacher", "codeacademy"]
};
let php = {
    links: ["https://www.w3schools.com/php/default.asp", "https://www.php.net/manual/en/index.php","https://www.codecademy.com"],
    names: ["w3schools", "php manual", "codeacademy"]
};

let nyelvek = [html, css, javascript, csharp, php];

let first_call = true;

function navOpciokLetrehozas(){
    let option;

    for(let i = 0; i < tutorial_opciok.length; i++){
        option = document.createElement("li");
        option.setAttribute("id", tutorial_opciok[i]+"-item");   
        let button = document.createElement("button");
        button.setAttribute("onclick", "divForLanguage(this)");
        button.setAttribute("value", i);
        option.appendChild(button);
        let text = document.createTextNode(tutorial_opciok[i]);
        button.appendChild(text);
        let optionlist = document.getElementById("optionlist");
        optionlist.appendChild(option);
        console.log(tutorial_opciok + " list item created");
    }
}

function divForLanguage(button){
    let main_div;
    let nyelvek_div = document.getElementById("nyelvek");
    if(!first_call){
        document.getElementById("nyelvek").removeChild(nyelvek_div.firstChild);
    }else{
        first_call = false;
    }

    main_div = document.createElement("div");
    main_div.setAttribute("id", tutorial_opciok[button.value]);

    for(let i = 0; i < nyelvek[button.value].names.length; i++){
        let div = document.createElement("div");
        div.setAttribute("id", nyelvek[button.value].names[i]);
        let link = document.createElement("a");
        link.setAttribute("href", nyelvek[button.value].links[i]);
        link.setAttribute("target", "_blank");
        div.appendChild(link);
        let text = document.createTextNode(nyelvek[button.value].names[i]);
        link.appendChild(text);
        main_div.appendChild(div);
    }

    console.log(main_div);
   
    nyelvek_div.appendChild(main_div);
}