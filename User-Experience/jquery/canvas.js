//let html : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
var canvas;
var crc2;
var speed = 4;
var h = window.innerHeight;
var linien = [];
let x = [];
let y = [];
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", draw);
function draw() {
    canvas = document.getElementById('cnvs');
    crc2 = canvas.getContext("2d");
    for (let i = 0; i < 3; i++) {
        linien[i] = false;
        x[i] = 0;
        y[i] = 0;
    }
    animate();
}
function scrollFunction() {
    if (document.body.scrollTop > h / 5 || document.documentElement.scrollTop > h / 5) {
        linien[0] = true;
    }
    if (document.body.scrollTop > h / 1.3 || document.documentElement.scrollTop > h / 1.3) {
        linien[1] = true;
    }
    if (document.body.scrollTop > h * 2 || document.documentElement.scrollTop > h * 2) {
        linien[2] = true;
    }
}
function line(x, y, x2, y2) {
    crc2.beginPath();
    crc2.moveTo(x, y);
    crc2.lineTo(x2, y2);
    crc2.lineWidth = 2;
    crc2.strokeStyle = '#00BFFF';
    crc2.stroke();
}
function animate() {
    crc2.clearRect(0, 0, 5000, 5000);
    if (linien[0] == true) {
        x[0] += 5;
        y[0] += 30;
        if (x[0] >= 100) {
            x[0] = 100;
        }
        if (y[0] >= 450) {
            y[0] = 450;
        }
        line(600, 350, 600 + x[0], 350 + y[0]);
    }
    if (linien[1] == true) {
        x[1] += 10;
        y[1] += 8.5;
        if (x[1] >= 300) {
            x[1] = 300;
        }
        if (y[1] >= 250) {
            y[1] = 250;
        }
        line(650, 1050, 650 - x[1], 1050 + y[1]);
    }
    if (linien[2] == true) {
        x[2] += 10;
        y[2] += 18;
        if (x[2] >= 400) {
            x[2] = 400;
        }
        if (y[2] >= 700) {
            y[2] = 700;
        }
        line(300, 1600, 300 + x[2], 1600 + y[2]);
    }
    window.setTimeout(animate, 20);
}
