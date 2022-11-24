class App {

    runApplication() {
        console.log ("hello world!");
        let appNaam = "hello";
        let versienummer = 0.9;
        let versiedatum = 24112022;
        let autheur = "Bente";
        let copyright = "Me";
        let distributeur = "PostNL";
        let darkmode = true;

        console.log(appNaam, versienummer, versiedatum, autheur, copyright, distributeur, darkmode,);
    }
}

let app = new App();
app.runApplication();

