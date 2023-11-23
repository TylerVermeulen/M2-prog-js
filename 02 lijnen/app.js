class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        console.log(canvas)
        g.beginPath()
        g.fillStyle = "#094094"
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill()
        g.stroke();
    }
}
let app = new App();
app.runApplication();
