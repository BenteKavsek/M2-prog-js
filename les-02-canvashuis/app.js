class App {

    runApplication() {
        console.log("hello world!");
        let canvas = document.getElementById("canvasID");

         let g = canvas.getContext("2d");
         console.log(canvas)
         g.fillRect(0,0,10,10);

         g.beginPath();
         g.fillStyle = "red";
         g.moveTo(30,10);
         g.lineTo(70,20);
         g.lineTo(60,40);
         g.lineTo(20,30);
         g.closePath();
         g.stroke();
         g.fill();

         g.beginPath();
         g.fillStyle = "yellow";
         g.moveTo(20,30);
         g.lineTo(20,50);
         g.lineTo(60,60);
         g.lineTo(60,40);
         g.closePath();
         g.stroke();
         g.fill();

         g.beginPath();
         g.fillStyle = "blue";
         g.moveTo(60,40);
         g.lineTo(80,30);
         g.lineTo(80,50);
         g.lineTo(60,60);
         g.closePath();
         g.stroke();
         g.fill();

         g.beginPath();
         g.fillStyle = "green";
         g.moveTo(70,20);
         g.lineTo(60,40);
         g.lineTo(80,30);
         g.closePath();
         g.stroke();
         g.fill();
    }
}

let app = new App();
app.runApplication();

