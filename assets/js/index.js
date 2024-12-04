window.onbeforeprint = beforePrint;

let modeAsso = "ADAPEI";

document.getElementById("nomInput").addEventListener("change", (e) => {
    document.getElementById("nomOutput").innerText = e.target.value;
    nomToIdentifiantInput(e);
    document.getElementsByTagName("title").item(0).innerText = e.target.value;
    }
);

document.getElementById("identifiantInput").addEventListener("change", (e) => 
    Array.from(document.getElementsByClassName("identifiantOutput")).forEach((element) => {
        inputToOutput(element, e)
    })
);

document.getElementById("passwordInput").addEventListener("change", (e) => 
    Array.from(document.getElementsByClassName("passwordOutput")).forEach((element) => {
        inputToOutput(element, e)
    })
);

function inputToOutput(element, e){
    element.innerText = e.target.value
}

function nomToIdentifiantInput(eNom){
    let stringId = (eNom.target.value.split(" ")[0].charAt(0) + "." + eNom.target.value.split(" ")[1]).toLowerCase();
    let identifiantInput = document.getElementById("identifiantInput");
    identifiantInput.value = stringId;
    identifiantInput.dispatchEvent(new Event("change"));
}

function beforePrint(){
    let date = new Date();
    let formattedDate = date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("dateOutput").innerText = formattedDate;
}

function changeLogo(){
    let logoPage = document.getElementById("logoPage");
    let vague = document.getElementById("vague");
    if(modeAsso === "ADAPEI"){
        document.getElementById("titrePage").innerText = "Comptes Informatiques AMSEAA";
        logoPage.src ="assets/img/logo_amseaa.jpg";
        vague.src ="assets/img/vague_amseaa.jpg";
        document.getElementById("changeLogoBtn").innerText = "ADAPEI"
        modeAsso = "AMSEAA";
    } else {
        document.getElementById("titrePage").innerText = "Comptes Informatiques ADAPEI de la Meuse";
        logoPage.src ="assets/img/logo_adapei_meuse.jpg";
        logoPage.crossOrigin ="anonymous";
        vague.src ="assets/img/vague_adapei_meuse.jpg";
        document.getElementById("changeLogoBtn").innerText = "AMSEAA"
        modeAsso = "ADAPEI"; 
    }
}

var mois = new Array( "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre" );
