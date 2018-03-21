/*
Aufgabe: Portfolio Website
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 26.06.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
function menuOpened() {
    var offnen = document.getElementById("menuButton");
    offnen.style.display = "none";
    var close = document.getElementById("closeButton");
    close.style.display = "initial";
    var nav = document.getElementById("headerNav");
    nav.style.display = "initial";
}
function menuClosed() {
    var open = document.getElementById("menuButton");
    open.style.display = "initial";
    var close = document.getElementById("closeButton");
    close.style.display = "none";
    var nav = document.getElementById("headerNav");
    nav.style.display = "none";
}
var partsAll = ["uberMich", "timelineDiv", "projectsDiv"];
function fltr(part) {
    for (var i = 0; i < partsAll.length; i++) {
        var node = document.getElementById(partsAll[i]);
        if (part != partsAll[i]) {
            node.style.display = "none";
        }
        else {
            node.style.display = "initial";
        }
    }
}
function ausfhrng() {
    console.log("muh");
    if (window.matchMedia('(max-width: 1024px)').matches) {
        document.getElementById("closeButton").style.display = "none";
        document.getElementById("menuButton").style.display = "initial";
        document.getElementById("headerNav").style.display = "none";
        document.getElementById("menuButton").addEventListener('click', function () {
            menuOpened();
        });
        document.getElementById("closeButton").addEventListener('click', function () {
            menuClosed();
        });
    }
    else if (window.matchMedia('(min-width: 1024px)').matches) {
        document.getElementById("closeButton").style.display = "none";
        document.getElementById("menuButton").style.display = "none";
        document.getElementById("headerNav").style.display = "initial";
    }
    //Filter
    document.getElementById("uberMichLi").addEventListener('click', function () {
        fltr(partsAll[0]);
    });
    document.getElementById("timelineLi").addEventListener('click', function () {
        fltr(partsAll[1]);
    });
    document.getElementById("projectsLi").addEventListener('click', function () {
        fltr(partsAll[2]);
    });
}
function main() {
    var start1 = document.getElementById(partsAll[0]);
    start1.style.display = "initial";
    var start2 = document.getElementById(partsAll[1]);
    start2.style.display = "none";
    var start3 = document.getElementById(partsAll[2]);
    start3.style.display = "none";
    ausfhrng();
}
// Add EventListener - Funktion wird ausgeführt, sobald das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', ausfhrng);
