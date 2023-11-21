class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        this.appNaam = ("imposter");
        this.versienummer = (0.5);
        this.versiedatum = (23 + "-" + 11 + "-" + 2023)
        this.autheur = ("Tyler");
        this.copyright = ("gamers");
        this.distributeur = ("Mediacollega Amsterdam");
        this.darkmode = (true);
        this.greeting = "Starting up";
    }
}
let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);