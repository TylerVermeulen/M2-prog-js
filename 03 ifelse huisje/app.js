class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        let randomGetal = Math.random();

        console.log(canvas)
        g.beginPath();
        g.fillStyle = "#662b2b"
        g.moveTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "#640078"
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#9500b3"
        g.lineTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        if (randomGetal < 0.5){
            g.fillStyle = "#f2eb27"
        } else {
            g.fillStyle = "#120b3d"
        }
        g.moveTo(550,520);
        g.lineTo(400,480);
        g.lineTo(400,400);
        g.lineTo(550,440);
        g.lineTo(550,520);
        g.closePath();
        g.stroke();
        g.fill()
    }
}
let app = new App();
app.runApplication();
