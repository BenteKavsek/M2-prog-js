class App {

    runApplication() {
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
        this.hello();
        this.mario();
        this.evilLaugh();
        this.optellen(2, 2);
        this.tekenHuis(g, 100, 100);
        this.tekenHuis(g, 200, 100);
        this.tekenHuis(g, 300, 100);
        this.tekenHuis(g, 100, 200);
        this.tekenHuis(g, 100, 400);
        this.tekenHuis(g, 200, 200);
        this.tekenHuis(g, 300, 300);
        this.tekenHuis(g, 300, 400);
        this.tekenKerstboom(g);
        this.kerstbal(g);

    }

    hello() {
        console.log("hello world!");
    }
    mario() {
        console.log("MARIO!!");
    }

    evilLaugh() {
        console.log("BWAHAHA!!!");
    }

    optellen(getal1, getal2) {
        console.log(getal1 + getal2);
    }

    tekenHuis(g, x, y) {

        g.fillRect(0, 0, 10, 10);

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(x + 30, y + 10);
        g.lineTo(x + 70, y + 20);
        g.lineTo(x + 60, y + 40);
        g.lineTo(x + 20, y + 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(x + 20, y + 30);
        g.lineTo(x + 20, y + 50);
        g.lineTo(x + 60, y + 60);
        g.lineTo(x + 60, y + 40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(x + 60, y + 40);
        g.lineTo(x + 80, y + 30);
        g.lineTo(x + 80, y + 50);
        g.lineTo(x + 60, y + 60);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(x + 70, y + 20);
        g.lineTo(x + 60, y + 40);
        g.lineTo(x + 80, y + 30);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenKerstboom(g) {
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(25, 20);
        g.lineTo(35, 30);
        g.lineTo(30, 30);
        g.lineTo(40, 40);
        g.lineTo(35, 40);
        g.lineTo(45, 50);
        g.lineTo(40, 50);
        g.lineTo(50, 60);
        g.lineTo(0, 60);
        g.lineTo(10, 50);
        g.lineTo(5, 50);
        g.lineTo(15, 40);
        g.lineTo(10, 40);
        g.lineTo(20, 30);
        g.lineTo(15, 30);
        g.lineTo(25, 20);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(20, 60);
        g.lineTo(20, 70);
        g.lineTo(30, 70);
        g.lineTo(30, 60);
        g.closePath();
        g.stroke();
        g.fill();
    }

    kerstbal(g) {
        g.beginPath();
        g.fillStyle = "red";
        g.arc(40, 30, 2, 0, Math.PI * 2);
        g.stroke();
        g.closePath();
        g.fill();
    }

}

let app = new App();
app.runApplication();