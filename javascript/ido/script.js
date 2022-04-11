function time(){
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let day2 ="";
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if(d.getDay() == 0){
        day2 = "hétfő";
    }else if(d.getDay() == 1){
        day2 = "kedd";
    }else if(d.getDay() == 2){
        day2 = "szerda";
    }else if(d.getDay() == 3){
        day2 = "csütörtök";
    }else if(d.getDay() == 4){
        day2 = "péntek";
    }else if(d.getDay() == 5){
        day2 = "szombat";
    }else if(d.getDay() == 6){
        day2 = "vasárnap";
    }

    document.getElementById("ido").innerText = year + "." + month + "." + day + " (" + day2 + ") " + hour + ":" + min + ":" + sec;    
    
    setTimeout("time()", 1000);
}