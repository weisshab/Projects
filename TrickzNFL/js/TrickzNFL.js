/*
Aufgabe: Aufgabe-12-Funktionen
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 14.06.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A13;
(function (A13) {
    //Objekt 1 Initialisierung
    var product01 = {
        title: "R. Wilson",
        description: "Seahawks",
        position: "QB",
        where: "AFC",
        price: 99.99,
        numberOfProducts: 22,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/RussellWilson.jpg",
        stoerer: true
    };
    //Objekt 2 Initialisierun
    var product02 = {
        title: "T. Brady",
        description: "Patriots",
        position: "QB",
        where: "AFC East",
        price: 89.99,
        numberOfProducts: 2,
        timeOfDeliver: "1 Werktag",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [60, 40, 30],
        imgSrc: "Img/Brady.jpg",
        stoerer: true
    };
    //Objekt 3 Initialisierung
    var product03 = {
        title: "M. Ryan",
        description: "Falcons",
        position: "QB",
        where: "NFC South",
        price: 79.99,
        numberOfProducts: 12,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [50, 30, 30],
        imgSrc: "Img/Ryan.jpg",
        stoerer: false
    };
    var product04 = {
        title: "A. Rodgers",
        description: "Packers",
        position: "QB",
        where: "NFC North",
        price: 79.99,
        numberOfProducts: 23,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [50, 30, 30],
        imgSrc: "Img/AaronRodgers.jpg",
        stoerer: true
    };
    var product05 = {
        title: "A. Smith",
        description: "Chiefs",
        position: "QB",
        where: "AFC West",
        price: 79.99,
        numberOfProducts: 3,
        timeOfDeliver: "5 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [50, 30, 30],
        imgSrc: "Img/AlexSmith.jpg",
        stoerer: false
    };
    var product06 = {
        title: "A. Brown",
        description: "Steelers North",
        position: "WR",
        where: "AFC",
        price: 80.99,
        numberOfProducts: 12,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [50, 30, 30],
        imgSrc: "Img/AntonioBrown.jpg",
        stoerer: true
    };
    var product07 = {
        title: "Roethlisberger",
        description: "Steelers",
        position: "QB",
        where: "AFC North",
        price: 129.99,
        numberOfProducts: 12,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [50, 30, 30],
        imgSrc: "Img/BenRoethlisberger.jpg",
        stoerer: false
    };
    var product08 = {
        title: "C. Newton",
        description: "Panthers",
        position: "QB",
        where: "NFC South",
        price: 40.99,
        numberOfProducts: 15,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [50, 30, 30],
        imgSrc: "Img/Newton.jpg",
        stoerer: true
    };
    var product09 = {
        title: "Beckham Jr",
        description: "Giants",
        position: "WR",
        where: "NFC East",
        price: 79.99,
        numberOfProducts: 15,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/OBJ.jpg",
        stoerer: false
    };
    var product10 = {
        title: "J. Jones",
        description: "Falcons",
        position: "WR",
        where: "NFC South",
        price: 99.99,
        numberOfProducts: 1,
        timeOfDeliver: "2 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/JulioJones.jpg",
        stoerer: true
    };
    var product11 = {
        title: "J. Edelman",
        description: "Patriots",
        position: "WR",
        where: "AFC East",
        price: 89.99,
        numberOfProducts: 3,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/JulianEdelman.jpg",
        stoerer: false
    };
    var product12 = {
        title: "M. Lynch",
        description: "Seahawks",
        position: "RB",
        where: "NFC West",
        price: 79.99,
        numberOfProducts: 19,
        timeOfDeliver: "1 Werktag",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/MarshawnLynch.jpg",
        stoerer: true
    };
    var product13 = {
        title: "D. Brees",
        description: "Saints",
        position: "QB",
        where: "NFC South",
        price: 79.99,
        numberOfProducts: 33,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/DrewBrees.jpg",
        stoerer: false
    };
    var product14 = {
        title: "L. Bell",
        description: "Steelers",
        position: "RB",
        where: "AFC North",
        price: 119.99,
        numberOfProducts: 23,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/Le'VeonBell.jpg",
        stoerer: false
    };
    var product15 = {
        title: "D. Baldwin",
        description: "Seahawks",
        position: "WR",
        where: "NFC West",
        price: 79.99,
        numberOfProducts: 23,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/DougBaldwin.jpg",
        stoerer: false
    };
    var product16 = {
        title: "B. Osweiler",
        description: "Texans",
        position: "QB",
        where: "AFC",
        price: 80.99,
        numberOfProducts: 43,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/BrockOsweiler.jpg",
        stoerer: false
    };
    var product17 = {
        title: "A. Luck",
        description: "Colts",
        position: "QB",
        where: "AFC South",
        price: 79.99,
        numberOfProducts: 20,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/AndrewLuck.jpg",
        stoerer: false
    };
    var product18 = {
        title: "P. Manning",
        description: "Broncos ",
        position: "QB",
        where: "AFC West",
        price: 10.99,
        numberOfProducts: 20,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/PeytonManning.jpg",
        stoerer: false
    };
    var product19 = {
        title: "Fitzpatrick",
        description: "Jets",
        position: "QB",
        where: "AFC East",
        price: 79.99,
        numberOfProducts: 50,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/RyanFitzpatrick.jpg",
        stoerer: true
    };
    var product20 = {
        title: "T. Siemian",
        description: "Broncos",
        position: "QB",
        where: "AFC West",
        price: 39.99,
        numberOfProducts: 0,
        timeOfDeliver: "3 Werktage",
        available: false,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/TrevorSiemian.jpg",
        stoerer: false
    };
    var product21 = {
        title: "D. Carr",
        description: "Raiders",
        position: "QB",
        where: "AFC West",
        price: 79.99,
        numberOfProducts: 10,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/DerekCarr.jpg",
        stoerer: false
    };
    var product22 = {
        title: "Eli Manning",
        description: "Giants",
        position: "QB",
        where: "NFC East",
        price: 59.99,
        numberOfProducts: 11,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/EliManning.jpg",
        stoerer: false
    };
    var product23 = {
        title: "S. Bradford",
        description: "Vikings",
        position: "QB",
        where: "NFC North",
        price: 79.99,
        numberOfProducts: 15,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/SamBradford.jpg",
        stoerer: false
    };
    var product24 = {
        title: "R. Griffin",
        description: "Redskins",
        position: "QB",
        where: "NFC East",
        price: 99.99,
        numberOfProducts: 0,
        timeOfDeliver: "3 Werktage",
        available: false,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/RobertGriffin.jpg",
        stoerer: false
    };
    var product25 = {
        title: "C. Palmer",
        description: "Cardinals",
        position: "QB",
        where: "NFC West",
        price: 79.99,
        numberOfProducts: 0,
        timeOfDeliver: "3 Werktage",
        available: false,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/Palmer.jpg",
        stoerer: false
    };
    var product26 = {
        title: "E. Elliott",
        description: "Cowboys",
        position: "RB",
        where: "NFC East",
        price: 79.99,
        numberOfProducts: 21,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/EzekielElliott.jpg",
        stoerer: true
    };
    var product27 = {
        title: "D. Prescott",
        description: "Cowboys",
        position: "QB",
        where: "NFC East",
        price: 79.99,
        numberOfProducts: 1,
        timeOfDeliver: "3 Werktage",
        available: true,
        size: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
        pack: [40, 30, 30],
        imgSrc: "Img/DakPrescott.jpg",
        stoerer: false
    };
    var column1 = {
        h3: "<h3>Bezahlung</h3>",
        li0: "<li class='footer-li'><a href=''>Bar bei Abholung</a></li>",
        li1: "<li class='footer-li'><a href=''>Kreditkarte</a></li>",
        li2: "<li class='footer-li'><a href=''>Auf Rechnung</a></li>",
        li3: "<li class='footer-li'><a href=''>PayPal</a></li>",
    };
    var column2 = {
        h3: "<h3>Social Media</h3>",
        li0: "<li class='footer-li'><a href=''>Facebook</a></li>",
        li1: "<li class='footer-li'><a href=''>Twitter</a></li>",
        li2: "<li class='footer-li'><a href=''>Instagram</a></li>",
        li3: "<li class='footer-li'><a href=''>Youtube</a></li>",
    };
    var column3 = {
        h3: "<h3>Hilfe</h3>",
        li0: "<li class='footer-li'><a href=''>FAQ's</a></li>",
        li1: "<li class='footer-li'><a href=''>Rückerstattung</a></li>",
        li2: "<li class='footer-li'><a href=''>Wo ist mein Paket?</a></li>",
        li3: "<li class='footer-li'><a href=''>NFL</a></li>",
    };
    var column4 = {
        h3: "<h3>Allgemienes</h3>",
        li0: "<li class='footer-li'><a href=''>Kontakt</a></li>",
        li1: "<li class='footer-li'><a href=''>Impressum</a></li>",
        li2: "<li class='footer-li'><a href=''>Urheberrecht</a></li>",
        li3: "<li class='footer-li'><a href=''>Siehe auch</a></li>",
    };
    //11.1 Shop Objekte in Array Speichern
    var shopProducts = [product01, product02, product03, product04, product05, product06, product07, product08, product09, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27];
    // Funktion zur Ausgabe im HTML-Code mit Hilfe einer Schleife
    function generateProductOverview() {
        var node = document.getElementById("mainContent");
        // HTML String
        var childNodeHTML;
        // Zählvariable initialisieren
        var i = 0;
        /*
           <div class="Box-1">
                    <img src="Img/RussellWilson.jpg" alt="Russell Wilson">
                    
                    <div class="Box-1-1">
                        <ul>
                            <li>R. Wilson</li>
                            <li>Seahawks</li>
                            <li>$ 79,99</li>
                            <li><a href="">Mehr Infos</a></li>
                            <li><button type="button" onclick="alert('Danke, Sie haben nun eine Waschmaschine gekauft :)')" class="button">Jetzt Kaufen</button></li>
                        </ul>
                        
                      
                        
                    </div>
                </div>
        */
        //for Schleife (erstellt Quelltext für jedes einzelne Produkt) 
        for (i = 0; i < shopProducts.length; i++) {
            // Ausgabe Titel des Produkts und des Bildnamens
            //console.log (shopProducts[i].title, shopProducts[i].imgSrc)
            childNodeHTML = "";
            childNodeHTML += "<div class='Box-1'";
            childNodeHTML += "id=filter0" + i + ">"; // Gibt jeder Box die id filter0X mit
            childNodeHTML += "<img src=";
            childNodeHTML += shopProducts[i].imgSrc;
            childNodeHTML += ">";
            childNodeHTML += "<div class='Box-1-1'><ul>";
            childNodeHTML += "<li>";
            childNodeHTML += shopProducts[i].title;
            childNodeHTML += "</li>";
            childNodeHTML += "<li>";
            childNodeHTML += shopProducts[i].description;
            childNodeHTML += "</li>";
            childNodeHTML += "<li>";
            childNodeHTML += shopProducts[i].price;
            childNodeHTML += "</li>";
            childNodeHTML += "<li class='button2'>Mehr Infos</li>";
            childNodeHTML += "<li><button type='button' onclick='alert('Das Produkt liegt jetzt in ihrem Wahrenkorb')' class='button'>Jetzt Kaufen";
            childNodeHTML += "</button></li></ul>";
            if (shopProducts[i].stoerer == true) {
                childNodeHTML += "<div class='fastweg'>nur noch 5 verfügbar!</div>";
            }
            childNodeHTML += "</div></div>";
            //console.log (childNodeHTML);
            node.innerHTML += childNodeHTML;
        }
    }
    A13.generateProductOverview = generateProductOverview;
    //Preisfilter Funktion
    function filterByPrice(costs1, costs2) {
        let n = 0;
        for (n = 0; n < shopProducts.length; n++) {
            var node = document.getElementById("filter0" + n);
            if (shopProducts[n].price > costs1 && shopProducts[n].price < costs2) {
                node.style.display = "initial";
            }
            else {
                node.style.display = "none";
            }
        }
    }
    //Filter nach Liga/Region
    function filterByRegion(region) {
        let y = 0;
        for (y = 0; y < shopProducts.length; y++) {
            var node1 = document.getElementById("filter0" + y);
            if (shopProducts[y].where != region && region != "All") {
                node1.style.display = "none";
            }
            else {
                node1.style.display = "initial";
            }
        }
    }
    //Filter nach Feldposition
    function filterByPosition(posi) {
        let y = 0;
        for (y = 0; y < shopProducts.length; y++) {
            let node = document.getElementById("filter0" + y);
            if (shopProducts[y].position != posi && posi != "All") {
                node.style.display = "none";
            }
            else {
                node.style.display = "initial";
            }
        }
    }
    // Hauptprogramm
    function main() {
        // Content erzeugen
        generateProductOverview();
        generateFooter();
        //Event Listener installieren für Filter-Buttons
        //Preisfilter
        document.getElementById("filter10").addEventListener('click', function () {
            filterByPrice(10.00, 50.00);
        });
        document.getElementById("filter50").addEventListener('click', function () {
            filterByPrice(50.00, 80.00);
        });
        document.getElementById("filter80").addEventListener('click', function () {
            filterByPrice(80.00, 100.00);
        });
        document.getElementById("filter100").addEventListener('click', function () {
            filterByPrice(100.00, 150.00);
        });
        document.getElementById("filterall").addEventListener('click', function () {
            filterByPrice(0.00, 1000.00);
        });
        //Filter nach Liga
        document.getElementById("All").addEventListener('click', function () {
            filterByRegion("All");
        });
        document.getElementById("NFCEast").addEventListener('click', function () {
            filterByRegion("NFC East");
        });
        document.getElementById("NFCWest").addEventListener('click', function () {
            filterByRegion("NFC West");
        });
        document.getElementById("NFCNorth").addEventListener('click', function () {
            filterByRegion("NFC North");
        });
        document.getElementById("NFCSouth").addEventListener('click', function () {
            filterByRegion("NFC South");
        });
        document.getElementById("AFCEast").addEventListener('click', function () {
            filterByRegion("AFC East");
        });
        document.getElementById("AFCWest").addEventListener('click', function () {
            filterByRegion("AFC West");
        });
        document.getElementById("AFCNorth").addEventListener('click', function () {
            filterByRegion("AFC North");
        });
        document.getElementById("AFCSouth").addEventListener('click', function () {
            filterByRegion("AFC South");
        });
        //Filter nach Position
        document.getElementById("AllPosi").addEventListener('click', function () {
            filterByPosition("All");
        });
        document.getElementById("QB").addEventListener('click', function () {
            filterByPosition("QB");
        });
        document.getElementById("RB").addEventListener('click', function () {
            filterByPosition("RB");
        });
        document.getElementById("WR").addEventListener('click', function () {
            filterByPosition("WR");
        });
    }
    A13.main = main;
    // Add EventListener - Funktion wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener('DOMContentLoaded', main);
    /***************************************************************************************************************/
    /***************************************************************************************************************/
    /***************************************************************************************************************/
    //Spalten des Footer in Array Speichern
    var columns = [column1, column2, column3, column4];
    //funktion zur Erstellung des Footer
    function generateFooter() {
        var node1 = document.getElementById("footerContent");
        //HTML-String
        var childNodeHTML1;
        //Zählervariable
        var j = 0;
        /*<div>
                <h3>Bezahlung</h3>
                <ul>
                    <li class="footer-li"><a href="">Bar bei Abholung</a></li>
                    <li class="footer-li"><a href="">Kreditkarte</a></li>
                    <li class="footer-li"><a href="">Auf Rechnung</a></li>
                    <li class="footer-li"><a href="">PayPal</a></li>
                </ul>
         </div>*/
        //Schleife um obiges div zu erstellen
        for (j = 0; j < columns.length; j++) {
            childNodeHTML1 = "";
            childNodeHTML1 += "<div>";
            childNodeHTML1 += columns[j].h3;
            childNodeHTML1 += "<ul>";
            childNodeHTML1 += columns[j].li0;
            childNodeHTML1 += columns[j].li1;
            childNodeHTML1 += columns[j].li2;
            childNodeHTML1 += columns[j].li3;
            childNodeHTML1 += "</ul></div>";
            //console.log (childNodeHTML1);
            node1.innerHTML += childNodeHTML1;
        }
    }
    A13.generateFooter = generateFooter;
})(A13 || (A13 = {}));
//# sourceMappingURL=TrickzNFL.js.map