class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        console.log(canvas)
        g.beginPath();
        g.fillStyle = "#662b2b"
        g.moveTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "#640078"
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "#9500b3"
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
    }
}
let app = new App();
app.runApplication();
