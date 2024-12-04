window.onbeforeprint = beforePrint;

let modeAsso = "AMSEAA";

document.getElementById("prenomInput").addEventListener("input", updateNames);
document.getElementById("nomInput").addEventListener("input", updateNames);
document.getElementById("passwordInput").addEventListener("input", (e) => 
    Array.from(document.getElementsByClassName("passwordOutput")).forEach((element) => {
        inputToOutput(element, e);
    })
);

function updateNames() {
    let prenom = document.getElementById("prenomInput").value;
    let nom = document.getElementById("nomInput").value;
    document.getElementById("nomOutput").innerText = prenom + " " + nom;
    document.getElementsByTagName("title").item(0).innerText = prenom + " " + nom;

    let identifiant1 = (prenom.charAt(0) + "." + nom).toLowerCase();
    document.getElementById("identifiantOutput").innerText = identifiant1;

    let identifiant2 = `${prenom.toLowerCase()}.${nom.toLowerCase()}`;
    document.getElementById("identifiantOutput2").innerText = identifiant2;
}

function inputToOutput(element, e) {
    element.innerText = e.target.value;
}

function beforePrint() {
    let date = new Date();
    let formattedDate = date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("dateOutput").innerText = formattedDate;
}

/*function changeLogo() {
    let logoPage = document.getElementById("logoPage");
    let vague = document.getElementById("vague");
    if (modeAsso === "AMSEAA") {
        document.getElementById("titrePage").innerText = "Comptes Informatiques AMSEAA";
        logoPage.src = "assets/img/logo-amie1.jpg";
        vague.src = "assets/img/vague_amie55.jpg";
        document.getElementById("changeLogoBtn").innerText = "AMSEAA";
        modeAsso = "AMSEAA";
    } else {
        document.getElementById("titrePage").innerText = "Comptes Informatiques AMSEAA";
        logoPage.src = "assets/img/logo-amie1.jpg";
        logoPage.crossOrigin = "anonymous";
        vague.src = "assets/img/vague_amseaa.jpg";
        document.getElementById("changeLogoBtn").innerText = "AMSEAA";
        modeAsso = "AMSEAA";
    }
}*/

var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
